"use client";

import getStipePromise from "@/sanity/lib/stripe";

// Define a type for a cart item
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const StripeCheckOutButton = ({ cartItems }: { cartItems: CartItem[] }) => {
  const handleCheckout = async () => {
    const stripe = await getStipePromise();

    try {
      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(cartItems),  // Sending dynamic cart items to backend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();  // Parse the response only if it's valid
      console.log("Stripe session data:", data);

      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      } else {
        console.error("No session data found");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="py-5">
      <button
        className="bg-black text-white px-6 py-3 rounded-lg w-40 text-center hover:bg-gray-700 transition"
        onClick={handleCheckout}
      >
        card payment
      </button>
    </div>
  );
};

export default StripeCheckOutButton;
