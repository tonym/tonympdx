const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePost (post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() }),
    summary: BlocksToMarkdown(post.summary, { serializers, ...client.config() })
  }
}

async function getPosts () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "post" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
  _id,
  publishedAt,
  body[]{
    ...,
    _type == "image" => {
      asset->{url}
    }
  },
  categories,
  slug,
  summary,
  title,
  "authorName": author->name,
  "authorAvatar": author->avatar.asset->url
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePosts = reducedDocs.map(generatePost)
  return preparePosts
}

module.exports = getPosts
