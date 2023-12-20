// Image with alt text

export default {
  name: 'allyImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
}
