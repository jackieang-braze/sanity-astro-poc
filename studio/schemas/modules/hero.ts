import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
  },
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
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      description: 'Max 2 CTAs!!!',
      of: [
        defineField({
          name: 'cta',
          title: 'CTA',
          type: 'cta',
        }),
      ],
      validation: (Rule) => Rule.max(2),
    }),

    // defineField({
    //   name: 'cta',
    //   title: 'CTA 1',
    //   type: 'reference',
    //   to: [{type: 'cta'}],
    // }),
    // defineField({
    //   name: 'cta2',
    //   title: 'CTA 2',
    //   type: 'reference',
    //   to: [{type: 'cta'}],
    // }),

    // defineField({
    //   name: 'heroImage',
    //   title: 'Hero Image',
    //   type: 'string',
    // }),
  ],
})
