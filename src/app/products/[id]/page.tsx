"use client"; // Mark this file as a Client Component

import { useCart } from "@/app/context/cartContext";
import { fetchProducts } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useParams } from "next/navigation"; // Use next/navigation to access params

// TypeScript type for Product
type Product = {
  _id: string;
  productName: string;
  price: number;
  imageUrl: string;
  description: string;
  colors: string;
  status: string;
  category: string;
};

const ProductDetailPage = () => {
  const params = useParams(); // Access params using useParams()
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      // Fetch all products from the server
      const products: Product[] = await fetchProducts({ query: allproducts });
      
      // Find the product with the matching ID
      const foundProduct = products.find((product) => product._id === id);
      setProduct(foundProduct || null); // Set product or null if not found
    };

    if (id) {
      fetchProductData();
    }
  }, [id]); // Re-fetch when id changes

  if (!product) {
    return (
      <div className="w-[80%] mx-auto p-4 my-[100px] text-center">
        <h1 className="text-[24px] font-medium text-gray-700">Product not found</h1>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
};

// Client Component for Product Details
const ProductDetailClient = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1); // Local state to handle quantity

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Handle adding product to the cart
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        name: product.productName,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity, // Add the selected quantity
      });

      // Show success notification
      toast.success(`${product.productName} added to cart!`, {
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
        {/* Product Image */}
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={450}
          height={450}
          className="rounded-lg mx-auto md:mx-0"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-[35px] font-medium mt-4">{product.productName}</h1>
          <p className="w-full md:w-[370px] h-auto text-[15px] tracking-wide leading-relaxed text-left mx-auto mt-6">
            {product.description}
          </p>
          <h2 className="font-medium text-[30px] text-left mt-6">{product.price}</h2>

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

export default ProductDetailPage;
