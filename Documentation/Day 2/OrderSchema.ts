import { defineType } from 'sanity';

export const orderSchema = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'productId',
      title: 'Product ID',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'customerId',
      title: 'Customer ID',
      type: 'reference',
      to: [{ type: 'customer' }],
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Pending', 'Delivered', 'Cancelled'],
      },
    },
  ],
});
