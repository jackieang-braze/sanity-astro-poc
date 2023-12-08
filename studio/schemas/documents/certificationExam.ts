import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificationExam',
  title: 'Certification Exam',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'learningPathway',
      title: 'Learning Path',
      type: 'reference',
      to: [{type: 'learningPathway'}],
    }),
    defineField({
      name: 'examStudyGuide',
      title: 'examStudyGuide',
      type: 'url',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'examDetails',
      options: {
        collapsible: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      shortDescription: 'shortDescription',
    },
    prepare(selection) {
      const {title, shortDescription} = selection
      return {
        ...selection,
        shortDescription: shortDescription,
      }
    },
  },
})
