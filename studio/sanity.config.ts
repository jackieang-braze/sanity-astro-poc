import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure, pageStructure} from './deskStructure'
import {media} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'Braze Learning Astro',
  projectId: 'n4p67ir2',
  dataset: 'production',
  perspective: 'previewDrafts',

  plugins: [
    simplerColorInput({
      // Note: These are both optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        {label: 'Light', value: '#ffffff'},
        {label: 'Dark', value: '#333333'},
        {label: 'Custom...', value: 'custom'},
      ],
    }),
    deskTool({
      name: 'content',
      title: 'Content',
      structure: myStructure,
    }),
    deskTool({
      name: 'page-builder',
      title: 'Page Builder',
      structure: pageStructure,
    }),
    media(),
    visionTool({
      defaultApiVersion: 'v2021-03-25',
      defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
