import React, { useState } from "react"; 
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import StripeCheckOutButton from "./CheckoutButton";

// Define a type for cart item
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  subtotal: number;
  deliveryCharge: number;
  cartItems: CartItem[];  // Use CartItem[] instead of any[]
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, deliveryCharge, cartItems }) => {
  const { isSignedIn } = useUser();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const total = subtotal + deliveryCharge; // Calculating total

  const handleConfirm = () => {
    if (!isSignedIn) {
      setShowLoginModal(true);
    } else {
      setShowPaymentOptions(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>

      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-600">Subtotal</p>
        <p className="font-medium">{subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-600">Estimated Delivery & Handling</p>
        <p className="font-medium">{deliveryCharge.toFixed(2)}</p>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-bold">{total.toFixed(2)}</p>
      </div>

      <div className="py-5">
        <button
          onClick={handleConfirm}
          className="bg-black text-white font-semibold 
          hover:text-black text-center rounded-full py-2 w-full hover:bg-gray-300 transition duration-300">
          Checkout
        </button>
      </div>

      {showPaymentOptions && (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-semibold">Select Payment Method</h2>
          <Link href="/shipment"><button className="bg-red-600 text-white px-6 py-3 rounded-lg w-40 text-center hover:bg-red-700 transition">
            Cash on Delivery
          </button></Link>
          <StripeCheckOutButton cartItems={cartItems} /> 
        </div>
      )}

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Please Sign In</h2>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
            <button onClick={() => setShowLoginModal(false)} className="mt-4 text-sm text-gray-500 underline">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
