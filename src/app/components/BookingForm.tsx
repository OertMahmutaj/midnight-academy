'use client';

import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', background: '' });
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
        setFormData({ name: '', email: '', background: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="book" className="px-6 py-24 md:py-36 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 bg-transparent transition-colors duration-300">
      
      <div className="lg:col-span-4 space-y-4">
        <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase block">Intakes</span>
        <h2 className="text-3xl font-black tracking-tight uppercase text-[var(--text-primary)]">Request <br />Enrollment</h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed pt-4">
          All slots are manually assigned. We interview applicants to ensure each member can execute tasks at an agency level.
        </p>
      </div>

      <div className="lg:col-span-8">
        {status === 'success' ? (
          <div className="p-6 bg-[var(--badge-bg)] border border-[var(--border-line)] text-sm tracking-tight text-[var(--text-primary)] font-mono rounded">
            ✨ Entry pipeline dispatched. Our creative desk will check your data profile and contact your email within 24 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-1">Full Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="heights-input" placeholder="Name Surname" />
              </div>
              <div>
                <label className="text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-1">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="heights-input" placeholder="name@domain.com" />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase block mb-1">Professional Focus / Context</label>
              <textarea required value={formData.background} onChange={e => setFormData({ ...formData, background: e.target.value })} rows={3} className="heights-input resize-none" placeholder="Briefly describe your objectives..." />
            </div>

            <div className="pt-4">
              <button type="submit" disabled={status === 'loading'} className="heights-btn-primary w-full sm:w-auto">
                {status === 'loading' ? 'Processing...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>

    </section>
  );
}