import { defineQuery } from "next-sanity";

// Product query
export const allproducts = defineQuery(`
  *[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description
  }
`);

// Collection query
export const allCollections = defineQuery(`
  *[_type == "collection"]{
    collectionName,
    category,
    price,
    inventory,
    colors,
    featuredImage{
      asset->{
        url
      }
    },
    description,
    status
  }
`);
