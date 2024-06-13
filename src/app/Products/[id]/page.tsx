"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { fetchProducts } from '@/utils/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Heart} from 'lucide-react';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [product, setProduct] = useState<Product | null>(null);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchProductData = async () => {
            const products = await fetchProducts();
            const foundProduct = products.find((product: Product) => product.id.toString() === id);
            if (!foundProduct) {
                notFound();
            } else {
                setProduct(foundProduct);
            }
        };

        fetchProductData();
    }, [id]);

    if (!product) {
        return null; // Or loading indicator
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Link href="/Products" className="text-blue-500 hover:underline mb-4 inline-block">
                Back to Products
            </Link>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mx-auto shadow-md"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt={product.title}
                                className="object-cover rounded-lg shadow-lg"
                                height={400}
                                shadow="md"
                                src={product.image}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">{product.title}</h3>
                                    <p className="text-small m-4 text-gray-400">{product.description}</p>
                                    <h1 className="text-large font-medium mt-2">Price:${product.price}</h1>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 m-4"
                                    radius="full"
                                    variant="light"
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <Heart
                                        className={liked ? "text-red-500" : "text-gray-400"}
                                        fill={liked ? "currentColor" : "none"}
                                    />
                                </Button>
                            </div>

                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductDetailPage;
