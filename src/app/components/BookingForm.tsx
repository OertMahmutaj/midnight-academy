'use client';

import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', instagram: '', experience: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', instagram: '', experience: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="book" className="max-w-xl mx-auto my-12 p-8 bg-zinc-900 text-white rounded-xl border border-zinc-800">
      <h2 className="text-2xl font-bold mb-2">Secure Your Seat</h2>
      <p className="text-zinc-400 mb-6 text-sm">Only 15 slots available for Cohort #1 to guarantee 1-on-1 critique from our Creative Director.</p>

      {status === 'success' ? (
        <div className="p-4 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-lg text-center">
          ✨ Application received! Check your Instagram DM or Email soon; we will review your entry within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Full Name</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm" placeholder="Filan Fisteku" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Email Address</label>
            <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm" placeholder="name@domain.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Instagram Handle</label>
            <input required type="text" value={formData.instagram} onChange={e => setFormData({ ...formData, instagram: e.target.value })} className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm" placeholder="username" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Tell us a bit about your background (Optional)</label>
            <textarea value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })} rows={3} className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-600 text-sm resize-none" placeholder="Total beginner, looking to change careers..." />
          </div>
          <button type="submit" disabled={status === 'loading'} className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition duration-200 text-sm disabled:opacity-5} text-center">
            {status === 'loading' ? 'Processing Application...' : 'Submit Booking Request'}
          </button>
          {status === 'error' && <p className="text-rose-500 text-xs text-center">Something went wrong. Please refresh and try again.</p>}
        </form>
      )}
    </section>
  );
}