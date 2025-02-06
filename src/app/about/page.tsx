// About.tsx (React/Next.js with Tailwind CSS)
import Image from "next/image";


const About = () => {
  return (
    <div className=" text-white py-16 my-11">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-8 lg:mb-0">
            <Image
              src="/images/product27.png"
              alt="About Us"
              width={400} height={400}
              className="w-full h-auto rounded-lg shadow-lg"

            />
          </div>
          <div className="flex-1 lg:ml-12">
            <h1 className="text-4xl font-bold text-red-600 mb-6">About Our Store</h1>
            <p className="text-lg text-black mb-4">
              Welcome to our online store, where fashion meets comfort! We are a
              modern e-commerce brand that caters to all your clothing needs, offering
              a wide range of products for men, women, and kids. From trendy shoes, stylish
              dresses, to cozy jackets, we bring you the best of fashion at affordable prices.
            </p>
            <p className="text-lg text-black mb-6">
              Our mission is simple: to provide high-quality, fashionable clothing that
              fits your lifestyle. We believe in making shopping easy and enjoyable, with
              a user-friendly interface, fast delivery, and exceptional customer service.
            </p>
            <p className="text-lg text-black">
              We strive to stay ahead of trends, bringing you the latest styles in
              footwear, apparel, and accessories. We want you to feel empowered and
              confident in everything you wear. Thank you for trusting us with your fashion
              needs. Were committed to helping you look and feel your best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
