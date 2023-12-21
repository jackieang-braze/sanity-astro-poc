import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'announcementBanner',
  title: 'Announcement Banner',
  icon: ImageIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
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
      name: 'statusFlag',
      title: 'Status Flag',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: undefined},
          {title: 'New', value: 'New!'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: undefined,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare: ({title}) => ({
      title: `${title}`,
      subtitle: 'Announcement Banner',
    }),
  },
})
