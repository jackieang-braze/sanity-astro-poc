import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Banner Block Content',
  name: 'bannerBlockContent',
  type: 'array',
  description:
    'By default, text size will adjust to the size of the heading (i.e. H1 will be Paragraph Lg)',

  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',

      styles: [
        {title: 'Default', value: 'normal'},
        {title: 'Paragrpah Small', value: 'sm'},
        {title: 'Paragraph Medium', value: 'md'},
        {title: 'Paragraph Large', value: 'lg'},
        {title: 'Paragraph Extra Large', value: 'xl'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'marketingLink',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
        ],
      },
    }),
  ],
})
