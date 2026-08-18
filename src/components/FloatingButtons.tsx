import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp, X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="font-playfair text-2xl font-semibold text-primary-900">
            Get Instant Quote
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-primary-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-primary-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Project Type
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select a type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="institutional">Institutional</option>
              <option value="interior">Interior Design</option>
              <option value="landscape">Landscape Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gold-600 text-white py-3 rounded-md font-medium hover:bg-gold-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <button
          onClick={() => setShowQuoteModal(true)}
          className="px-4 py-3 bg-gold-600 text-white rounded-full font-medium shadow-lg hover:bg-gold-700 hover:scale-105 transition-all text-sm whitespace-nowrap"
        >
          Get Quote
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-primary-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-900 hover:scale-110 transition-all animate-fade-in"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  );
}
