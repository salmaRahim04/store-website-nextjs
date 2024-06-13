export const fetchProducts = async () => {
    try {
        // Make a fetch call to your API endpoint to fetch products
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Return the fetched products data
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        // In case of an error, you might want to return an empty array or handle it differently
        return [];
    }
};
// utils/api.js

export async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
