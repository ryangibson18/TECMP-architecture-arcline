import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ishan Joshi',
      location: 'Whitefield, Bangalore',
      project: 'Residential Villa',
      rating: 5,
      text: 'Arcline transformed our vision into reality with exceptional attention to detail. The team was professional, responsive, and delivered beyond our expectations. Our dream home is now a stunning reality!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Riya Jindal',
      location: 'Indiranagar, Bangalore',
      project: 'Apartment Interior',
      rating: 5,
      text: 'Outstanding interior design services! They understood our style perfectly and created a space that is both beautiful and functional. The attention to detail and quality of execution was remarkable.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Atharv Saini',
      location: 'Electronic City, Bangalore',
      project: 'Corporate Office',
      rating: 5,
      text: 'Professional, creative, and reliable. Our office space is now the envy of our competitors. Arcline delivered a modern, efficient workspace that has improved our team productivity significantly.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ayana Pawar',
      location: 'Koramangala, Bangalore',
      project: 'Restaurant Design',
      rating: 5,
      text: 'The team at Arcline brought our restaurant concept to life beautifully. Their creative vision and practical approach resulted in a space that our customers absolutely love. Highly recommend!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Arnit Patel',
      location: 'Hebbal, Bangalore',
      project: 'Commercial Complex',
      rating: 5,
      text: 'From concept to completion, Arcline managed our commercial project with utmost professionalism. The design is innovative, the execution was flawless, and they stayed within budget and timeline.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Prisha Iyer',
      location: 'Jayanagar, Bangalore',
      project: 'Heritage Home Renovation',
      rating: 5,
      text: 'Renovating our heritage home was a delicate project, and Arcline handled it with great sensitivity and expertise. They preserved the character while modernizing the functionality perfectly.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jaiveer Mehra',
      location: 'Sarjapur Road, Bangalore',
      project: 'Luxury Villa',
      rating: 5,
      text: 'Exceptional architectural design and service. The team listened to our needs, provided innovative solutions, and delivered a luxury villa that exceeded all our expectations. Truly world-class work!',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Kiara Menon',
      location: 'HSR Layout, Bangalore',
      project: 'Urban Apartment',
      rating: 5,
      text: 'Working with Arcline was a pleasure from start to finish. Their modern design approach and efficient project management made the entire process smooth and stress-free. Love our new home!',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl">Hear what our satisfied clients have to say</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
              Trusted by Clients Across Bangalore
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed">
              Our commitment to excellence and client satisfaction has earned us the trust of
              homeowners, businesses, and institutions throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-primary-100"
              >
                <Quote className="w-10 h-10 text-gold-400 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>

                <p className="text-primary-700 leading-relaxed mb-6">{testimonial.text}</p>

                <div className="flex items-center pt-4 border-t border-primary-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-500">{testimonial.location}</p>
                    <p className="text-sm text-gold-600">{testimonial.project}</p>
                  </div>
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
            Join our growing list of satisfied clients and experience the Arcline difference
          </p>
          <button className="bg-white text-gold-600 hover:bg-primary-50 px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
