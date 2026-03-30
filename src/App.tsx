/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

<<<<<<< HEAD
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import { HeroSection } from './components/ui/hero-section-shadcnui';
import VortexForm from './components/VortexForm';
import Footer from './components/Footer';
import NexusAI from './components/NexusAI';
import VaultPage from './pages/VaultPage';
import CertificationsPage from './pages/CertificationsPage';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

=======
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
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
  return (
    <div className="min-h-screen bg-charcoal text-silver selection:bg-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
<<<<<<< HEAD
        <Mission />
        <HeroSection />
        <VortexForm />
=======
        <SparklesSection />
        <Mission />
        <Vault />
        <HeroSection />
        <Certifications />
        <Contact />
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
      </main>
      <Footer />
      <NexusAI />
    </div>
  );
}
<<<<<<< HEAD

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vault" element={<VaultPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </Router>
  );
}
=======
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
