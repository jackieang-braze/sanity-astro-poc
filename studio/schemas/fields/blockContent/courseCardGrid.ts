import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'courseCardGrid',
  title: 'Course Card Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'gridHeading',
      title: 'Section Heading and Subheading',
      type: 'headingGroup',
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'columnsAtFullWidth',
      title: 'Columns at Max Width',
      type: 'number',
      description: 'Number of columns to display at max width',
      validation: (Rule) => Rule.min(1).max(3),
      initialValue: 3,
    }),
    defineField({
      name: 'cardType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [{title: 'Certification', value: 'certification'}],
      },
    }),
    defineField({
      name: 'cardSection',
      title: 'Exams',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'card',
          to: [{type: 'certificationExam'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'gridHeading.heading',
      subtitle: 'cardSection',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: `${subtitle.length} exams`,
      }
    },
  },
})
