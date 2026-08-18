import { Briefcase, Mail, MapPin, Clock } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: 'Junior Architect',
      department: 'Architecture',
      type: 'Full-time',
      location: 'Bangalore',
      experience: '1-3 years',
      description: 'We are seeking a creative and detail-oriented Junior Architect to join our growing team. You will work on residential and commercial projects, assisting senior architects in design development and documentation.',
      requirements: [
        "Bachelor's degree in Architecture",
        'Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite',
        'Understanding of building codes and regulations',
        'Excellent communication and teamwork skills',
      ],
    },
    {
      title: '3D Visualizer',
      department: 'Visualization',
      type: 'Full-time',
      location: 'Bangalore',
      experience: '2-4 years',
      description: 'Looking for a talented 3D Visualizer to create photorealistic renders and walkthroughs for architectural projects. You will collaborate closely with architects and designers to bring concepts to life.',
      requirements: [
        'Expertise in 3ds Max, V-Ray, and Photoshop',
        'Portfolio demonstrating high-quality architectural visualization',
        'Understanding of lighting, materials, and composition',
        'Ability to meet tight deadlines',
      ],
    },
    {
      title: 'Interior Designer',
      department: 'Interior Design',
      type: 'Full-time',
      location: 'Bangalore',
      experience: '2-5 years',
      description: 'Join our interior design team to create stunning residential and commercial interiors. You will handle space planning, material selection, furniture design, and client presentations.',
      requirements: [
        'Degree in Interior Design or related field',
        'Strong portfolio of completed projects',
        'Proficiency in AutoCAD, SketchUp, and design software',
        'Excellent client communication skills',
      ],
    },
    {
      title: 'Project Coordinator',
      department: 'Project Management',
      type: 'Full-time',
      location: 'Bangalore',
      experience: '3-5 years',
      description: 'We need an organized Project Coordinator to oversee multiple projects, manage timelines, coordinate with vendors, and ensure smooth execution from design to completion.',
      requirements: [
        'Background in architecture or civil engineering',
        'Proven project management experience',
        'Strong organizational and multitasking abilities',
        'Knowledge of construction processes and practices',
      ],
    },
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Health insurance coverage',
    'Professional development opportunities',
    'Collaborative and creative work environment',
    'Work-life balance with flexible hours',
    'Modern office with latest design tools',
  ];

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl">Build your career with Bangalore's leading architectural firm</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-8">
              At Arcline, we're always looking for talented, creative minds to join our growing team.
              We foster a collaborative environment where innovation thrives and every team member
              contributes to our success.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-primary-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-primary-600">Explore current opportunities at Arcline</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-playfair text-2xl font-bold text-primary-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-primary-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-gold-600" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gold-600" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gold-600" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@arclinearchitects.in?subject=Application for ${position.title}`}
                      className="inline-flex items-center bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md font-medium transition-all hover:scale-105 whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Apply Now
                    </a>
                  </div>

                  <p className="text-primary-600 leading-relaxed mb-6">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-primary-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary-100">
                    <p className="text-sm text-primary-500">
                      Experience Required: {position.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-primary-600 leading-relaxed mb-8">
              We're always interested in meeting talented professionals. Send us your resume and
              portfolio, and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@arclinearchitects.in"
              className="inline-flex items-center bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
