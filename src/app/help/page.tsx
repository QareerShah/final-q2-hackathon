import React from 'react';
import Link from 'next/link';

const HelpPage = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <header className="bg-black text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Help Center</h1>
                    <nav>
                        <Link href="#faq" className="text-white hover:text-red-500 mx-2">
                            FAQs
                        </Link>
                        <Link href="#contact" className="text-white hover:text-red-500 mx-2">
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section id="intro" className="mb-12">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Welcome to Our Help Center</h2>
                    <p className="text-lg">Here you will find answers to your questions and get support for your shopping experience on our platform.</p>
                </section>

                <section id="faq" className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="border border-gray-300 p-4 rounded-md">
                            <summary className="cursor-pointer text-lg font-medium">What is the return policy?</summary>
                            <p className="mt-2 text-gray-700">You can return any product within 30 days of purchase, provided it is in its original condition. For more details, visit our
                                 <Link href="#" className="text-red-500">
                                Return Policy
                            </Link> page.</p>
                        </details>

                        <details className="border border-gray-300 p-4 rounded-md">
                            <summary className="cursor-pointer text-lg font-medium">How can I track my order?</summary>
                            <p className="mt-2 text-gray-700">After placing an order, you will receive a tracking number via email. Use our
                                 <Link href="#" className="text-red-500">
                                Order Tracking
                            </Link> page to check your order status.</p>
                        </details>

                        <details className="border border-gray-300 p-4 rounded-md">
                            <summary className="cursor-pointer text-lg font-medium">Do you offer international shipping?</summary>
                            <p className="mt-2 text-gray-700">Yes, we offer international shipping to selected countries. Please check our 
                                <Link href="#" className="text-red-500">
                               Shipping Information
                            </Link> page for details.</p>
                        </details>

                        <details className="border border-gray-300 p-4 rounded-md">
                            <summary className="cursor-pointer text-lg font-medium">What payment methods do you accept?</summary>
                            <p className="mt-2 text-gray-700">We accept credit cards, debit cards, PayPal, and other popular payment methods. See the full list on our 
                                <Link href="#" className="text-red-500">
                                Payment Options
                            </Link> page.</p>
                        </details>
                    </div>
                </section>

                <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">Contact Us</h2>
                    <p className="text-lg">If you cant find the answer you are looking for, feel free to reach out to us:</p>
                     <Link href="/contact" className='text-red-500'>Contact </Link>
                </section>
            </main>

            
        </div>
    );
};

export default HelpPage;
