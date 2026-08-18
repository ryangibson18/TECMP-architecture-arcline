import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Let's discuss your next project</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll
                respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900 mb-1">Address</h3>
                    <p className="text-primary-600">45 MG Road, Bengaluru, Karnataka 560001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-primary-600 hover:text-gold-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@arclinearchitects.in"
                      className="text-primary-600 hover:text-gold-600 transition-colors"
                    >
                      info@arclinearchitects.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900 mb-1">Office Hours</h3>
                    <p className="text-primary-600">Monday – Saturday</p>
                    <p className="text-primary-600">10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-primary-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="interior">Interior Design</option>
                      <option value="landscape">Landscape Design</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-primary-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-600 text-white py-3 rounded-md font-medium hover:bg-gold-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9607793183693!2d77.60283631482196!3d12.97547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Arcline Architects Location"
        ></iframe>
      </section>
    </div>
  );
}
