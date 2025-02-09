import React from 'react';
import { Activity, Users, ArrowUpRight, Wallet, Globe2, LineChart, BarChart, PieChart, Circle } from 'lucide-react';

const messageVolumeData = [
  { date: 'Mon', value: 1250, percentage: 12 },
  { date: 'Tue', value: 1400, percentage: 28 },
  { date: 'Wed', value: 1800, percentage: 42 },
  { date: 'Thu', value: 1600, percentage: 35 },
  { date: 'Fri', value: 2100, percentage: 55 },
  { date: 'Sat', value: 1800, percentage: 40 },
  { date: 'Sun', value: 1500, percentage: 30 },
];

export function Dashboard() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
        Platform Dashboard
      </h2>

      <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Total Users', value: '50,000+', change: '+12%', icon: Users },
            { label: 'Active Sessions', value: '2,500', change: '+8%', icon: Activity },
            { label: 'Global Reach', value: '120+ Countries', change: '+15%', icon: Globe2 },
            { label: 'Token Price', value: '$0.015', change: '+5%', icon: Wallet }
          ].map((stat, index) => (
            <div key={index} className="bg-orange-50/50 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                  {stat.change}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'User Growth', icon: LineChart },
          { title: 'Token Distribution', icon: PieChart },
          { title: 'Platform Usage', icon: BarChart }
        ].map((chart, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">{chart.title}</h3>
              <chart.icon className="w-5 h-5 text-orange-500" />
            </div>
            <div className="aspect-video bg-orange-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Chart Visualization</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}