import {defineType, defineField} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  icon: ThLargeIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Testimonials',
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: 'testimonialHeading',
      title: 'Heading',
      type: 'headingGroup',
    }),
    defineField({
      name: 'columnsAtFullWidth',
      title: 'Columns at Full Width',
      type: 'number',
      description: 'Number of columns to display at full width (max 4)',
      validation: (Rule) => Rule.min(1).max(4),
      initialValue: 3,
    }),
    defineField({
      name: 'testimonialCards',
      title: 'Testimonial Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'testimonial',
          to: [{type: 'testimonialCard'}],
        },
      ],
    }),
    defineField({
      name: 'testimonialCta',
      title: 'CTA',
      type: 'cta',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Teal 700', value: 'teal-700'},
          {title: 'Blue 50', value: 'blue-50'},
          {title: 'White', value: 'white'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'testimonialHeading.heading',
    },
    prepare: ({title}) => ({
      title: `${title}`,
      subtitle: 'Testimonial Section',
    }),
  },
})
