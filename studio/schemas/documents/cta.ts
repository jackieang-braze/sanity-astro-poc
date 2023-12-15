import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    //defineField for link where you can either make it a target or url
    defineField({
      name: 'link',
      title: 'Link',
      description:
        'External links go to other websites, internal links go to other pages on the site, and target links go to a specific part of the page.',
      type: 'string',
      options: {
        list: [
          {title: 'External', value: 'external'},
          {title: 'Internal', value: 'internal'},
          {title: 'Target', value: 'target'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      hidden: ({parent}) => parent?.link !== 'external',
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.link !== 'internal',
    }),
    //LATER ON: Fix so that it allows picking from modules on
    defineField({
      name: 'targetLink',
      title: 'Target Link',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((targetLink, {document}) => {
          if (document?.link !== 'target') {
            return true
          } else if (targetLink && targetLink.startsWith('#')) {
            return true
          }
          return 'Target links must start with a #'
        }),
      hidden: ({parent}) => parent?.link !== 'target',
    }),
    defineField({
      name: 'showArrow',
      title: 'Show Arrow',
      type: 'boolean',
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Calendar', value: 'calendar'},
          {title: 'Question Mark', value: 'question-mark'},
        ],
      },
      hidden: ({parent}) => !parent?.showIcon,
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Tertiary', value: 'tertiary'},
        ],
      },
    }),
  ],
})
