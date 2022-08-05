export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
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
      name: 'projectStartDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'projectDate',
      title: 'Dates',
      type: 'string'
    },
    {
      name: 'projectCategory',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Coding', value: 'coding'},
          {title: 'Creative', value: 'creative'}
        ]
      }
    },
    {
      name: 'projectType',
      title: 'Type',
      type: 'string'
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'string'
    },
    {
      name: 'projectTech',
      title: 'Media/technology',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'blockContent'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
