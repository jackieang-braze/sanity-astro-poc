import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'fullWidthBanner',
  title: 'Full Width Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'bannerBlockContent',
    }),
    defineField({
      name: 'contentWidth',
      title: 'Content Width',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
          {title: 'Extra Large', value: 'xl'},
        ],
      },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      description: 'Buttons at the bottom of the banner. Note: Multiple will appear in a row.',
      type: 'array',
      of: [{type: 'cta'}],
      validation: (Rule) => Rule.max(2),
    }),

    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      options: {
        colorList: [
          {label: 'White', colorVar: 'white', value: '#ffff'},
          {label: 'Gray 50', colorVar: 'gray-50', value: '#f8f9f9'},
          {label: 'Dark Blue 300', value: '#a6aed9'},
          {label: 'Blue Fuchsia Gradient', value: '#989FE5'},
          {label: 'Blue 50', value: '#ecf5ff'},
          {label: 'Blue 300', value: '#99c3f4'},
          {label: 'Blue 800', value: '#005cc7'},
        ],
      },
    }),
  ],
})
