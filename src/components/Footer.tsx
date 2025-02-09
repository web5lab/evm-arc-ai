import React from 'react';
import { Bot } from 'lucide-react';
import logo from "../assets/logo.png"
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
          <img src={logo} alt="" className='w-12 h-12' />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
              ARCAI
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {['Features', 'Tokenomics', 'Roadmap', 'Pricing', 'Support'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} ARCAI
          </div>
        </div>
      </div>
    </footer>
  );
}