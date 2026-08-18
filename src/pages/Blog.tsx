import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: '10 Sustainable Architecture Trends for 2024',
      date: 'January 15, 2024',
      category: 'Sustainability',
      summary: 'Explore the latest eco-friendly design practices and materials shaping modern architecture.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Maximizing Small Spaces: Design Tips for Urban Living',
      date: 'January 10, 2024',
      category: 'Interior Design',
      summary: 'Learn how to make the most of compact living spaces with smart design solutions.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Role of Biophilic Design in Modern Offices',
      date: 'January 5, 2024',
      category: 'Commercial Design',
      summary: 'Discover how integrating nature into workspace design improves productivity and well-being.',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Smart Home Technology Integration in Architecture',
      date: 'December 28, 2023',
      category: 'Technology',
      summary: 'How modern architects are seamlessly incorporating smart technology into residential designs.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Preserving Heritage: Renovation vs. Restoration',
      date: 'December 20, 2023',
      category: 'Heritage',
      summary: 'Understanding the delicate balance between preserving historical architecture and modern needs.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Future of Urban Planning in Indian Cities',
      date: 'December 15, 2023',
      category: 'Urban Planning',
      summary: 'Examining innovative approaches to sustainable urban development and smart city initiatives.',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Choosing the Right Materials for Tropical Climate',
      date: 'December 10, 2023',
      category: 'Materials',
      summary: 'A comprehensive guide to selecting durable, climate-appropriate building materials.',
      image: 'https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Landscape Architecture: Creating Outdoor Living Spaces',
      date: 'December 5, 2023',
      category: 'Landscape',
      summary: 'Tips for designing functional and beautiful outdoor areas that extend your living space.',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
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
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl">Expert perspectives on architecture, design, and planning</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-primary-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>

                  <h3 className="font-playfair text-xl font-semibold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-primary-600 leading-relaxed mb-4">{article.summary}</p>

                  <button className="text-gold-600 font-medium hover:text-gold-700 inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
