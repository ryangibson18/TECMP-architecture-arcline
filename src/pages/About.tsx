import { Target, Lightbulb, Shield, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '200+', label: 'Completed Projects' },
    { number: '13+', label: 'Years of Experience' },
    { number: '30+', label: 'Team Members' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with creative design solutions that redefine modern architecture.',
    },
    {
      icon: Shield,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable building materials in every project.',
    },
    {
      icon: Target,
      title: 'Functionality',
      description: 'Balancing aesthetic excellence with practical, livable spaces that serve your needs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering award-winning designs that exceed expectations and stand the test of time.',
    },
  ];

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">About Arcline</h1>
          <p className="text-xl">Crafting architectural excellence since 2012</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-6">
              Founded in 2012 in the heart of Bangalore, Arcline Architects & Planners has grown into
              one of India's most respected multidisciplinary design studios. What began as a small
              practice with a vision to create meaningful spaces has evolved into a comprehensive
              architectural firm serving clients across residential, commercial, and institutional sectors.
            </p>
            <p className="text-lg text-primary-600 leading-relaxed">
              Our approach combines timeless design principles with cutting-edge technology,
              sustainable practices, and deep understanding of our clients' needs. Every project we
              undertake is a testament to our commitment to excellence, innovation, and the belief
              that great architecture can transform lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-5xl md:text-6xl font-bold text-gold-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-primary-600 leading-relaxed">
                  To create architectural masterpieces that seamlessly blend innovation, sustainability,
                  and functionality, enriching the lives of our clients and communities while respecting
                  the environment and preserving our architectural heritage.
                </p>
              </div>
              <div>
                <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
                  Design Philosophy
                </h2>
                <p className="text-lg text-primary-600 leading-relaxed">
                  We believe that great architecture emerges from a deep understanding of context,
                  culture, and client aspirations. Our design philosophy centers on creating spaces
                  that are not just visually stunning but also deeply functional, sustainable, and
                  responsive to human needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-primary-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <value.icon className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/archtect.jpg"
                  alt="Founder"
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
                  Meet Our Founder
                </h2>
                <h3 className="text-2xl font-semibold text-gold-600 mb-4">
                  Ar. Avik Malhotra
                </h3>
                <p className="text-lg text-primary-600 leading-relaxed mb-4">
                  With over 15 years of experience in architecture and urban planning, Avik founded
                  Arcline with a vision to create spaces that inspire and endure. A graduate of the
                  prestigious School of Planning and Architecture, he brings a unique blend of
                  technical expertise and artistic sensibility to every project.
                </p>
                <p className="text-lg text-primary-600 leading-relaxed">
                  Under his leadership, Arcline has received numerous awards and recognition for
                  innovative design and sustainable practices. Avik believes that architecture
                  should not just be about buildings, but about creating experiences that enhance
                  the quality of life for all who inhabit them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
