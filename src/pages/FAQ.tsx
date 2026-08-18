import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does an architectural project typically cost?',
      answer: 'Project costs vary significantly based on size, complexity, location, and specifications. Residential projects typically range from ₹1,500-₹3,000 per sq. ft., while commercial projects can range from ₹2,000-₹5,000 per sq. ft. We provide detailed cost estimates after understanding your specific requirements and conducting a site visit.',
    },
    {
      question: 'Do you provide 3D visualizations and walkthroughs?',
      answer: 'Yes, absolutely! We offer comprehensive 3D visualization services including photorealistic renders, virtual reality walkthroughs, and animated fly-throughs. This helps you visualize your project before construction begins and make informed design decisions.',
    },
    {
      question: 'How long does a typical residential project take?',
      answer: 'Timeline varies by project scope. Design phase typically takes 4-8 weeks, approvals 2-4 weeks, and construction 8-18 months depending on project size. We provide detailed timelines during consultation and ensure regular updates throughout the project lifecycle.',
    },
    {
      question: 'Do you handle government approvals and permissions?',
      answer: 'Yes, we assist with all necessary government approvals including building permits, NOCs, and regulatory compliance. Our team has extensive experience navigating the approval process with BBMP, BMRDA, and other relevant authorities in Bangalore.',
    },
    {
      question: 'Can you work on renovation and remodeling projects?',
      answer: "Absolutely! We specialize in both new constructions and renovation projects. Whether it's a complete home makeover, office renovation, or heritage restoration, our team has the expertise to transform existing spaces while respecting structural constraints and your budget.",
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Yes, we offer virtual consultations via video call for initial discussions and project reviews. This is especially convenient for clients outside Bangalore or those preferring remote meetings. However, site visits are necessary for accurate assessments and measurements.',
    },
    {
      question: 'What is your design process?',
      answer: 'Our process includes: 1) Initial consultation and site analysis, 2) Concept development and presentation, 3) Design refinement based on feedback, 4) Detailed working drawings, 5) Construction documentation, 6) Project management and supervision. We maintain transparent communication throughout each phase.',
    },
    {
      question: 'Do you provide post-construction support?',
      answer: 'Yes, we offer comprehensive post-construction support including warranty assistance, maintenance guidance, and future modification consultations. We believe in building long-term relationships with our clients and remain available for any queries or concerns.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">Find answers to common questions about our services</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-primary-900 mb-4">
                Have Questions?
              </h2>
              <p className="text-lg text-primary-600">
                We've compiled answers to the most common questions we receive from our clients
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-primary-200 rounded-lg overflow-hidden hover:border-gold-400 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg text-primary-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-gold-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary-600" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-5 animate-slide-up">
                      <p className="text-primary-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gold-50 rounded-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-primary-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-primary-600 mb-6">
                Can't find what you're looking for? Get in touch with our team for personalized assistance.
              </p>
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-md font-medium transition-all hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
