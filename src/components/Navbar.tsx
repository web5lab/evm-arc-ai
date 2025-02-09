import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png"
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50 border-b border-orange-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="" className='w-12 h-12' />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500">
              ARCAI
            </span>
    
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/try-ai">Try AI</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/integrations">Integrations</NavLink>
            <NavLink to="/docs">Documentation</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x1234567890abcdef" // Replace with actual token contract
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Price Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    $0.015
                  </span>
                  <span className="text-green-400">+5.2%</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
              
              {/* Button */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 animate-pulse" />
                <button className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-2.5 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-3 group-hover:scale-105 transform">
                  <span className="font-medium">Buy CAI</span>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-orange-200">from</span>
                    <span>$0.015</span>
                  </div>
                </button>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x1234567890abcdef" // Replace with actual token contract
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-500/20 animate-pulse" />
                <button className="relative w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-medium">Buy CAI</span>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-orange-200">from</span>
                      <span>$0.015</span>
                    </div>
                  </div>
                </button>
              </a>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/try-ai">Try AI</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/integrations">Integrations</NavLink>
              <NavLink to="/docs">Documentation</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              <Link
                to="/signin"
                className="text-gray-600 hover:text-orange-600 transition-colors py-2"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-gray-600 hover:text-orange-600 transition-colors relative group inline-block ${
          isActive ? 'text-orange-600' : ''
        }`
      }
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
    </RouterNavLink>
  );
}