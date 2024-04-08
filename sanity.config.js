import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "i1mkngg6",
  dataset: "production",
  title: "techpro",
  apiVersion: "2024-03-30",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config

