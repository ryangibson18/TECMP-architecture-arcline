import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: 'Team', page: 'team' },
    { name: 'Testimonials', page: 'testimonials' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Careers', page: 'careers' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group"
          >
            <Building2 className="w-8 h-8 text-gold-600 group-hover:text-gold-700 transition-colors" />
            <div className="text-left">
              <div className="font-playfair text-2xl font-bold text-primary-900">
                Arcline
              </div>
              <div className="text-xs text-primary-600 tracking-wide">
                ARCHITECTS & PLANNERS
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPage === item.page
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-primary-700 hover:text-gold-600 hover:bg-gold-50/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-3 text-left text-sm font-medium transition-colors rounded-md ${
                  currentPage === item.page
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-primary-700 hover:text-gold-600 hover:bg-gold-50/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
