import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
<<<<<<< HEAD
    { name: 'Mission', href: '/#mission' },
    { name: 'The Vault', href: '/vault' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/#contact' },
=======
    { name: 'Mission', href: '#mission' },
    { name: 'The Vault', href: '#vault' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/90 backdrop-blur-md border-b border-cyan/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
<<<<<<< HEAD
          <Link to="/" className="flex items-center gap-2">
=======
          <div className="flex items-center gap-2">
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
            <motion.svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-cyan"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeDasharray="6 4" />
              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </motion.svg>
            <span className="font-mono text-xl font-bold tracking-wider text-silver">
              VORTEX<span className="text-cyan">DIGI</span>LABS
            </span>
<<<<<<< HEAD
          </Link>
=======
          </div>
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
<<<<<<< HEAD
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-silver hover:text-cyan transition-colors px-3 py-2 rounded-md font-mono text-sm uppercase tracking-widest"
                >
                  {link.name}
                </Link>
=======
                <a
                  key={link.name}
                  href={link.href}
                  className="text-silver hover:text-cyan transition-colors px-3 py-2 rounded-md font-mono text-sm uppercase tracking-widest"
                >
                  {link.name}
                </a>
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-silver hover:text-cyan p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-charcoal/95 backdrop-blur-md border-b border-cyan/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
<<<<<<< HEAD
              <Link
                key={link.name}
                to={link.href}
=======
              <a
                key={link.name}
                href={link.href}
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-silver hover:text-cyan block px-3 py-2 rounded-md font-mono text-base uppercase tracking-widest"
              >
                {link.name}
<<<<<<< HEAD
              </Link>
=======
              </a>
>>>>>>> 48e37882e183cb156941881e36fa7e050462ac0e
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
