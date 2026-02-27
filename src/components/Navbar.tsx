import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#D4AF37] tracking-wide font-serif">
            TimeTravel
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('concept')}
              className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Concept
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="px-6 py-2 bg-[#D4AF37] text-[#0a0a0a] font-semibold rounded hover:bg-[#c5a028] transition-all duration-300 hover:scale-105"
            >
              Réservation
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#D4AF37]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-gray-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('destinations')}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors text-left"
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('concept')}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors text-left"
              >
                Concept
              </button>
              <button
                onClick={() => scrollToSection('reservation')}
                className="px-6 py-2 bg-[#D4AF37] text-[#0a0a0a] font-semibold rounded hover:bg-[#c5a028] transition-all"
              >
                Réservation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
