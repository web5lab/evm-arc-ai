
import { Globe2, Server } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import arcAiLogo from "../assets/arcAi.png"

const TECHNOLOGY_PARTNERS = [
  { name: 'AWS', category: 'Infrastructure', logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png' },
  { name: 'Microsoft Azure', category: 'Infrastructure', logo: 'https://azure.microsoft.com/svghandler/azure/?width=300&height=300' },
  { name: 'Chainlink', category: 'Oracle', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
  { name: 'The Graph', category: 'Data', logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png' }
];

const EXCHANGE_PARTNERS = [
  { name: 'Uniswap', category: 'DEX', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
  { name: 'PancakeSwap', category: 'DEX', logo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png' },
  { name: 'SushiSwap', category: 'DEX', logo: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png' },
  { name: 'Curve', category: 'DEX', logo: 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png' },
  { name: 'dYdX', category: 'DEX', logo: 'https://cryptologos.cc/logos/dydx-dydx-logo.png' },
  { name: 'Balancer', category: 'DEX', logo: 'https://cryptologos.cc/logos/balancer-bal-logo.png' },
  { name: 'ArcAi', category: 'DEX', logo: arcAiLogo }
];

export function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Partners Section */}
      <Navbar />
      <div className="bg-white mt-6 py-20">
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
                    <div className={`text-sm ${partner.category === 'DEX'
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