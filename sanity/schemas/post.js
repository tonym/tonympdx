export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'copyright',
              title: 'Copyright',
              type: 'string',
              options: { isHighlighted: true }
            },
            {
              name: 'imageTitle',
              title: 'Title',
              type: 'string',
              options: { isHighlighted: true }
            },
            {
              name: 'imageSubTitle',
              title: 'Subtitle',
              type: 'string',
              options: { isHighlighted: true }
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'blockContent',
              options: { isHighlighted: true }
            }
          ],
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'blockContent',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
