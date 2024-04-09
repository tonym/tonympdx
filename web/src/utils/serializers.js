const imageUrl = require('./imageUrl')

// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    image: ({node}) => {
      const ret = `![${node.alt}](${imageUrl(node).width(600).url()})`;
      return node.caption ? `${ret}<span class="caption">${node.caption}</span>` : ret;
    },
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => `![${node.alt}](${imageUrl(node).width(600).url()})`
  }
}
