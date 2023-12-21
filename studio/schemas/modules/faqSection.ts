import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      initialValue: 'Frequently Asked Questions',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'faqContent'}],
    }),
  ],
})
