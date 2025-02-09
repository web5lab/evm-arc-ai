
import { Bot, ChevronRight, ArrowRight, Sparkles, Shield, Users, Bitcoin, Cpu, Zap } from 'lucide-react';
import web5labLogo from "../assets/web5lab.png"
import bnbLogo from '../assets/bnb.png'
import avaLogo from '../assets/avax.svg'
import baseLogo from '../assets/base.png'

export function Hero() {
  const parteners = [{img:avaLogo}, {img:web5labLogo}, {img:bnbLogo}, {img:baseLogo}]
  return (
    <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-orange-400/40 to-amber-400/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-[5%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-orange-300/30 to-yellow-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-3xl animate-slow-spin" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] sm:left-[15%] animate-float-slow">
          <Bitcoin className="w-16 h-16 text-orange-400/30" />
        </div>
  
        <div className="absolute bottom-[25%] left-[15%] sm:left-[25%] animate-float-slow animation-delay-400">
          <Zap className="w-10 h-10 text-orange-600/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="group bg-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-orange-100/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex -space-x-2">
                {parteners.map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-white flex items-center justify-center">
                    <img src={_.img} alt="" className='w-8 bg-white rounded-full h-8' />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 sm:gap-2 pl-0 sm:pl-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Trusted by 200+ Leading Crypto Platforms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 sm:mb-8 animate-fade-in animation-delay-200">
            <span className="inline-block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              Next-Gen AI Chat Bot
            </span>
            <br />
            <span className="inline-block mt-2 relative">
              for Web3 World
              <div className="absolute -right-8 sm:-right-12 -top-2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                  <Bot className="relative w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                </div>
              </div>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in animation-delay-400">
            Empower your crypto platform with AI that truly understands blockchain.
            Provide instant, accurate support 24/7.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 animate-fade-in animation-delay-600">
            <button className="group w-full sm:w-auto relative overflow-hidden px-12 py-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg font-medium">
                Start Free Trial
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl border-2 border-orange-200 text-orange-600 hover:border-orange-300 hover:bg-orange-50/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium">
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}