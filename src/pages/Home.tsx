import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Lightbulb,
  Shield,
  Target,
  Award,
  Calendar,
  HelpCircle,
  Briefcase,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentProject, setCurrentProject] = useState(0);

  const services = [
    {
      title: 'Architectural Design',
      description: 'Creating stunning residential, commercial, and institutional spaces that blend form and function.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Design',
    },
    {
      title: 'Interior Design',
      description: 'Transforming interiors into beautiful, functional spaces for homes, offices, and hospitality.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Interiors',
    },
    {
      title: 'Urban Planning',
      description: 'Comprehensive planning for townships, smart cities, and industrial developments.',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Planning',
    },
    {
      title: 'Landscape Design',
      description: 'Designing serene gardens, courtyards, and rooftop spaces that connect with nature.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Landscape',
    },
    {
      title: '3D Visualization',
      description: 'Photorealistic renders and immersive walkthroughs to bring your vision to life.',
      image: '/3d vis.jpg',
      tag: 'Visualization',
    },
    {
      title: 'Project Management',
      description: 'End-to-end project consultancy ensuring timely delivery and quality execution.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Management',
    },
  ];

  const featuredProjects = [
    {
      title: 'Skyline Residences',
      location: 'Whitefield, Bangalore',
      type: 'Residential',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Tech Hub Office Complex',
      location: 'Electronic City, Bangalore',
      type: 'Commercial',
      image: '/office-building2.jpg',
    },
    {
      title: 'Green Valley Villas',
      location: 'Sarjapur Road, Bangalore',
      type: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Heritage Hotel Restoration',
      location: 'MG Road, Bangalore',
      type: 'Hospitality',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const testimonials = [
    {
      name: 'Ayaan Pillai',
      location: 'Bangalore',
      rating: 5,
      text: 'Arcline transformed our vision into reality with exceptional attention to detail. Highly professional team!',
    },
    {
      name: 'Ira Sathyan',
      location: 'Whitefield',
      rating: 5,
      text: 'Outstanding architectural services. They delivered our dream home beyond expectations!',
    },
    {
      name: 'Vedansh Mathur',
      location: 'Electronic City',
      rating: 5,
      text: 'Professional, creative, and reliable. Our office space is now the envy of our competitors.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Designing Spaces That Inspire
          </h1>
          <p className="font-playfair text-2xl md:text-3xl mb-8 animate-slide-up">
            Building Futures That Last
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105 animate-slide-up"
          >
            Get a Free Consultation
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Welcome to Arcline Architects
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed">
              A Bangalore-based multidisciplinary design studio crafting exceptional spaces since 2012.
              We combine innovation, sustainability, and functionality to create architectural masterpieces
              that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Why Choose Arcline
            </h2>
            <p className="text-lg text-primary-600">
              Over a decade of trusted architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: '200+', label: 'Completed Projects' },
              { number: '13+', label: 'Years of Experience' },
              { number: '30+', label: 'Team Members' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries with creative design solutions.' },
              { icon: Shield, title: 'Sustainability', description: 'Eco-friendly practices in every project.' },
              { icon: Target, title: 'Functionality', description: 'Practical spaces that serve your needs.' },
              { icon: Award, title: 'Excellence', description: 'Award-winning designs that stand the test of time.' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <value.icon className="w-10 h-10 text-gold-600 mx-auto mb-3" />
                <h3 className="font-playfair text-lg font-semibold text-primary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('about')}
              className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center hover:translate-x-1 transition-transform"
            >
              Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-primary-600">
              Comprehensive architectural solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="relative rounded-xl overflow-hidden mb-5 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary-600 leading-relaxed text-sm mb-3">{service.description}</p>
                <span className="text-gold-600 font-medium text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-medium transition-all hover:scale-105"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-primary-600">
              Explore our portfolio of award-winning designs
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={featuredProjects[currentProject].image}
                alt={featuredProjects[currentProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2">
                  {featuredProjects[currentProject].title}
                </h3>
                <p className="text-lg mb-1">{featuredProjects[currentProject].location}</p>
                <p className="text-gold-300">{featuredProjects[currentProject].type}</p>
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-primary-900" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-primary-900" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject ? 'bg-gold-600 w-8' : 'bg-primary-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-medium transition-all hover:scale-105"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-primary-600">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 leading-relaxed mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-primary-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('testimonials')}
              className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center hover:translate-x-1 transition-transform"
            >
              Read More Testimonials <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-600">
              Passionate professionals dedicated to design excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Saanvi Verma', role: 'Senior Architect', image: 'https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Aarav Sharma', role: 'Lead Urban Planner', image: 'https://images.pexels.com/photos/7580761/pexels-photo-7580761.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Aadhya Rajput', role: 'Interior Design Head', image: 'https://images.pexels.com/photos/8463168/pexels-photo-8463168.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Vihaan Chauhan', role: 'Project Manager', image: 'https://images.pexels.com/photos/7581112/pexels-photo-7581112.jpeg?auto=compress&cs=tinysrgb&w=400' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-semibold text-primary-900">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('team')}
              className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center hover:translate-x-1 transition-transform"
            >
              View Full Team <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Blog & Insights
            </h2>
            <p className="text-lg text-primary-600">
              Expert perspectives on architecture, design, and planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '10 Sustainable Architecture Trends for 2024',
                date: 'January 15, 2024',
                category: 'Sustainability',
                image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Maximizing Small Spaces: Design Tips for Urban Living',
                date: 'January 10, 2024',
                category: 'Interior Design',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'The Role of Biophilic Design in Modern Offices',
                date: 'January 5, 2024',
                category: 'Commercial Design',
                image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-primary-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary-900 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('blog')}
              className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center hover:translate-x-1 transition-transform"
            >
              Read All Articles <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-primary-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How much does an architectural project typically cost?', a: 'Residential projects typically range from 1,500-3,000 per sq. ft., while commercial projects can range from 2,000-5,000 per sq. ft.' },
                { q: 'How long does a typical residential project take?', a: 'Design phase takes 4-8 weeks, approvals 2-4 weeks, and construction 8-18 months depending on project size.' },
                { q: 'Do you handle government approvals and permissions?', a: 'Yes, we assist with all necessary government approvals including building permits, NOCs, and regulatory compliance.' },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-primary-50 border border-primary-200 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-gold-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-2">{faq.q}</h3>
                      <p className="text-primary-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => onNavigate('faq')}
                className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center hover:translate-x-1 transition-transform"
              >
                View All FAQs <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-gold-400 mr-3" />
                <span className="text-gold-400 font-medium uppercase tracking-wider text-sm">Careers</span>
              </div>
              <h2 className="font-playfair text-4xl font-bold text-white mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-primary-300 leading-relaxed mb-6">
                We're always looking for talented, creative minds. Build your career with Bangalore's
                leading architectural firm in a collaborative environment where innovation thrives.
              </p>
              <button
                onClick={() => onNavigate('careers')}
                className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md font-medium transition-all hover:scale-105 inline-flex items-center"
              >
                View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Competitive Salary',
                'Health Insurance',
                'Creative Environment',
                'Growth Opportunities',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-primary-800 border border-primary-700 rounded-lg p-4 text-center"
                >
                  <p className="text-white font-medium text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Bring Your Dream Project to Life
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Bangalore's leading architectural firm for innovative, sustainable, and timeless designs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-gold-600 hover:bg-primary-50 px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
