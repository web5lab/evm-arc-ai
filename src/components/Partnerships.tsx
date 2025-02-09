import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

export function Partnerships() {
  const partners = [
    {
      category: 'Exchanges',
      logos: ['Binance', 'Coinbase', 'Kraken', 'KuCoin']
    },
    {
      category: 'DeFi Protocols',
      logos: ['Uniswap', 'Aave', 'Compound', 'MakerDAO']
    },
    {
      category: 'Wallets',
      logos: ['MetaMask', 'Trust Wallet', 'Phantom', 'Ledger']
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Content */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 mb-8">
            We've partnered with leading companies across the crypto ecosystem to provide seamless integration and support.
          </p>
          <button className="group flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            Become a Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side - Partner Grid */}
        <div className="lg:w-2/3 space-y-8">
          {partners.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-gray-900">{category.category}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="bg-orange-50/50 rounded-xl p-4 text-center">
                    <span className="text-gray-600 font-medium">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}