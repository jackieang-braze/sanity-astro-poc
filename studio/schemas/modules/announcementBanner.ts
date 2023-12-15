import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcementBanner',
  title: 'Announcement Banner',
  type: 'object',
  fields: [
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
      name: 'bannerImage',
      title: 'Background Image',
      type: 'image',
    }),
  ],
})
