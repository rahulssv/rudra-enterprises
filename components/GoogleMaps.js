import { FaMapMarkerAlt, FaStar, FaExternalLinkAlt } from 'react-icons/fa';

export default function GoogleMaps({ googleMapsData, address }) {
  if (!googleMapsData) return null;

  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 gradient-text">
            Visit Our Location
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come visit us at our workshop in Ponda, Goa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] relative">
            {googleMapsData.embedUrl ? (
              <iframe
                src={googleMapsData.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rudra Enterprises Location"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-600 mb-4">Map embed URL needed</p>
                  <p className="text-sm text-gray-500">
                    To get the embed URL: Open Google Maps → Search for your location → Click Share → Embed a map → Copy the URL
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Location Info & Reviews */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-primary-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-700 leading-relaxed">{address}</p>
                </div>
              </div>
              
              {googleMapsData.shareUrl && (
                <a
                  href={googleMapsData.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">View on Google Maps</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>

            {/* Reviews Section */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 mb-2 font-medium">Excellent Service!</p>
                  <p className="text-gray-600 text-sm">
                    &quot;Rudra Enterprises provided exceptional craftsmanship for our modular kitchen. Highly recommended!&quot;
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 mb-2 font-medium">Professional Team</p>
                  <p className="text-gray-600 text-sm">
                    &quot;Great quality work and timely delivery. The team is very professional and customer-friendly.&quot;
                  </p>
                </div>
              </div>
              {googleMapsData.shareUrl && (
                <a
                  href={googleMapsData.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  <span>Read more reviews on Google</span>
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

