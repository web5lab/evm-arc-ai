import React from 'react';
import { MessageSquare, Bell, Search, ChevronDown, Zap, Globe2, Users, ArrowUpRight, LineChart, Wallet, Bot, Code2, Settings, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardSidebar } from '../components/DashboardSidebar';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1">
      {/* Top Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/dashboard" className="text-orange-600 font-medium">Overview</Link>
                <Link to="/dashboard/bots" className="text-gray-600 hover:text-orange-600">Bots</Link>
                <Link to="/dashboard/analytics" className="text-gray-600 hover:text-orange-600">Analytics</Link>
                <Link to="/dashboard/settings" className="text-gray-600 hover:text-orange-600">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bots..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 border-l pl-6">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">Pro Plan</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white hover:from-orange-600 hover:to-orange-700 transition-colors group">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <Link to="/dashboard/bots/create" className="text-left">
              <div className="font-medium">Create New Bot</div>
              <div className="text-sm text-orange-100">Start from scratch or use a template</div>
            </Link>
            <ArrowUpRight className="w-5 h-5 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <Link to="/dashboard/api-keys" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">API Keys</div>
              <div className="text-sm text-gray-500">Manage your API access</div>
            </div>
          </Link>
          
          <Link to="/dashboard/billing" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">Billing & Wallet</div>
              <div className="text-sm text-gray-500">Manage your tokens</div>
            </div>
          </Link>
          
          <Link to="/dashboard/settings" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">Settings</div>
              <div className="text-sm text-gray-500">Configure your workspace</div>
            </div>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Bots', value: '3', change: '+1', icon: Bot },
            { label: 'Total Messages', value: '1,248', change: '+124', icon: MessageSquare },
            { label: 'API Credits', value: '8,500', change: '-500', icon: Code2 },
            { label: 'Monthly Cost', value: '$49.99', change: '$0', icon: CreditCard }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className={`text-sm font-medium flex items-center gap-1 ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-orange-500'
                }`}>
                  {stat.change}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Usage Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Message Volume</h3>
                <p className="text-sm text-gray-500">Messages processed per day</p>
              </div>
              <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="aspect-[2/1] bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl flex items-center justify-center">
              <LineChart className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6">Performance</h3>
            <div className="space-y-6">
              {[
                { label: 'Response Time', value: '98ms', target: '< 100ms', icon: Zap },
                { label: 'Success Rate', value: '99.8%', target: '> 99%', icon: Globe2 },
                { label: 'Active Users', value: '1.2k', target: '+12%', icon: Users }
              ].map((metric, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="text-sm text-green-500">{metric.target}</span>
                    </div>
                    <div className="text-lg font-semibold">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bot List */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Your Chatbots</h2>
              <p className="text-sm text-gray-500">Manage and monitor your active bots</p>
            </div>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Create New Bot
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Support Bot',
                status: 'Active',
                messages: '856',
                uptime: '99.9%',
                type: 'Customer Support'
              },
              {
                name: 'Sales Bot',
                status: 'Active',
                messages: '392',
                uptime: '99.7%',
                type: 'Sales & Marketing'
              },
              {
                name: 'FAQ Bot',
                status: 'Inactive',
                messages: '0',
                uptime: '0%',
                type: 'Knowledge Base'
              }
            ].map((bot, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{bot.name}</h3>
                    <span className="text-sm text-gray-500">{bot.type}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    bot.status === 'Active' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {bot.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Messages</span>
                    <span>{bot.messages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Uptime</span>
                    <span>{bot.uptime}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last updated 2h ago</span>
                  <Link
                    to={`/dashboard/bots/${index + 1}`}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                  >
                    Configure →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}