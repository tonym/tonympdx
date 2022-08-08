const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateAuthor (author) {
  return {
    ...author,
    bio: BlocksToMarkdown(author.bio, { serializers, ...client.config() })
  }
}

async function getAuthor () {
  const filter = groq`*[_type == "author" && slug.current == "tony-m"][0]`
  const doc = await client.fetch(filter).catch(err => console.error(err))
  const author = generateAuthor(doc);
  const reducedAuthor = overlayDrafts(hasToken, author)
  return reducedAuthor
}

module.exports = getAuthor
