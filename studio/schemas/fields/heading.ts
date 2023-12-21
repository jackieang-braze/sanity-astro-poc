import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'headingSize',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          {title: 'D1', value: 'd1'},
          {title: 'D2', value: 'd2'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
        ],
      },
      initialValue: 'h1',
    }),
  ],
})
