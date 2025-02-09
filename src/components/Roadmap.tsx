import React, { useState } from 'react';
import { CheckCircle2, Circle, Timer, Rocket, Code2, Users, Cpu, Globe2, ArrowRight, ChevronDown } from 'lucide-react';

export function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const phases = [
    {
      title: 'Foundation',
      subtitle: 'Q1 2024',
      status: 'completed',
      description: 'Building the core infrastructure and team',
      items: [
        'Initial platform development',
        'Team formation',
        'Community building',
        'Whitepaper release'
      ],
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      progress: 100
    },
    {
      title: 'Launch',
      subtitle: 'Q2 2024',
      status: 'current',
      description: 'Platform launch and market entry',
      items: [
        'Token launch',
        'Exchange listings',
        'Marketing campaign',
        'Partnership announcements'
      ],
      icon: Rocket,
      color: 'from-orange-500 to-orange-600',
      progress: 45
    },
    {
      title: 'Growth',
      subtitle: 'Q3 2024',
      status: 'upcoming',
      description: 'Scaling operations and features',
      items: [
        'Advanced AI features',
        'Mobile app release',
        'Global expansion',
        'New partnerships'
      ],
      icon: Users,
      color: 'from-green-500 to-green-600',
      progress: 0
    },
    {
      title: 'Innovation',
      subtitle: 'Q4 2024',
      status: 'upcoming',
      description: 'Next-generation development',
      items: [
        'AI model upgrades',
        'Cross-chain integration',
        'Enterprise solutions',
        'Ecosystem expansion'
      ],
      icon: Cpu,
      color: 'from-purple-500 to-purple-600',
      progress: 0
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
      
      <div className="relative">
        <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          Our Journey
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Follow our roadmap as we build the future of AI-powered crypto support
        </p>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                expandedPhase === index ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {/* Header */}
              <div
                onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                className="p-6 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                      <phase.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{phase.title}</h3>
                        <span className="text-sm text-gray-500">{phase.subtitle}</span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        {phase.status === 'completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : phase.status === 'current' ? (
                          <Timer className="w-5 h-5 text-orange-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300" />
                        )}
                        <span className={`text-sm font-medium ${
                          phase.status === 'completed'
                            ? 'text-green-600'
                            : phase.status === 'current'
                            ? 'text-orange-600'
                            : 'text-gray-500'
                        }`}>
                          {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">{phase.progress}% Complete</div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedPhase === index ? 'transform rotate-180' : ''
                    }`} />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-500`}
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPhase === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t">
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <ArrowRight className={`w-5 h-5 ${
                            phase.status === 'completed'
                              ? 'text-green-500'
                              : phase.status === 'current'
                              ? 'text-orange-500'
                              : 'text-gray-400'
                          }`} />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}