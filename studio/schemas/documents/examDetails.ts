import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'examDetails',
  title: 'Exam Details',
  type: 'document',
  fields: [
    defineField({
      name: 'examDuration',
      title: 'Exam Duration (Minutes)',
      type: 'number',
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
      name: 'examLanguage',
      title: 'Exam Language',
      type: 'reference',
      to: [{type: 'language'}],
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
