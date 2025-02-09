import React from 'react';

export function Stats() {
  return (
    <section className="bg-orange-500 py-20 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="99.9%" text="Uptime" />
          <StatCard number="50M+" text="Messages" />
          <StatCard number="200+" text="Platforms" />
          <StatCard number="20+" text="Languages" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center text-white">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-orange-100">{text}</div>
    </div>
  );
}