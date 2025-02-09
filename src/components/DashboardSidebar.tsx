import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bot, 
  LineChart, 
  Settings, 
  Key, 
  CreditCard, 
  Users, 
  Bell,
  HelpCircle
} from 'lucide-react';

export function DashboardSidebar() {
  const navigation = [
    { name: 'Overview', icon: LayoutDashboard, to: '/dashboard' },
    { name: 'My Bots', icon: Bot, to: '/dashboard/bots' },
    { name: 'Analytics', icon: LineChart, to: '/dashboard/analytics' },
    { name: 'API Keys', icon: Key, to: '/dashboard/api-keys' },
    { name: 'Billing', icon: CreditCard, to: '/dashboard/billing' },
    { name: 'Team', icon: Users, to: '/dashboard/team' },
    { name: 'Notifications', icon: Bell, to: '/dashboard/notifications' },
    { name: 'Settings', icon: Settings, to: '/dashboard/settings' },
    { name: 'Help & Docs', icon: HelpCircle, to: '/docs' },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="p-6">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}