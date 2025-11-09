import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

export default function Contact({ contactData }) {
  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, '');
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reach out to us for a free quote!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 gradient-text">Contact Information</h3>
              
              {/* Primary Contact */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{contactData.primaryName}</h4>
                <div className="space-y-2">
                  {contactData.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${formatPhoneNumber(phone)}`}
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <FaPhone className="mr-3 text-primary-600" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Secondary Contact */}
              {contactData.secondaryName && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{contactData.secondaryName}</h4>
                  <div className="space-y-2">
                    {contactData.secondaryPhones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${formatPhoneNumber(phone)}`}
                        className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <FaPhone className="mr-3 text-primary-600" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="mb-6">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FaEnvelope className="mr-3 text-primary-600" />
                  <span>{contactData.email}</span>
                </a>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start text-gray-700">
                  <FaMapMarkerAlt className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                  <span>{contactData.address}</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${formatPhoneNumber(contactData.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary w-full justify-center mt-4 bg-green-600 hover:bg-green-700"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Links & Additional Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 gradient-text">Follow Us</h3>
              
              <div className="space-y-4 mb-8">
                {contactData.social.instagram && (
                  <a
                    href={contactData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center">
                      <FaInstagram className="text-2xl mr-3" />
                      <span className="font-medium">Instagram</span>
                    </div>
                    <HiExternalLink />
                  </a>
                )}

                {contactData.social.facebook && (
                  <a
                    href={contactData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center">
                      <FaFacebook className="text-2xl mr-3" />
                      <span className="font-medium">Facebook</span>
                    </div>
                    <HiExternalLink />
                  </a>
                )}

                {contactData.social.justdial && (
                  <a
                    href={contactData.social.justdial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-yellow-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center">
                      <span className="font-medium">Justdial</span>
                    </div>
                    <HiExternalLink />
                  </a>
                )}
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Years of experience in the industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Quality craftsmanship guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Timely project completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

