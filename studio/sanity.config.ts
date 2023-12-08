import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure, pageStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Braze Learning Astro',

  projectId: 'n4p67ir2',
  dataset: 'production',

  plugins: [
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

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
