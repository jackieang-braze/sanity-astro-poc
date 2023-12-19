import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificationExam',
  title: 'Certification Exam',
  type: 'document',
  groups: [
    {name: 'cardDetails', title: 'Card Details'},
    {name: 'pageContent', title: 'Page Content'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: ['cardDetails', 'pageContent'],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: ['cardDetails', 'pageContent'],
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      group: ['cardDetails'],
      type: 'text',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      group: ['pageContent'],
      type: 'blockContent',
    }),
    defineField({
      name: 'learningPathway',
      title: 'Learning Path',
      group: ['pageContent'],
      type: 'reference',
      to: [{type: 'learningPathway'}],
    }),
    defineField({
      name: 'examStudyGuide',
      title: 'examStudyGuide',
      group: ['pageContent'],
      type: 'url',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      group: ['cardDetails', 'pageContent'],
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
