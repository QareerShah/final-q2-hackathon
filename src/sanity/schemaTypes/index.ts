import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { collectionSchema } from './collection'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , collectionSchema],
}