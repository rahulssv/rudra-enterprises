import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function PortfolioGallery({ portfolio }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Get basePath from __NEXT_DATA__ synchronously (available in browser)
  const getBasePath = () => {
    if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
      return window.__NEXT_DATA__.assetPrefix || '';
    }
    return '';
  };

  const getImageUrl = (url) => {
    const basePath = getBasePath();
    // If URL already starts with basePath, return as is
    if (basePath && url.startsWith(basePath)) {
      return url;
    }
    // If URL starts with /, prepend basePath
    if (url.startsWith('/')) {
      return basePath + url;
    }
    return url;
  };

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="portfolio" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 gradient-text">
              Our Portfolio
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our finest work and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                onClick={() => openLightbox(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={getImageUrl(item.imageUrl)}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(item.caption);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{item.caption}</p>
                  <p className="text-white/80 text-sm mt-1">Click to view</p>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-900 font-semibold text-lg group-hover:text-primary-600 transition-colors duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImageUrl(selectedImage.imageUrl)}
              alt={selectedImage.caption}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=' + encodeURIComponent(selectedImage.caption);
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <p className="text-center font-medium text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

