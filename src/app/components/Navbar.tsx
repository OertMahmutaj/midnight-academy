'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Custom smooth-scrolling handler to bypass transition timing conflicts
  const handleApplyNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu(); // 1. Close the sidebar panel immediately

    const targetScroll = () => {
      const element = document.getElementById('book');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 2. If we are already on the homepage, wait for sidebar animation to clear, then scroll
    if (pathname === '/') {
      setTimeout(targetScroll, 300);
    } else {
      // 3. If we are on the portfolio page, navigate home first, then find the anchor element
      router.push('/#book');
    }
  };

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const isCurrentlyDark = htmlElement.classList.contains('dark');

    if (isCurrentlyDark) {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light-force');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light-force');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      {/* 1. Structural Fixed Top Bar Header */}
      <header className="fixed top-0 left-0 w-full h-20 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 z-50 flex items-center justify-between px-6 transition-colors duration-300">
        
        {/* Brand Logotype */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="text-sm font-black tracking-widest text-[var(--text-primary)] uppercase hover:opacity-70 transition duration-200"
        >
          Midnight Academy //
        </Link>

        {/* Controls Cluster Area */}
        <div className="flex items-center gap-6">
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="text-[10px] font-bold font-mono tracking-wider px-3 py-1.5 border border-zinc-300 dark:border-zinc-800 rounded bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-200"
          >
            [ THEME // TOGGLE ]
          </button>

          {/* Minimalist Hamburger Button Trigger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="flex flex-col justify-center items-center w-10 h-10 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 rounded transition-colors duration-200 focus:outline-none"
          >
            <div className="space-y-1.5 w-5">
              <span className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-full'}`} />
              <span className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

        </div>
      </header>

      {/* 2. Full-Screen Backdrop Overlay Mask */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* 3. Sliding Minimalist Sidebar Panel */}
      <nav className={`fixed top-0 right-0 h-screen w-full sm:w-[380px] bg-[var(--bg-primary)] border-l border-zinc-200 dark:border-zinc-900 p-12 pt-32 flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-45 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 font-black text-2xl tracking-tighter uppercase text-[var(--text-primary)]">
          <Link href="/" onClick={closeMenu} className="hover:opacity-60 transition duration-200 flex items-baseline gap-4">
            <span className="font-mono text-xs text-[var(--text-secondary)] opacity-40">01</span> Home
          </Link>
          <Link href="/portfolio" onClick={closeMenu} className="hover:opacity-60 transition duration-200 flex items-baseline gap-4">
            <span className="font-mono text-xs text-[var(--text-secondary)] opacity-40">02</span> Portfolios
          </Link>
          
          {/* CRITICAL CHANGE HERE: Trigger the dynamic layout scrolling execution */}
          <button 
            onClick={handleApplyNowClick} 
            className="text-left hover:opacity-60 transition duration-200 flex items-baseline gap-4 w-full cursor-pointer bg-transparent border-none p-0 uppercase font-black text-2xl tracking-tighter text-[var(--text-primary)]"
          >
            <span className="font-mono text-xs text-[var(--text-secondary)] opacity-40">03</span> Apply Now
          </button>
        </div>

        <div className="space-y-1">
          <p className="text-[var(--text-secondary)] text-[10px] font-mono tracking-widest uppercase">Location</p>
          <p className="text-[var(--text-primary)] text-xs font-medium">Tirana, Albania</p>
          <p className="text-[var(--text-secondary)] text-[10px] font-mono mt-4 opacity-40">© {new Date().getFullYear()} MIDNIGHT ACADEMY</p>
        </div>
      </nav>
    </>
  );
}