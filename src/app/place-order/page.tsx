'use client';

import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const OrderConfirmationPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        {/* Green Check Icon */}
        <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Your Order Has Been Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-6">You will receive your parcel soon.</p>

        {/* Continue Shopping Button */}
        <Link href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
};

export default OrderConfirmationPage;
