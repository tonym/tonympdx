const BlocksToMarkdown = require('@sanity/block-content-to-markdown');
const groq = require('groq');
const client = require('../utils/sanityClient.js');
const serializers = require('../utils/serializers');
const overlayDrafts = require('../utils/overlayDrafts');
const hasToken = !!client.config().token;

function generatePost(post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() })
  };
}

async function getPosts() {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "project" && defined(slug)]`;
  const projection = groq`{
    ...,
    mainImage{
      ...,
      asset->{url}
    },
    summary{
      ...,
      asset->{url}
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
  const preparePosts = reducedDocs.map(generatePost);
  return preparePosts;
}

module.exports = getPosts;
