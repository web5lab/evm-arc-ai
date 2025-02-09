import React from 'react';

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Crypto Platform?
        </h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of leading cryptocurrency platforms that trust ARCAI for their customer support needs
        </p>
        <button className="bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-colors">
          Get Started Now
        </button>
      </div>
    </section>
  );
}