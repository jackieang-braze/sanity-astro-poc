import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'learningPathway',
  title: 'Learning Pathway',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'learningPathwayUrl',
      title: 'URL',
      type: 'url',
    }),
  ],
})
