"use client"
import React, { useState } from 'react';
import { Image, Link } from "@nextui-org/react";
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="w-full flex flex-col mb-4"> {/* Ensure the root div is set to w-full */}
            <nav className="bg-white flex justify-between items-center p-8">
                <h1 className="text-2xl">{title}</h1>
                <div className="block md:hidden">
                    <button onClick={toggleNav} className="text-2xl focus:outline-none">
                        {isNavOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <ul className={`flex-col md:flex-row flex items-center md:items-center ${isNavOpen ? 'flex' : 'hidden'} md:flex mt-4 md:mt-0`}>
                    <li className="md:mr-6">
                        <Link href="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link href="/Products" className="hover:text-gray-300 cursor-pointer">Products</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Image
                    src="https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs"
                    className="w-full h-screen"
                    width="100%"
                />
            </div>
        </div>
    );
};

export default Header;
