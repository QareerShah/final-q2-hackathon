"use client"; 
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext"; // Assuming you have this hook set up
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { CartItem } from "@/app/context/cartContext"; // Import CartItem type
import { FaCartShopping } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toastify

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, updateWishlistItemQuantity } = useCart();

  // Ensure client-side only rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle adding item to cart
  const handleAddToCart = (item: CartItem) => {
    // Ensure the item has all the required properties
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: item.quantity || 1, // Default to 1 if quantity is not provided
    };

    addToCart(cartItem); // Add item to cart using context

    // Show success notification
    toast.success(`${item.name} added to cart!`, { 
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Handle quantity increase
  const handleIncreaseQuantity = (item: CartItem) => {
    if (item.quantity) {
      updateWishlistItemQuantity(item.id, item.quantity + 1); // Update quantity in context
    }
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      updateWishlistItemQuantity(item.id, item.quantity - 1); // Update quantity in context
    }
  };

  if (!isClient) {
    return null; // Avoid rendering during SSR
  }

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 my-[50px]">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center mt-6 text-lg text-gray-600">Your wishlist is empty</p>
      ) : (
        <div className="space-y-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border-b pb-6"
            >
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-lg shadow-lg"
                />
                <div className="flex flex-col w-full sm:w-auto">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {/* Quantity controls */}
                    <button 
                      onClick={() => handleDecreaseQuantity(item)} 
                      className="text-sm text-gray-600 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity || 1}</span>
                    <button 
                      onClick={() => handleIncreaseQuantity(item)} 
                      className="text-sm text-gray-600 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-4 sm:mt-0">
                {/* Add to Cart Button */}
                <button
                  className="flex items-center justify-center gap-2 text-[14px] mt-4 text-white 
                  font-medium bg-black p-1 px-5 py-2 hover:bg-gray-300 hover:text-black rounded-full 
                  w-full md:w-auto mx-auto md:mx-0"
                  onClick={() => handleAddToCart(item)} // Pass item as argument here
                >
                  <span>
                    <FaCartShopping />
                  </span>
                  Add to Cart
                </button>
                <button
                  className="text-red-600 hover:text-red-800 transition-colors duration-300"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrashAlt className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </main>
  );
};

export default Wishlist;
