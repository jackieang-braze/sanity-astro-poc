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
    defineField({
      name: 'background',
      title: 'Background',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'string',
          options: {
            list: [
              {title: 'None', value: undefined},
              {title: 'Squiggle 1', value: 'squiggle-1'},
              {title: 'Squiggle 2', value: 'squiggle-2'},
            ],
          },
          initialValue: undefined,
        }),
        defineField({
          name: 'color',
          title: 'Color',
          type: 'string',
          options: {
            list: [
              {title: 'White', value: 'white'},
              {title: 'Blue', value: 'blue-500'},
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
      ],
    }),
  ],
})
