import React from 'react';
import { Check, Zap, Shield, Bot, Rocket } from 'lucide-react';

export function Pricing() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          Simple, Token-Based Pricing
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Free</h3>
            <Bot className="w-6 h-6 text-gray-400" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold">0</span>
            <span className="text-gray-600"> CAI</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              'Up to 100 AI responses/month',
              'Basic dashboard access',
              'Community support'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 rounded-lg bg-gray-50 text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors">
            Start Free
          </button>
        </div>

        {/* Starter Plan */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Starter</h3>
            <Bot className="w-6 h-6 text-orange-500" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold">5,000</span>
            <span className="text-gray-600"> CAI</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              'Up to 10,000 AI responses/month',
              'Basic analytics dashboard',
              'Email support'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium hover:bg-orange-100 transition-colors">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all lg:scale-105">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2">
            Most Popular
          </div>
          <div className="mb-4 text-white">
            <span className="text-3xl font-bold">25,000</span>
            <span className="opacity-90"> CAI</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              'Up to 100,000 AI responses/month',
              'Advanced analytics & reporting',
              'Priority support'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-white/90">
                <Check className="w-5 h-5 text-white flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 rounded-lg bg-white text-orange-600 text-sm font-medium hover:bg-orange-50 transition-colors">
            Upgrade to Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <Rocket className="w-6 h-6 text-orange-500" />
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold">100,000+</span>
            <span className="text-gray-600"> CAI</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              'Unlimited AI responses',
              'Custom analytics solutions',
              'Dedicated support'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 rounded-lg border border-orange-200 text-orange-600 text-sm font-medium hover:bg-orange-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}