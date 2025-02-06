"use client"; // Mark this file as a Client Component

import { useCart } from "@/app/context/cartContext";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useParams } from "next/navigation"; // Use next/navigation to access params

// TypeScript type for Collection
type Collection = {
  _id: string;
  collectionName: string;
  price: number;
  featuredImage: { asset: { url: string } };
  description: string;
  colors: string[];
  category: string;
  status: string;
};

const CollectionDetailPage = () => {
  const params = useParams(); // Access params using useParams()
  const { id } = params;
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    const fetchCollectionData = async () => {
      // Fetch all collections from the server
      const collections: Collection[] = await client.fetch(`
        *[_type == "collection"]{
          _id,
          collectionName,
          price,
          featuredImage{
            asset->{
              url
            }
          },
          description,
          colors,
          category,
          status
        }
      `);

      // Find the collection with the matching ID
      const foundCollection = collections.find((col) => col._id === id);
      setCollection(foundCollection || null); // Set collection or null if not found
    };

    if (id) {
      fetchCollectionData();
    }
  }, [id]); // Re-fetch when id changes

  if (!collection) {
    return (
      <div className="w-[80%] mx-auto p-4 my-[100px] text-center">
        <h1 className="text-[24px] font-medium text-gray-700">Collection not found</h1>
      </div>
    );
  }

  return <CollectionDetailClient collection={collection} />;
};

// Client Component for Collection Details
const CollectionDetailClient = ({ collection }: { collection: Collection }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1); // Local state to handle quantity

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Handle adding collection to the cart
  const handleAddToCart = () => {
    if (collection) {
      addToCart({
        id: collection._id,
        name: collection.collectionName,
        price: collection.price,
        imageUrl: collection.featuredImage.asset.url,
        quantity: quantity, // Add the selected quantity
      });

      // Show success notification
      toast.success(`${collection.collectionName} added to cart!`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <main className="w-[80%] mx-auto p-4 my-[100px]">
      <div className="flex flex-col md:flex-row gap-[100px] items-start text-center md:text-left">
        {/* Collection Image */}
        <Image
          src={collection.featuredImage.asset.url}
          alt={collection.collectionName}
          width={450}
          height={450}
          className="rounded-lg mx-auto md:mx-0"
        />

        {/* Collection Details */}
        <div>
          <h1 className="text-[35px] font-medium mt-4">{collection.collectionName}</h1>
          <p className="w-full md:w-[370px] h-auto text-[15px] tracking-wide leading-relaxed text-left mx-auto mt-6">
            {collection.description}
          </p>
          <h2 className="font-medium text-[30px] text-left mt-6">Price:{collection.price}</h2>

          {/* Quantity Control */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="text-xl text-black hover:bg-gray-300 bg-gray-200 p-2"
              onClick={() => handleQuantityChange("decrease")}
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              className="text-xl text-black hover:bg-gray-300 bg-gray-200 p-2"
              onClick={() => handleQuantityChange("increase")}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="flex items-center justify-center gap-2 text-[14px] mt-4 text-white 
            font-medium bg-black p-1 px-5 py-2 hover:bg-gray-300 hover:text-black rounded-full 
            w-full md:w-auto mx-auto md:mx-0"
            onClick={handleAddToCart}
          >
            <span>
              <FaCartShopping />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default CollectionDetailPage;
