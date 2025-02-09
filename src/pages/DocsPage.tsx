import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Book, Code2, Rocket, Shield, Settings, Terminal, Cpu, Coins, Webhook, Package, Key, Lock, Palette, Globe } from 'lucide-react';

function DocsSidebar() {
  const location = useLocation();
  
  const links = [
    {
      category: 'Getting Started',
      items: [
        { to: '/docs', icon: Book, label: 'Introduction', exact: true },
        { to: '/docs/getting-started', icon: Rocket, label: 'Quick Start' },
        { to: '/docs/installation', icon: Terminal, label: 'Installation' }
      ]
    },
    {
      category: 'Core Concepts',
      items: [
        { to: '/docs/architecture', icon: Code2, label: 'Architecture' },
        { to: '/docs/ai-models', icon: Cpu, label: 'AI Models' },
        { to: '/docs/token-system', icon: Coins, label: 'Token System' }
      ]
    },
    {
      category: 'Integration',
      items: [
        { to: '/docs/api-reference', icon: Code2, label: 'API Reference' },
        { to: '/docs/webhooks', icon: Webhook, label: 'Webhooks' },
        { to: '/docs/sdks', icon: Package, label: 'SDKs' }
      ]
    },
    {
      category: 'Security',
      items: [
        { to: '/docs/security', icon: Shield, label: 'Overview' },
        { to: '/docs/authentication', icon: Key, label: 'Authentication' },
        { to: '/docs/data-privacy', icon: Lock, label: 'Data Privacy' }
      ]
    },
    {
      category: 'Customization',
      items: [
        { to: '/docs/configuration', icon: Settings, label: 'Configuration' },
        { to: '/docs/theming', icon: Palette, label: 'Theming' },
        { to: '/docs/localization', icon: Globe, label: 'Localization' }
      ]
    }
  ];

  return (
    <nav className="w-72 border-r p-6">
      {links.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 px-4">
            {section.category}
          </h3>
          <div className="space-y-1">
            {section.items.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

function Introduction() {
  return (
    <div className="prose max-w-none">
      <h1>ARCAI Documentation</h1>
      <p>
        Welcome to the ARCAI documentation. Here you'll find comprehensive guides and documentation to help you start working with ARCAI as quickly as possible.
      </p>
      <h2>What is ARCAI?</h2>
      <p>
        ARCAI is an AI-powered chat solution specifically designed for cryptocurrency and blockchain platforms. It provides instant, accurate support to your users 24/7.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>AI-powered responses trained on crypto-specific data</li>
        <li>Multi-language support</li>
        <li>Enterprise-grade security</li>
        <li>Easy integration options</li>
        <li>Customizable UI</li>
      </ul>
    </div>
  );
}

function GettingStarted() {
  return (
    <div className="prose max-w-none">
      <h1>Getting Started</h1>
      <p>
        Get up and running with ARCAI in minutes. Follow these steps to integrate our chat solution into your platform.
      </p>
      <h2>Prerequisites</h2>
      <ul>
        <li>An API key from the ARCAI dashboard</li>
        <li>A supported web platform or application</li>
      </ul>
      <h2>Quick Start</h2>
      <ol>
        <li>Sign up for a ARCAI account</li>
        <li>Generate an API key</li>
        <li>Choose your integration method</li>
        <li>Configure the chat widget</li>
        <li>Test the integration</li>
      </ol>
    </div>
  );
}

function Installation() {
  return (
    <div className="prose max-w-none">
      <h1>Installation</h1>
      <h2>NPM Package</h2>
      <pre><code>npm install @ARCAI/chat-widget</code></pre>
      <h2>CDN Script</h2>
      <pre><code>{`<script src="https://cdn.ARCAI.com/chat-widget.js"></script>`}</code></pre>
      <h2>API Integration</h2>
      <p>
        For custom integrations, you can use our REST API directly. See the API Reference section for details.
      </p>
    </div>
  );
}

function ApiReference() {
  return (
    <div className="prose max-w-none">
      <h1>API Reference</h1>
      <h2>Authentication</h2>
      <p>
        All API requests require authentication using your API key in the Authorization header.
      </p>
      <h2>Endpoints</h2>
      <h3>POST /v1/chat</h3>
      <pre><code>{`curl -X POST https://api.ARCAI.com/v1/chat \\
  -H 'Authorization: Bearer your_api_key' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "message": "How do I buy tokens?",
    "context": "purchase"
  }'`}</code></pre>
    </div>
  );
}

function Security() {
  return (
    <div className="prose max-w-none">
      <h1>Security</h1>
      <h2>Data Protection</h2>
      <p>
        We implement bank-grade security measures to protect your data:
      </p>
      <ul>
        <li>End-to-end encryption</li>
        <li>Regular security audits</li>
        <li>GDPR compliance</li>
        <li>SOC 2 certification</li>
      </ul>
    </div>
  );
}

function Configuration() {
  return (
    <div className="prose max-w-none">
      <h1>Configuration</h1>
      <h2>Widget Options</h2>
      <pre><code>{`ARCAI.init({
  apiKey: 'your_api_key',
  theme: 'light',
  position: 'bottom-right',
  initialMessage: 'How can I help you?',
  primaryColor: '#f97316'
});`}</code></pre>
    </div>
  );
}

export function DocsPage() {
  return (
    <div className="min-h-screen flex">
      <DocsSidebar />
      <div className="flex-1 p-8">
        <Routes>
          <Route index element={<Introduction />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="installation" element={<Installation />} />
          <Route path="api-reference" element={<ApiReference />} />
          <Route path="security" element={<Security />} />
          <Route path="configuration" element={<Configuration />} />
        </Routes>
      </div>
    </div>
  );
}