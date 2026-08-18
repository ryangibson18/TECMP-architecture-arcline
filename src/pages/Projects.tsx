import { useState } from 'react';
import { MapPin, Calendar, Maximize } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'institutional', name: 'Institutional' },
    { id: 'hospitality', name: 'Hospitality' },
  ];

  const projects = [
    {
      title: 'Skyline Residences',
      location: 'Whitefield, Bangalore',
      category: 'residential',
      area: '25,000',
      year: '2023',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Tech Hub Office Complex',
      location: 'Electronic City, Bangalore',
      category: 'commercial',
      area: '50,000',
      year: '2023',
      image: '/office-building2.jpg',
    },
    {
      title: 'Green Valley Villas',
      location: 'Sarjapur Road, Bangalore',
      category: 'residential',
      area: '18,000',
      year: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Heritage Hotel Restoration',
      location: 'MG Road, Bangalore',
      category: 'hospitality',
      area: '35,000',
      year: '2022',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'International School Campus',
      location: 'Hennur, Bangalore',
      category: 'institutional',
      area: '75,000',
      year: '2023',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Corporate Office Tower',
      location: 'Koramangala, Bangalore',
      category: 'commercial',
      area: '60,000',
      year: '2024',
      image: '/corporate-tower.jpg',
    },
    {
      title: 'Lakeside Villa Estate',
      location: 'Kanakapura Road, Bangalore',
      category: 'residential',
      area: '12,000',
      year: '2023',
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Boutique Hotel & Spa',
      location: 'Indiranagar, Bangalore',
      category: 'hospitality',
      area: '28,000',
      year: '2024',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Medical Research Center',
      location: 'Banashankari, Bangalore',
      category: 'institutional',
      area: '45,000',
      year: '2022',
      image: 'https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Shopping Mall Complex',
      location: 'Marathahalli, Bangalore',
      category: 'commercial',
      area: '85,000',
      year: '2023',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Urban Townhouses',
      location: 'HSR Layout, Bangalore',
      category: 'residential',
      area: '22,000',
      year: '2024',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Cultural Arts Center',
      location: 'Malleswaram, Bangalore',
      category: 'institutional',
      area: '32,000',
      year: '2023',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/ourprojectsbanner.jpg)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">A showcase of architectural excellence and innovation</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-primary-100 text-primary-700 hover:bg-gold-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-primary-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="space-y-2 text-sm text-primary-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gold-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Maximize className="w-4 h-4 mr-2 text-gold-600" />
                      {project.area} sq. ft.
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gold-600" />
                      Completed {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
