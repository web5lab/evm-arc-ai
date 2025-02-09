import React from 'react';
import { Trophy, Star, Award, Target } from 'lucide-react';

export function Achievements() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
      
      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-600 text-lg">
                Transforming crypto support across the globe with proven results and industry-leading innovation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '99.9%', label: 'Uptime Guaranteed', icon: Trophy },
                { value: '50M+', label: 'Messages Processed', icon: Star },
                { value: '200+', label: 'Platform Partners', icon: Award },
                { value: '<100ms', label: 'Response Time', icon: Target }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="lg:pl-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  "ARCAI has revolutionized how we handle customer support. Their AI technology has reduced our response time by 90% while maintaining incredibly high accuracy. It's been a game-changer for our platform."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AB
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alex Bennett</div>
                    <div className="text-gray-600">CTO, CryptoTrade Global</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full opacity-50" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-50 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}