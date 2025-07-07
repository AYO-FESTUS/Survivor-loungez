import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import blogz from './schemaTypes/blogz'  // ✅ match your actual schema path

export default defineConfig({
  name: 'default',
  title: 'My Blog Studio',

  projectId: 'mzjggqow',   // replace with your Sanity project ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [blogz],  // ✅ use your blog schema
  },
})
