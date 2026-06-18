import React from 'react';
import Hero from '@/app/components/Hero';
import Curriculum from '@/app/components/Curriculum';
import Instructor from '@/app/components/Instructor';
import BookingForm from '@/app/components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Curriculum />
      <Instructor />
      <BookingForm />
      
      {/* Minimal Agency Footer matching Heights */}
      <footer className="px-6 pt-40 max-w-6xl mx-auto border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-600">
        <p>© {new Date().getFullYear()} MIDNIGHT ACADEMY. ALL RIGHTS RESERVED.</p>
        <p className="tracking-widest">TIRANA // ALBANIA</p>
      </footer>
    </main>
  );
}