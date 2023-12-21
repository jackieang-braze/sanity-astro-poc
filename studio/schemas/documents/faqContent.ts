import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqContent',
  title: 'FAQ Content',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'faq'}],
    }),
  ],
})
