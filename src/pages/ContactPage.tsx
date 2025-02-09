import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Bot, Clock, Globe2, Github, Twitter, Instagram as Telegram, Disc as Discord, Linkedin } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const PROJECT_TYPES = [
  { id: 'exchange', name: 'Cryptocurrency Exchange' },
  { id: 'defi', name: 'DeFi Protocol' },
  { id: 'wallet', name: 'Crypto Wallet' },
  { id: 'nft', name: 'NFT Platform' },
  { id: 'dao', name: 'DAO' },
  { id: 'gaming', name: 'GameFi' },
  { id: 'other', name: 'Other' }
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/ARCAI',
    icon: Github,
    color: 'hover:bg-gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ARCAI',
    icon: Twitter,
    color: 'hover:bg-blue-500'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ARCAI',
    icon: Telegram,
    color: 'hover:bg-blue-400'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/ARCAI',
    icon: Discord,
    color: 'hover:bg-indigo-500'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/ARCAI',
    icon: Linkedin,
    color: 'hover:bg-blue-600'
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'support@ARCAI.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: MapPin, label: 'Address', value: '123 Blockchain Street, Crypto Valley, CH-6300 Zug, Switzerland' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.label}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>



            {/* Global Support */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Global Support</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Languages Supported</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['English', 'Hindi', 'French', 'German', 'Chinese', 'Japanese'].map((lang) => (
                    <div key={lang} className="text-gray-600">{lang}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                  <p className="text-gray-600">We'll get back to you as soon as possible</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PROJECT_TYPES.map((type) => (
                      <label
                        key={type.id}
                        className={`relative flex cursor-pointer ${formData.projectType === type.id
                            ? 'ring-2 ring-orange-500'
                            : 'ring-1 ring-gray-200 hover:ring-orange-200'
                          } rounded-lg p-4 transition-all`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          checked={formData.projectType === type.id}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="sr-only"
                        />
                        <span className="flex items-center text-sm">
                          <span className={`w-4 h-4 mr-2 rounded-full border flex-shrink-0 ${formData.projectType === type.id
                              ? 'bg-orange-500 border-transparent'
                              : 'border-gray-300'
                            }`}>
                            {formData.projectType === type.id && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white m-auto" />
                            )}
                          </span>
                          {type.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>


          </div>
        </div>


      </div>
    </div>
  );
}