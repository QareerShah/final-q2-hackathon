import { createClient } from "next-sanity";

const client = createClient({
    projectId: "nws68vng",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10",
});

export const fetchProducts = async ({ query, params = {} }: { query: string; params?: Record<string, unknown> }) => {
    return await client.fetch(query, params);
};
