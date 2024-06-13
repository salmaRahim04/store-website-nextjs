"use client";
import React, { useState } from 'react';
import { Link, Image, Card, CardBody, CardFooter } from "@nextui-org/react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

const ProductsPage = ({ products }: { products: Product[] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSortToggle = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    };

    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search products by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex items-center mb-4">
                <span className="mr-2">Sort by price:</span>
                <button
                    onClick={handleSortToggle}
                    className="text-blue-500 font-semibold underline cursor-pointer"
                >
                    {sortOrder === "asc" ? "Expensive to Cheaper" : "Cheaper to Expensive"}
                </button>
            </div>

            <div className="max-w-[900px] flex flex-wrap gap-4 px-8">
                {filteredProducts.map((product) => (
                    <Link href={`/Products/${product.id}`} key={product.id} className="w-full sm:w-[48%] mb-4">
                        <Card className="h-[300px] m-4 rounded-xl shadow-md">
                            <CardBody className="relative p-0">
                                <Image
                                    removeWrapper
                                    alt={product.title}
                                    className="z-0 w-full h-[200px] object-cover"
                                    src={product.image}

                                />
                            </CardBody>
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 rounded-xl">
                                <div className="flex flex-grow flex-col items-start p-2">
                                    <b className="text-white text-xl">{product.title}</b>
                                    <p className="text-white text-lg">${product.price}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
