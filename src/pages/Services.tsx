import { Building2, Home, MapPin, TreePine, Sparkles, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Comprehensive architectural services for residential, commercial, and institutional projects.',
      features: [
        'Concept Design & Master Planning',
        'Detailed Architectural Drawings',
        'Structural Coordination',
        'Building Code Compliance',
        'Sustainable Design Integration',
      ],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Transform your spaces into beautiful, functional environments that reflect your personality and needs.',
      features: [
        'Space Planning & Layouts',
        'Material & Finish Selection',
        'Custom Furniture Design',
        'Lighting Design',
        '3D Visualization',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: MapPin,
      title: 'Urban & Regional Planning',
      description: 'Strategic planning services for townships, smart cities, and large-scale developments.',
      features: [
        'Master Planning',
        'Zoning & Land Use Planning',
        'Infrastructure Planning',
        'Smart City Solutions',
        'Environmental Impact Assessment',
      ],
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: TreePine,
      title: 'Landscape Design',
      description: 'Create harmonious outdoor spaces that blend nature with architectural beauty.',
      features: [
        'Garden & Courtyard Design',
        'Rooftop Garden Planning',
        'Hardscape & Softscape Design',
        'Water Feature Integration',
        'Sustainable Landscaping',
      ],
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: '3D Visualization & Walkthroughs',
      description: 'Bring your project to life with photorealistic renders and immersive virtual reality experiences.',
      features: [
        'Photorealistic 3D Renders',
        'Virtual Reality Walkthroughs',
        'Animation & Fly-throughs',
        'Interior & Exterior Visualization',
        'Real-time Design Modifications',
      ],
      image: '/3d vis.jpg',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management Consultancy',
      description: 'End-to-end project management ensuring timely delivery, quality control, and budget adherence.',
      features: [
        'Project Planning & Scheduling',
        'Quality Control & Monitoring',
        'Vendor Management',
        'Budget Management',
        'Government Approvals & Liaison',
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/archtec-banner.jpg)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive architectural solutions for every need</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <service.icon className="w-16 h-16 text-gold-600 mb-6" />
                  <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-primary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <button className="bg-white text-gold-600 hover:bg-primary-50 px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
