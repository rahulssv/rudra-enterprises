export default function HeroSection({ heroData }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 fade-in">
        <div className="mb-6 slide-up">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            ✨ Premium Craftsmanship Since 2014
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="block mb-2">{heroData.title}</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.4s' }}>
          {heroData.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-white/50 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{heroData.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('portfolio');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-primary-200">Scroll</span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

