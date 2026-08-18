import { Linkedin } from 'lucide-react';

export default function Team() {
  const founder = {
    name: 'Ar. Avik Malhotra',
    role: 'Founder & Principal Architect',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'With over 15 years of experience, Avik leads Arcline with a vision to create spaces that inspire. A graduate of SPA Delhi, he brings innovation and sustainability to every project.',
  };

  const team = [
    {
      name: 'Saanvi Verma',
      role: 'Senior Architect',
      image: 'https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Residential Design',
    },
    {
      name: 'Aarav Sharma',
      role: 'Lead Urban Planner',
      image: 'https://images.pexels.com/photos/7580761/pexels-photo-7580761.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Master Planning',
    },
    {
      name: 'Aadhya Rajput',
      role: 'Interior Design Head',
      image: 'https://images.pexels.com/photos/8463168/pexels-photo-8463168.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Luxury Interiors',
    },
    {
      name: 'Vihaan Chauhan',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/7581112/pexels-photo-7581112.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Construction Management',
    },
    {
      name: 'Aarohi Deshmukh',
      role: 'Landscape Architect',
      image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Sustainable Landscapes',
    },
    {
      name: 'Kairav Reddy',
      role: '3D Visualization Lead',
      image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Architectural Rendering',
    },
    {
      name: 'Mishka Nair',
      role: 'Structural Engineer',
      image: 'https://images.pexels.com/photos/3756944/pexels-photo-3756944.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Structural Design',
    },
    {
      name: 'Rajan Bhasin',
      role: 'Junior Architect',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Commercial Architecture',
    },
  ];

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">Passionate professionals dedicated to design excellence</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-2">
                  {founder.name}
                </h2>
                <p className="text-xl text-gold-600 mb-6">{founder.role}</p>
                <p className="text-lg text-primary-600 leading-relaxed mb-6">{founder.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-700 hover:text-gold-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-primary-600">
              Talented architects, designers, and engineers working together
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-primary-600 mb-4">{member.specialization}</p>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-gold-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
