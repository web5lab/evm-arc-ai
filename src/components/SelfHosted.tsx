import React from 'react';
import { Server, Shield, Database, Lock, Clock, ArrowRight } from 'lucide-react';

export function SelfHosted() {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
      
      <div className="relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
            
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
              Self-Hosted Solution
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Take full control of your AI infrastructure with our enterprise-grade self-hosted solution. Deploy ARCAI on your own servers while maintaining the same powerful features and capabilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Full Data Control',
                  description: 'Keep sensitive data within your infrastructure'
                },
                {
                  icon: Database,
                  title: 'Custom Models',
                  description: 'Deploy and use your own fine-tuned models'
                },
                {
                  icon: Lock,
                  title: 'Enhanced Security',
                  description: 'Additional security and compliance features'
                },
                {
                  icon: Server,
                  title: 'Flexible Deployment',
                  description: 'Deploy on-premises or in your cloud'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Server Rack Illustration */}
              <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 relative overflow-hidden">
                  {/* Server Units */}
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="h-1/5 border-b border-gray-700 flex items-center gap-4 px-4"
                    >
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <div className="flex-1 grid grid-cols-4 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="h-2 bg-gray-700 rounded-full animate-pulse"
                            style={{
                              animationDelay: `${(index * 4 + i) * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                      <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-orange-500 animate-ping" />
                      </div>
                    </div>
                  ))}

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}