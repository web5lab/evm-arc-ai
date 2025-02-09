import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Achievements } from '../components/Achievements';
import { Tokenomics } from '../components/Tokenomics';
import { Roadmap } from '../components/Roadmap';
import { Dashboard } from '../components/Dashboard';
import { Pricing } from '../components/Pricing';
import { Networks } from '../components/Networks';
import { MobileApp } from '../components/MobileApp';
import { Integration } from '../components/Integration';
import { SelfHosted } from '../components/SelfHosted';
import { Partnerships } from '../components/Partnerships';
import { CTA } from '../components/CTA';
import { Navbar } from '../components/Navbar';

export function HomePage() {
  return (
    <div className="min-h-screen">
       <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <MobileApp />
      <Networks />
      <Integration />
      <SelfHosted />
      <Achievements />
      <Tokenomics />
      <Pricing />
      <Roadmap />
      <Partnerships />
      <CTA />
    </div>
  );
}