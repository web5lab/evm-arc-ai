import React from 'react';
import { Code2, Bot, Wallet, Globe2, Shield, Zap, Database, Blocks, Braces, Cpu, Server, Lock } from 'lucide-react';

const INTEGRATION_CATEGORIES = [
  {
    title: 'Development Tools',
    description: 'Integrate ARCAI into your development workflow',
    items: [
      {
        name: 'REST API',
        description: 'Build custom solutions with our powerful REST API',
        icon: Globe2,
        status: 'Available',
        docs: '/docs/api-reference'
      },
      {
        name: 'WebSocket API',
        description: 'Real-time updates and streaming responses',
        icon: Zap,
        status: 'Available',
        docs: '/docs/websocket'
      },
      {
        name: 'GraphQL API',
        description: 'Flexible queries and precise data fetching',
        icon: Database,
        status: 'Beta',
        docs: '/docs/graphql'
      }
    ]
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official libraries for popular programming languages',
    items: [
      {
        name: 'JavaScript/TypeScript',
        description: 'React hooks and components included',
        icon: Braces,
        status: 'Available',
        docs: '/docs/js-sdk'
      },
      {
        name: 'Python SDK',
        description: 'Perfect for data analysis and automation',
        icon: Code2,
        status: 'Available',
        docs: '/docs/python-sdk'
      },
      {
        name: 'Rust SDK',
        description: 'High-performance systems integration',
        icon: Cpu,
        status: 'Coming Soon',
        docs: null
      }
    ]
  },
  {
    title: 'Platform Integrations',
    description: 'Pre-built integrations with popular platforms',
    items: [
      {
        name: 'MetaMask',
        description: 'Seamless wallet integration and authentication',
        icon: Wallet,
        status: 'Available',
        docs: '/docs/metamask'
      },
      {
        name: 'Discord Bot',
        description: 'AI support directly in your Discord server',
        icon: Bot,
        status: 'Beta',
        docs: '/docs/discord'
      },
      {
        name: 'Telegram Bot',
        description: 'Automated support on Telegram',
        icon: Bot,
        status: 'Coming Soon',
        docs: null
      }
    ]
  }
];

const TECHNOLOGY_PARTNERS = [
  { name: 'Google Cloud', category: 'Infrastructure', logo: 'https://www.gstatic.com/devrel-devsite/prod/v2f6fb68338062e7c16672db62c4ab042dcb9bfbacf2fa51b6959426b203a4d8a/cloud/images/cloud-logo.svg' },
  { name: 'AWS', category: 'Infrastructure', logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png' },
  { name: 'Microsoft Azure', category: 'Infrastructure', logo: 'https://azure.microsoft.com/svghandler/azure/?width=300&height=300' },
  { name: 'Chainlink', category: 'Oracle', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
  { name: 'The Graph', category: 'Data', logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png' },
  { name: 'Alchemy', category: 'Node Provider', logo: 'https://www.alchemy.com/images/logo.svg' }
];

const EXCHANGE_PARTNERS = [
  { name: 'Binance', category: 'Exchange', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
  { name: 'Coinbase', category: 'Exchange', logo: 'https://cryptologos.cc/logos/coinbase-coin-coin-logo.png' },
  { name: 'Kraken', category: 'Exchange', logo: 'https://cryptologos.cc/logos/kraken-kncl-logo.png' },
  { name: 'KuCoin', category: 'Exchange', logo: 'https://cryptologos.cc/logos/kucoin-token-kcs-logo.png' },
  { name: 'OKX', category: 'Exchange', logo: 'https://cryptologos.cc/logos/okb-okb-logo.png' },
  { name: 'Huobi', category: 'Exchange', logo: 'https://cryptologos.cc/logos/huobi-token-ht-logo.png' },
  { name: 'Uniswap', category: 'DEX', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
  { name: 'PancakeSwap', category: 'DEX', logo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png' },
  { name: 'SushiSwap', category: 'DEX', logo: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png' },
  { name: 'Curve', category: 'DEX', logo: 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png' },
  { name: 'dYdX', category: 'DEX', logo: 'https://cryptologos.cc/logos/dydx-dydx-logo.png' },
  { name: 'Balancer', category: 'DEX', logo: 'https://cryptologos.cc/logos/balancer-bal-logo.png' }
];

export function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
              Integrations & Partners
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Explore our ecosystem of integrations and partnerships powering the future of crypto support
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'API Endpoints', value: '50+' },
                { label: 'SDK Languages', value: '6' },
                { label: 'Platform Integrations', value: '12' },
                { label: 'Technology Partners', value: '20+' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Categories */}
      <div className="container mx-auto px-6 py-20">
        <div className="space-y-20">
          {INTEGRATION_CATEGORIES.map((category, index) => (
            <div key={index}>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{item.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.status === 'Available'
                              ? 'bg-green-100 text-green-700'
                              : item.status === 'Beta'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        {item.docs && (
                          <a
                            href={item.docs}
                            className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                          >
                            View Documentation →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600">
              Working together with industry leaders to provide the best possible solutions
            </p>
          </div>

          <div className="space-y-12">
            {/* Technology Partners */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Server className="w-5 h-5 text-orange-500" />
                Technology Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {TECHNOLOGY_PARTNERS.map((partner, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
                    {partner.logo && (
                      <div className="mb-3 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    )}
                    <div className="font-medium text-gray-900">{partner.name}</div>
                    <div className="text-sm text-gray-500">{partner.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exchange Partners */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-orange-500" />
                Exchange & DEX Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {EXCHANGE_PARTNERS.map((partner, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all">
                    {partner.logo && (
                      <div className="mb-3 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    )}
                    <div className="font-medium text-gray-900">{partner.name}</div>
                    <div className={`text-sm ${
                      partner.category === 'DEX' 
                        ? 'text-orange-500 font-medium' 
                        : 'text-gray-500'
                    }`}>
                      {partner.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with ARCAI?
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive documentation and developer resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-colors">
              View Documentation
            </button>
            <button className="bg-orange-400/20 text-white px-8 py-4 rounded-full hover:bg-orange-400/30 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}