import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'courseCardSection',
  title: 'Course Card Section',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'courseCardGrid'}],
    }),
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare: ({title}) => ({
      title: `Course Card Section`,
    }),
  },
})
