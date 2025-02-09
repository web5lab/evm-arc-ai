import React from 'react';
import { Bell, Bot, Zap, Smartphone, Download, ArrowRight, LineChart, MessageSquare, Settings } from 'lucide-react';

export function MobileApp() {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
              AI Support in Your Pocket
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Monitor your AI chatbots and crypto support operations from anywhere. Get real-time insights and respond to user queries instantly.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Bell,
                  title: 'Smart Alerts',
                  description: 'Receive instant notifications for high-priority queries and market events'
                },
                {
                  icon: Bot,
                  title: 'AI Performance Insights',
                  description: 'Monitor your AI models and optimize responses in real-time'
                },
                {
                  icon: Zap,
                  title: 'Quick Actions',
                  description: 'Adjust AI parameters and view token metrics on the go'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-colors group">
                <Download className="w-5 h-5" />
                Download for iOS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-colors group">
                <Download className="w-5 h-5" />
                Download for Android
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - App Preview */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-xl">
              {/* Screen Content */}
              <div className="absolute inset-0 overflow-hidden bg-gray-50 rounded-[2.5rem]">
                {/* App Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <div className="flex items-center justify-between mb-6">
                    <Smartphone className="w-5 h-5" />
                    <span className="font-medium">ARCAI Mobile</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/50 rounded-full" />
                      <div className="w-2 h-2 bg-white/50 rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Welcome back</h3>
                      <p className="text-orange-100">Your bots are performing well</p>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6">
                  {/* Navigation Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Bot className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium">Support Bot #1</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Active - 98% Success Rate
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <Bot className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium">Trading Bot</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            3 Active Sessions
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Activity Section */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-900">Today's Performance</h3>
                      <button className="text-sm text-orange-500 font-medium">View All</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Response Time', value: '89ms' },
                        { label: 'Success Rate', value: '98%' },
                        { label: 'Active Users', value: '1.2k' },
                        { label: 'Total Queries', value: '5.8k' }
                      ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="text-sm text-gray-500">{stat.label}</div>
                          <div className="text-lg font-semibold">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t flex items-center justify-around px-6 shadow-lg">
                  {[
                    { icon: Bot, label: 'Bots', active: true },
                    { icon: LineChart, label: 'Analytics' },
                    { icon: MessageSquare, label: 'Chats' },
                    { icon: Settings, label: 'Settings' }
                  ].map((item, index) => (
                    <button key={index} className={`flex flex-col items-center gap-1 ${
                      item.active ? 'text-orange-500 relative after:absolute after:w-1 after:h-1 after:-top-3 after:rounded-full after:bg-orange-500' : 'text-gray-400'
                    }`}>
                      <item.icon className="w-6 h-6" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}