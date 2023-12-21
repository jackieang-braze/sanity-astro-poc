import {defineType, defineField} from 'sanity'
import {StackCompactIcon} from '@sanity/icons'
export default defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  icon: StackCompactIcon,
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
  preview: {
    select: {
      title: 'heading',
      sections: 'content',
    },
    prepare: ({sections}) => ({
      title: `FAQ Section`,
      subtitle: `${sections.length} ${sections.length === 1 ? 'block' : 'blocks'}`,
    }),
  },
})
