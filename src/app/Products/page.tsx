

import React from 'react';
import ProductsPage from "@/components/Products/ProductsPage";
import { fetchProducts } from '@/utils/api';

const Products = () => {
    return (
            <div className={"bg-white min-h-screen flex items-center justify-center"}>
                <Page/>
            </div>
    );
};
export const Page = async () => {
    const products: Product[] = await fetchProducts();

    return (
        <main>
            <ProductsPage products={products} />
        </main>
    );
};




export default Products;
