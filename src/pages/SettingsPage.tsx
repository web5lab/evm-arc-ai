import React from 'react';
import { Save, Globe2, Bell, Shield, CreditCard } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {[
                { name: 'General', icon: Globe2, current: true },
                { name: 'Notifications', icon: Bell, current: false },
                { name: 'Security', icon: Shield, current: false },
                { name: 'Billing', icon: CreditCard, current: false },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg ${
                    item.current
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm divide-y">
              {/* Profile Section */}
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      defaultValue="Acme Inc"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email Notifications
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive updates about your bot activity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Domain Whitelist Section */}
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Domain Whitelist</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Add domains where your chatbot will be allowed to run
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="example.com"
                      className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Add Domain
                    </button>
                  </div>
                  <div className="space-y-2">
                    {['example.com', 'test.example.com'].map((domain) => (
                      <div
                        key={domain}
                        className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg"
                      >
                        <span className="text-sm text-gray-600">{domain}</span>
                        <button className="text-red-500 hover:text-red-600">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}