export default function AboutUs({ companyName }) {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 gradient-text">
              About {companyName}
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 slide-up">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With <span className="font-bold text-primary-600">years of experience</span> in the industry, {companyName} has established itself as a trusted name in Ponda, Goa, for all your carpentry, fabrication, and interior design needs.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We specialize in creating <span className="font-semibold text-gray-900">custom solutions</span> that blend functionality with aesthetics. From modular kitchens to intricate metalwork, our team of skilled craftsmen brings your vision to life with precision and attention to detail.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our commitment to <span className="font-semibold text-primary-600">quality, timely delivery, and customer satisfaction</span> has made us the preferred choice for residential and commercial projects across Goa.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

