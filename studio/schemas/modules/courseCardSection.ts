import {defineType, defineField} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'courseCardSection',
  title: 'Course Card Section',
  icon: ThLargeIcon,
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
      cards: 'content',
    },
    prepare: ({cards}) => {
      const cardsCount = cards.length
      return {
        title: 'Course Card Section',
        subtitle: `${cardsCount} ${cardsCount === 1 ? 'block' : 'blocks'}`,
      }
    },
  },
})
