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
      type: 'text',
      validation: (Rule) => Rule.max(200),
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
          type: 'image',
        }),
        defineField({
          name: 'color',
          title: 'Color',
          type: 'simplerColor',
          options: {
            colorList: [
              {label: 'White', value: '#ffff'},
              {label: 'Gray 50', value: '#f8f9f9'},
              {label: 'Dark Blue 300', value: '#a6aed9'},
              {label: 'Blue Fuchsia Gradient', value: '#989FE5'},
              {label: 'Blue 50', value: '#ecf5ff'},
              {label: 'Blue 300', value: '#99c3f4'},
              {label: 'Blue 800', value: '#005cc7'},
            ],
          },
          initialValue: 'white',
        }),
      ],
    }),
  ],
})
