import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialCard',
  title: 'Testimonial Card',
  type: 'document',
  fields: [
    defineField({
      name: 'highlighted',
      title: 'Highlighted',
      type: 'string',
      description: 'This is the part of the testimonial that will be bolded.',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
    }),
    defineField({
      name: 'sourceName',
      title: 'Source Name',
      description: 'Name of the person who gave the testimonial.',
      type: 'string',
    }),
    defineField({
      name: 'sourceDescription',
      title: 'Source Description',
      type: 'string',
      description: 'i.e. "CEO,Company X',
    }),
    defineField({
      name: 'headshot',
      title: 'Testimonial Headshot',
      type: 'image',
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'allyImage',
      initialValue: {
        alt: 'Company Logo',
      },
    }),
  ],
})
