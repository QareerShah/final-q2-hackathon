"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import { CartItem } from "@/app/context/cartContext";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart, wishlist, addToWishlist, removeFromWishlist } = useCart();

  // Ensure client-side only rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate the subtotal and delivery charge
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharge = 200; // Example fixed delivery charge

  const handleQuantityChange = (item: CartItem, type: "increase" | "decrease") => {
    let updatedItem = { ...item };

    if (type === "increase") {
      updatedItem = { ...updatedItem, quantity: updatedItem.quantity + 1 };
    } else if (type === "decrease" && item.quantity > 1) {
      updatedItem = { ...updatedItem, quantity: updatedItem.quantity - 1 };
    }

    addToCart(updatedItem); // Update the cart with the updated item
  };

  // Handle adding/removing item to wishlist
  const handleAddToWishlist = (item: CartItem) => {
    if (wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      removeFromWishlist(item.id); // Remove from wishlist if already in wishlist
    } else {
      addToWishlist(item); // Add to wishlist if not already in wishlist
    }
  };

  if (!isClient) {
    return null; // Avoid rendering during SSR
  }

  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 my-[50px]">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Cart Details</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-6 text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left side: Cart Items */}
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b pb-6">
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
                    <p className="text-sm text-gray-500">{item.price}</p>
                    <div className="flex gap-4 items-center mt-4">
                      <button
                        className="text-xl text-black hover:bg-gray-400 bg-gray-200 p-1 w-[30px]"
                        onClick={() => handleQuantityChange(item, "decrease")}
                      >
                        -
                      </button>
                      <p className="text-lg">{item.quantity}</p>
                      <button
                        className="text-xl text-black hover:bg-gray-400 bg-gray-200 p-1 w-[30px]"
                        onClick={() => handleQuantityChange(item, "increase")}
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-gray-700">Total: {item.price * item.quantity}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => handleAddToWishlist(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaHeart
                      className={`text-xl ${wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? 'text-red-600' : 'text-gray-400'}`}
                    />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 transition-colors duration-300 mt-4 sm:mt-0"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all w-full sm:w-auto"
              >
                Clear Cart
              </button>
              <div className="text-2xl font-semibold text-gray-800 mt-4 sm:mt-0">
                Total: {subtotal}
              </div>
            </div>
          </div>

          {/* Right side: Order Summary */}
          <div className="w-full sm:w-auto">
            <OrderSummary
              subtotal={subtotal}
              deliveryCharge={deliveryCharge}
              cartItems={cart}  // Pass cartItems to OrderSummary here
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
