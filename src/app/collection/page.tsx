import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define TypeScript types for collection
interface Collection {
  _id: string;
  collectionName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  featuredImage: { asset: { url: string } };
  description: string;
  status: string;
}

const CollectionPage = async () => {
  let collections: Collection[] = [];
  let errorMessage: string | null = null;

  try {
    // Fetch all collections using your query
    collections = await client.fetch(`
      *[_type == "collection"]{
        _id,
        collectionName,
        category,
        price,
        inventory,
        colors,
        featuredImage{
          asset->{
            url
          }
        },
        description,
        status
      }
    `);
  } catch (error) {
    console.error("Error fetching collections:", error);
    errorMessage = "There was an issue loading the collections. Please try again later.";
  }

  return (
    <main className="mb-24 mt-12">
      <h1 className="text-center text-3xl font-bold mb-11">
        Latest <span className="text-red-600">Collections</span>
      </h1>

      {/* Display error message if there's an error */}
      {errorMessage ? (
        <p className="text-center text-lg text-red-600">{errorMessage}</p>
      ) : collections.length === 0 ? (
        <p className="text-center text-lg">No collections available at the moment.</p>
      ) : (
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {collections.map((collection) => (
            <Link key={collection._id} href={`/collection/${collection._id}`}>
              <div className="rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ease-in-out p-4 flex flex-col items-center">
                <Image
                  src={collection.featuredImage?.asset?.url || "/placeholder-image.png"}
                  alt={collection.collectionName || "Collection Image"}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <h1 className="text-red-700 mt-4 text-sm font-medium text-center">
                  {collection.status || "No status available"}
                </h1>
                <p className="text-black text-sm mt-1 font-semibold text-center">
                  {collection.collectionName || "Unnamed Collection"}
                </p>
                <p className="text-black opacity-70 text-sm mt-1 text-center">
                  {collection.category || "Uncategorized"}
                </p>
                <p className="text-black opacity-70 text-sm mt-1 text-center">
                  {collection.colors.join(", ") || "No Colors Listed"}
                </p>
                <p className="text-black text-sm mt-4 font-medium text-center">
                  Price: {collection.price || "0.00"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default CollectionPage;
