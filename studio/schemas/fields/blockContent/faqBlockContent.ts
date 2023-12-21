import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Banner Block Content',
  name: 'faqBlockContent',
  type: 'array',

  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
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
            name: 'link',
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
