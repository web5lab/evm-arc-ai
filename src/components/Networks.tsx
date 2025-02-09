import React from 'react';
import { Hexagon } from 'lucide-react';

export function Networks() {
  const networks = [
    { name: 'Ethereum', color: 'from-blue-500 to-blue-600' },
    { name: 'Binance Smart Chain', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Polygon', color: 'from-purple-500 to-purple-600' },
    { name: 'Solana', color: 'from-green-500 to-green-600' },
    { name: 'Avalanche', color: 'from-red-500 to-red-600' },
    { name: 'Arbitrum', color: 'from-indigo-500 to-indigo-600' }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
        Supported Networks
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {networks.map((network, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
            <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:-translate-y-1">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${network.color} rounded-xl flex items-center justify-center`}>
                <Hexagon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{network.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}