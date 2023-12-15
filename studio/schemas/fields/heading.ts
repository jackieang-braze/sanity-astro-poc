import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingSize',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'H5', value: 'h5'},
          {title: 'H6', value: 'h6'},
        ],
      },
    }),
  ],
})
