'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* 1. Fixed Trigger Trigger Button (Three Bars / Hamburger) */}
            <button
                onClick={toggleMenu}
                aria-label="Toggle Navigation Menu"
                className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-12 h-12 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-full text-white hover:bg-zinc-900 transition-all duration-200 focus:outline-none"
            >
                <div className="space-y-1.5 w-5">
                    {/* Top Bar */}
                    <span
                        className={`block h-0.5 bg-white transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    />
                    {/* Middle Bar */}
                    <span
                        className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-full'
                            }`}
                    />
                    {/* Bottom Bar */}
                    <span
                        className={`block h-0.5 bg-white transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    />
                </div>
            </button>

            {/* 2. Transparent Backdrop Mask (Closes menu when clicking outside) */}
            <div
                onClick={toggleMenu}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* 3. Sliding Minimalist Sidebar Panel */}
            <nav
                className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-zinc-950 border-l border-zinc-900 z-45 p-12 pt-28 flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Navigation Link Cluster */}
                <div className="flex flex-col space-y-8 font-bold text-xl tracking-tight">
                    {/* Home Link */}
                    <Link
                        href="/"
                        onClick={toggleMenu}
                        className="text-zinc-500 hover:text-white transition duration-200 flex items-center gap-4 group"
                    >
                        <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">01 //</span> Home
                    </Link>

                    {/* External Teacher Portfolios Link */}
                    <Link
                        href="/portfolio"
                        onClick={toggleMenu}
                        className="text-zinc-500 hover:text-white transition duration-200 flex items-center gap-4 group"
                    >
                        <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">02 //</span> Portfolios
                    </Link>

                    {/* FIXED: Smooth Scroll Anchor Link pointing securely to the Homepage boundary */}
                    <Link
                        href="/#book"
                        onClick={toggleMenu}
                        className="text-zinc-500 hover:text-white transition duration-200 flex items-center gap-4 group"
                    >
                        <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">03 //</span> Apply Now
                    </Link>
                </div>

                {/* Minimalist Sidebar Footer Info Box */}
                <div className="space-y-1">
                    <p className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">Location</p>
                    <p className="text-zinc-400 text-xs font-medium">Tirana, Albania</p>
                    <p className="text-zinc-700 text-[10px] font-mono mt-4">© {new Date().getFullYear()} Midnight Academy</p>
                </div>
            </nav>
        </>
    );
}