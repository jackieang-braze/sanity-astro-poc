import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'CTA 1',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'cta2',
      title: 'CTA 2',
      type: 'reference',
      to: [{type: 'cta'}],
    }),

    // defineField({
    //   name: 'heroImage',
    //   title: 'Hero Image',
    //   type: 'string',
    // }),
  ],
})
