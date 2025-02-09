import React from 'react';
import { Shield, Zap, Bot, Code2, Users, Globe2 } from 'lucide-react';

export function WhyChoose() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          Why Choose ARCAI?
        </h2>
        <p className="text-gray-600 text-lg">
          We're revolutionizing crypto support with cutting-edge AI technology and a deep understanding of blockchain ecosystems
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Advanced AI Technology</h3>
                  <p className="text-gray-600">
                    Our proprietary AI models are trained on millions of crypto-specific conversations, ensuring accurate and contextual responses
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Security</h3>
                  <p className="text-gray-600">
                    Bank-level encryption and compliance with international data protection standards to keep your platform secure
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
                  <p className="text-gray-600">
                    Support users worldwide with real-time translation in over 20 languages and 24/7 availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:mt-12 space-y-8">
          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Response times under 100ms and real-time market data integration for up-to-the-second accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
                  <p className="text-gray-600">
                    Simple API integration with your existing platform - be up and running in less than 30 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-100 rounded-full" />
            <div className="bg-white rounded-2xl shadow-xl p-8 ml-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
                  <p className="text-gray-600">
                    Built with feedback from leading crypto platforms and continuously improved based on community input
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}