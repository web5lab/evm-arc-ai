import React from 'react';
import { Coins, Users, Lock, Rocket, Wallet, LineChart } from 'lucide-react';

export function Tokenomics() {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
      
      <div className="relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          Tokenomics
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Token Distribution */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Coins className="text-orange-500" />
              Token Distribution
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Public Sale', value: '40%', icon: Users },
                { label: 'Liquidity Pool', value: '25%', icon: Wallet },
                { label: 'Team & Advisors', value: '15%', icon: Lock },
                { label: 'Marketing', value: '10%', icon: Rocket },
                { label: 'Development', value: '10%', icon: LineChart },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-orange-600 font-semibold">{item.value}</span>
                    </div>
                    <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Token Details</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Token Name', value: 'ARCAI' },
                  { label: 'Token Symbol', value: 'CAI' },
                  { label: 'Total Supply', value: '1,000,000,000' },
                  { label: 'Initial Price', value: '$0.01' },
                ].map((item, index) => (
                  <div key={index} className="bg-orange-50/50 rounded-2xl p-4">
                    <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                    <div className="font-semibold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Vesting Schedule</h3>
              <p className="text-orange-100 mb-6">
                Strategic token release to ensure long-term project sustainability
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Lock className="w-5 h-5" />
                  Team tokens locked for 12 months
                </li>
                <li className="flex items-center gap-3">
                  <LineChart className="w-5 h-5" />
                  Linear vesting over 24 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}