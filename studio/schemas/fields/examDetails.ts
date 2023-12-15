import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'examDetails',
  title: 'Exam Details',
  type: 'object',
  fields: [
    defineField({
      name: 'examDuration',
      title: 'Exam Duration (Minutes)',
      type: 'number',
    }),
    defineField({
      name: 'examLevel',
      title: 'Exam Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'examNumberOfQuestions',
      title: 'Number of Questions',
      type: 'number',
    }),
    defineField({
      name: 'examFormat',
      title: 'Exam Format',
      type: 'string',
    }),
    defineField({
      name: 'examPassingScore',
      title: 'Exam Passing Score (%)',
      type: 'number',
    }),
    defineField({
      name: 'examPrice',
      title: 'Exam Price (USD)',
      type: 'number',
    }),
  ],
})
