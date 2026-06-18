'use client';

import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', background: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Forward request details directly to your Next.js API router
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', background: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="book" className="py-20 px-4 max-w-xl mx-auto">
      <div className="p-8 bg-zinc-950 text-white rounded-xl border border-zinc-900 relative">
        <h2 className="text-2xl font-bold mb-2 tracking-tight">Request Enrollment</h2>
        <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
          No automated payments. We manually review every single booking request to ensure all 15 candidates are a perfect fit for our studio environment.
        </p>

        {status === 'success' ? (
          <div className="p-5 bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-lg text-center text-sm font-medium">
            ✨ Application received! Check your email inbox. Our team will review your background and respond within 24 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold font-mono">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm text-white transition placeholder-zinc-600"
                placeholder="Filan Fisteku"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold font-mono">Email Address</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm text-white transition placeholder-zinc-600"
                placeholder="name@domain.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold font-mono">Your Background / Objectives</label>
              <textarea
                required
                value={formData.background}
                onChange={e => setFormData({ ...formData, background: e.target.value })}
                rows={4}
                className="w-full p-3.5 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm text-white transition resize-none placeholder-zinc-600 leading-relaxed"
                placeholder="Tell us about yourself. Total beginner looking for a carrier pivot, or a junior designer looking to polish your skills?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition duration-200 text-sm tracking-wide disabled:opacity-40"
            >
              {status === 'loading' ? 'Submitting Request...' : 'Submit Booking Application'}
            </button>

            {status === 'error' && (
              <p className="text-rose-400 text-xs text-center font-medium mt-2">
                Pipeline execution error. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}