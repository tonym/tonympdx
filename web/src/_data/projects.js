const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');
const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers');
const overlayDrafts = require('../utils/overlayDrafts');
const hasToken = !!client.config().token;

function generateProject(project) {
  return {
    ...project,
    summary: BlocksToMarkdown(project.summary, { serializers, ...client.config()}),
    body: BlocksToMarkdown(project.body, { serializers, ...client.config() })
  };
}

async function getProjects() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "project" && defined(slug)]`;
  const projection = groq`{
    ...,
    mainImage{
      ...,
      asset->{url}
    },
    summary[]{
      ...,
      _type == "image" => {
        asset->{url}
      }
    },
    body[]{
      ...,
      _type == "image" => {
        asset->{url}
      }
    },
    gallery[]{
      ...,
      _type == "image" => {
        asset->{url}
      }
    }
  }`;
  const order = `| order(projectStartDate desc)`;
  const query = [filter, projection, order].join(' ');
  const docs = await client.fetch(query).catch((err) => console.error(err));
  const reducedDocs = overlayDrafts(hasToken, docs);
  const preparedProjects = reducedDocs.map(generateProject);
  return preparedProjects;
}

module.exports = getProjects;
