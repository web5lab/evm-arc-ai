import React, { useState } from 'react';
import { Wallet, CreditCard, ArrowRight, History, RefreshCw, ChevronDown, Plus } from 'lucide-react';

export function BillingPage() {
  const [selectedCurrency, setSelectedCurrency] = useState('CAI');
  const [amount, setAmount] = useState('');

  const handleTopUp = () => {
    // Handle top-up logic here
    console.log(`Top up ${amount} ${selectedCurrency}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Billing & Wallet</h1>
            <p className="text-gray-600 mt-1">Manage your tokens and payments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wallet Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* CAI Wallet */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6" />
                  <span className="font-medium">ARCAI Wallet</span>
                </div>
                <span className="text-orange-100">Available Balance</span>
              </div>
              <div className="mb-8">
                <div className="text-3xl font-bold">8,500 CAI</div>
                <div className="text-orange-100">≈ $127.50 USD</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <History className="w-4 h-4" />
                Last transaction: -500 CAI (2 hours ago)
              </div>
            </div>

            {/* USDT Wallet */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    $
                  </div>
                  <span className="font-medium text-gray-900">USDT Wallet</span>
                </div>
                <span className="text-gray-500">Available Balance</span>
              </div>
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900">250 USDT</div>
                <div className="text-gray-500">≈ $250.00 USD</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <History className="w-4 h-4" />
                Last transaction: +100 USDT (1 day ago)
              </div>
            </div>

            {/* Top Up Form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold mb-6">Top Up Wallet</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Currency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedCurrency('CAI')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 ${
                        selectedCurrency === 'CAI'
                          ? 'border-orange-500 bg-orange-50 text-orange-600'
                          : 'border-gray-200'
                      }`}
                    >
                      <Wallet className="w-5 h-5" />
                      ARCAI (CAI)
                    </button>
                    <button
                      onClick={() => setSelectedCurrency('USDT')}
                      className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 ${
                        selectedCurrency === 'USDT'
                          ? 'border-orange-500 bg-orange-50 text-orange-600'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        $
                      </div>
                      USDT
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={selectedCurrency === 'CAI' ? "Min. 1000 CAI" : "Min. 10 USDT"}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      {selectedCurrency}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleTopUp}
                  disabled={!amount}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Top Up Now
                </button>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Transaction History</h2>
                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    type: 'Top Up',
                    amount: '+1000 CAI',
                    date: '2 hours ago',
                    status: 'completed'
                  },
                  {
                    type: 'Usage',
                    amount: '-500 CAI',
                    date: '1 day ago',
                    status: 'completed'
                  },
                  {
                    type: 'Top Up',
                    amount: '+100 USDT',
                    date: '1 day ago',
                    status: 'completed'
                  },
                  {
                    type: 'Usage',
                    amount: '-200 CAI',
                    date: '2 days ago',
                    status: 'completed'
                  }
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        transaction.type === 'Top Up'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-orange-100 text-orange-600'
                      }`}>
                        {transaction.type === 'Top Up' ? (
                          <Plus className="w-4 h-4" />
                        ) : (
                          <RefreshCw className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {transaction.type}
                        </div>
                        <div className="text-sm text-gray-500">
                          {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className={`text-right ${
                      transaction.amount.startsWith('+')
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold mb-6">Payment Methods</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 group">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                    <span className="text-gray-600 group-hover:text-gray-900">Credit/Debit Card</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                </button>
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 group">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                    <span className="text-gray-600 group-hover:text-gray-900">Crypto Wallet</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}