import React from 'react';
import { Image } from "@nextui-org/react";

const AboutUs = () => {
    const images = [
        "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    ];

    return (
        <section className="p-8 mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-center">About Us</h2>
            <div className="container mx-auto flex justify-center flex-wrap gap-4 mb-4">
                {images.map((src, index) => (
                    <div className="flex justify-center" key={index}>
                        <Image
                            width={300}
                            height={200}
                            alt={`NextUI hero Image ${index + 1}`}
                            className="rounded-xl"
                            src={src}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
