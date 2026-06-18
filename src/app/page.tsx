import React from 'react';
import Hero from '@/app/components/Hero';
import Curriculum from '@/app/components/Curriculum';
import Instructor from '@/app/components/Instructor';
import BookingForm from '@/app/components/BookingForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased">
      {/* 1. Brand Intro & Call to Action Trigger */}
      <Hero />
      
      {/* Visual Break / Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* 2. Elite Industry Syllabus Accordion Grid */}
      <Curriculum />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* 3. The Authority Moat: Highlighting the 12-Year Veteran */}
      <Instructor />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* 4. The Functional Booking Intake Form connected to Discord Webhook */}
      <BookingForm />

      {/* Minimal Agency Footer */}
      <footer className="py-12 border-t border-zinc-950 text-center text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Midnight Academy. All rights reserved.</p>
        <p className="mt-2 text-zinc-700 font-mono">Built and designed by Oert Mahmutaj.</p>
      </footer>
    </main>
  );
}