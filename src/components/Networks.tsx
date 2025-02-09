import React from 'react';
import { Hexagon } from 'lucide-react';
import ethLogo from '../assets/ethlogo.png'
import bnbLogo from '../assets/bnb.png'
import polLogo from '../assets/maticLogo.png'
import avaLogo from '../assets/avax.svg'
import arbiLogo from '../assets/arb.svg'
import baseLogo from '../assets/base.png'
export function Networks() {
  const networks = [
    { name: 'Ethereum', img:ethLogo },
    { name: 'BSC',img:bnbLogo },
    { name: 'Polygon', img:polLogo },
    { name: 'Base',img:baseLogo },
    { name: 'Avalanche',img:avaLogo },
    { name: 'Arbitrum' ,img:arbiLogo}
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
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br rounded-full flex items-center justify-center`}>
                <img src={network.img} alt="" className='w-16 h-16 rounded-full' />
              </div>
              <h3 className="font-semibold text-gray-900">{network.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}