import { fetchProducts } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

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

export default async function ProductCards() {
  const products: Product[] = await fetchProducts({ query: allproducts });

  return (
    <main>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
            <div className="rounded-lg cursor-pointer">
              <Image
                src={product.imageUrl || "/placeholder-image.png"} // Fallback image
                alt={product.productName || "Product Image"}
                width={348}
                height={348}
                className="rounded-lg"
              />
              <h1 className="text-red-700 mt-3 text-[15px] font-medium">{product.status || "N/A"}</h1>
              <p className="text-black text-[15px] mt-1 font-semibold">{product.productName || "Unnamed Product"}</p>
              <p className="text-black opacity-70 text-[15px] mt-1">{product.category || "Uncategorized"}</p>
              <p className="text-black opacity-70 text-[15px] mt-1">{product.colors || "No Colors Listed"}</p>
              <p className="text-black text-[15px] mt-5 font-medium">{product.price || "0.00"}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
