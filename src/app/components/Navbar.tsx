'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. Permanent Structural Top Bar */}
      <header className="fixed top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-md border-b border-zinc-900 z-40 flex items-center justify-between px-6 selection:bg-white selection:text-black">
        
        {/* Brand Logotype / Anchor Link */}
        <Link 
          href="/" 
          className="text-sm font-black font-mono tracking-widest text-white uppercase hover:text-zinc-400 transition duration-200"
        >
          Midnight Academy //
        </Link>

        {/* Minimalist Multi-Bar Menu Trigger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="flex flex-col justify-center items-center w-10 h-10 hover:bg-zinc-900/50 rounded transition-colors duration-200 focus:outline-none"
        >
          <div className="space-y-1.5 w-5">
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 transform origin-center ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`} 
            />
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'w-full'
              }`} 
            />
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 transform origin-center ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`} 
            />
          </div>
        </button>
      </header>

      {/* 2. Transparent Backdrop Mask */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-45 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* 3. Sliding Minimalist Sidebar Panel */}
      <nav
        className={`fixed top-0 right-0 h-screen w-full sm:w-[380px] bg-black border-l border-zinc-900 p-12 pt-32 flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Navigation Link Cluster */}
        <div className="flex flex-col space-y-8 font-black text-2xl tracking-tighter uppercase">
          <Link 
            href="/" 
            onClick={toggleMenu}
            className="text-zinc-500 hover:text-white transition duration-200 flex items-baseline gap-4 group"
          >
            <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">01</span> Home
          </Link>

          <Link 
            href="/portfolio" 
            onClick={toggleMenu}
            className="text-zinc-500 hover:text-white transition duration-200 flex items-baseline gap-4 group"
          >
            <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">02</span> Portfolios
          </Link>

          <Link 
            href="/#book" 
            onClick={toggleMenu}
            className="text-zinc-500 hover:text-white transition duration-200 flex items-baseline gap-4 group"
          >
            <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-400 font-medium">03</span> Apply Now
          </Link>
        </div>

        {/* Minimalist Sidebar Footer Info Box */}
        <div className="space-y-1">
          <p className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">Location</p>
          <p className="text-zinc-400 text-xs font-medium">Tirana, Albania</p>
          <p className="text-zinc-700 text-[10px] font-mono mt-4">© {new Date().getFullYear()} MIDNIGHT ACADEMY</p>
        </div>
      </nav>
    </>
  );
}