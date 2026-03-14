/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Vault from './components/Vault';
import SparklesSection from './components/SparklesSection';
import { HeroSection } from './components/ui/hero-section-shadcnui';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NexusAI from './components/NexusAI';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-silver selection:bg-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SparklesSection />
        <Mission />
        <Vault />
        <HeroSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <NexusAI />
    </div>
  );
}
