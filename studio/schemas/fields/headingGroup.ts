import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'headingGroup',
  title: 'Heading Group',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Heading',
      type: 'heading',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
  ],
})
