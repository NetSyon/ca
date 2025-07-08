import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-400">NetSys</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-slate-300 hover:text-blue-400 hover:bg-blue-400/5'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-700 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Expert IT Solutions</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                For Every Need
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From home networks to enterprise infrastructure, NetSys delivers comprehensive IT consulting 
              and cybersecurity solutions tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed for home users, small businesses, and enterprise organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Home Users */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Home Users</h3>
                <p className="text-slate-300 mb-6">
                  Personal technology support and cybersecurity solutions for families and individuals.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Home network setup & security
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Smart device protection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Data backup & recovery
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cyber awareness training
                  </li>
                </ul>
              </div>
            </div>

            {/* Small & Medium Business */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Small & Medium Business</h3>
                <p className="text-slate-300 mb-6">
                  Scalable IT infrastructure and managed services to grow your business efficiently.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Managed IT services
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Business continuity planning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Network security solutions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 technical support
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <p className="text-slate-300 mb-6">
                  Advanced cybersecurity and scalable infrastructure solutions for large organizations.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enterprise security architecture
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Compliance & risk management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cloud infrastructure design
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Strategic IT consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About NetSys</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  With over a decade of experience in IT consulting and cybersecurity, NetSys delivers 
                  comprehensive technology solutions that protect, optimize, and scale your digital infrastructure.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We understand that every client has unique needs. Whether you're a family looking to secure 
                  your home network, a growing business requiring reliable IT support, or an enterprise needing 
                  advanced cybersecurity solutions, we tailor our approach to deliver maximum value.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-slate-300">Projects Completed</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-slate-300">Support Available</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-slate-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c" 
                  alt="Professional IT Consultation" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose NetSys?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine deep technical expertise with personalized service to deliver solutions that work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-slate-300">
                Microsoft certified professionals with extensive experience in enterprise security solutions
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Service</h3>
              <p className="text-slate-300">
                Tailored solutions that fit your specific needs, budget, and timeline
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Response</h3>
              <p className="text-slate-300">
                Quick turnaround times with 24/7 support for critical issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to secure and optimize your IT infrastructure? Let's discuss your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-slate-300">info@netsys.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-slate-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-300">24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Request Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="home">Home User Support</option>
                    <option value="smb">Small & Medium Business</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Tell us about your IT needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">NetSys</h3>
            <p className="text-slate-300 mb-8">
              Professional IT consulting and cybersecurity solutions for every need
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400 text-sm">
              © 2025 NetSys IT Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;