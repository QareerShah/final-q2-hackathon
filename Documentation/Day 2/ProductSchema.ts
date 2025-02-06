import { defineType } from 'sanity';

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Shoes', 'Tops', 'Winter Collection', 'Accessories'],
      },
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: ['Men', 'Women', 'Kids'],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
});
