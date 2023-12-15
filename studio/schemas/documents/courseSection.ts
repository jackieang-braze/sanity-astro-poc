import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'courseSection',
  title: 'Course Section',
  type: 'document',
  fields: [
    defineField({
      name: 'certExamSectionHeading',
      title: 'Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'certExamSectionSubheading',
      title: 'Section Subheading',
      type: 'string',
    }),
    defineField({
      name: 'courseSectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          {title: 'Certification', value: 'certification'},
          {title: 'Course', value: 'course'},
          {title: 'Learning Path', value: 'learningPathway'},
          {title: 'Mixed', value: 'mixed'},
        ],
      },
    }),
    defineField({
      name: 'courseSection',
      title: 'Exams',
      type: 'array',
      of: [
        {
          type: 'reference',
          name: 'certificationExam',
          to: [{type: 'certificationExam'}],
        },
      ],
    }),
  ],
})
