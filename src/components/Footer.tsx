import { Building2, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Projects', page: 'projects' },
    { name: 'Team', page: 'team' },
    { name: 'Testimonials', page: 'testimonials' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact Us', page: 'contact' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Careers', page: 'careers' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-gold-400" />
              <div>
                <div className="font-playfair text-xl font-bold text-white">Arcline</div>
                <div className="text-xs text-primary-300 tracking-wide">
                  ARCHITECTS & PLANNERS
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed">
              Designing spaces that inspire. Building futures that last. A multidisciplinary
              architectural studio in Bangalore committed to innovation and sustainability.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-sm text-primary-300 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2">
              {quickLinks.slice(5).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-sm text-primary-300 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-300">
                  45 MG Road, Bengaluru, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-primary-300 hover:text-gold-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:info@arclinearchitects.in"
                  className="text-sm text-primary-300 hover:text-gold-400 transition-colors"
                >
                  info@arclinearchitects.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-300">Mon–Sat, 10 AM – 6 PM</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center">
          <p className="text-sm text-primary-400">
            © 2025 Arcline Architects & Planners. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
