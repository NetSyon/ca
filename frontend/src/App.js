import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Floating particles component
  const FloatingParticles = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Animated Background Grid
  const AnimatedGrid = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-float"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 animate-pulse-slow"></div>
      </div>
    );
  };

  // Cursor follower
  const CursorFollower = () => {
    return (
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          transition: 'all 0.1s ease',
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <FloatingParticles />
      <AnimatedGrid />
      <CursorFollower />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-800/50 nav-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 group">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-glow">
                  NetSys
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 nav-link-futuristic ${
                      activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                        ? 'text-blue-400 bg-blue-400/20 shadow-glow-blue'
                        : 'text-slate-300 hover:text-blue-400 hover:bg-blue-400/10 hover:shadow-glow-blue-sm'
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
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 w-full text-left transition-all duration-300 hover:translate-x-2"
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
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea')] bg-cover bg-center opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-cyan-400/30 rotate-45 animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 border border-blue-400/20 rounded-full animate-spin-reverse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold leading-tight animate-fade-in-up">
              <span className="text-white text-shadow-glow">Expert IT Solutions</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient-x">
                For Every Need
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              From home networks to enterprise infrastructure, NetSys delivers comprehensive IT consulting 
              and cybersecurity solutions tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in-up-delay-2">
              <button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-blue-intense transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/20 hover:shadow-glow-blue-sm transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full p-1">
              <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll-indicator"></div>
            </div>
            <svg className="w-4 h-4 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Comprehensive IT solutions designed for home users, small businesses, and enterprise organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Home Users */}
            <div className="group relative bg-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-700 hover:transform hover:scale-105 service-card-futuristic">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-3xl transition-all duration-700"></div>
              <div className="absolute inset-0 bg-holographic opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow-blue group-hover:shadow-glow-blue-intense transition-all duration-300 animate-float">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">Home Users</h3>
                <p className="text-slate-300 mb-8 group-hover:text-slate-200 transition-colors duration-300 text-lg">
                  Comprehensive technology support and cybersecurity solutions for families and individuals.
                </p>
                <div className="space-y-6 text-slate-300">
                  {[
                    { icon: '📡', title: 'Home Network Security', desc: 'Wi-Fi setup, firewall hardening, parental controls & guest isolation' },
                    { icon: '💻', title: 'Device Protection', desc: 'Antivirus, IoT monitoring & secure setup of smart devices (TVs, cams, etc.)' },
                    { icon: '🧠', title: 'Cyber Awareness', desc: 'Family-focused training on phishing, passwords & online safety' },
                    { icon: '🔐', title: 'Data Privacy & Backup', desc: 'Cloud backup config, encryption, GDPR-friendly storage (NAS)' },
                    { icon: '👥', title: 'User Access Control', desc: 'MFA setup, account recovery & password management' },
                    { icon: '🌍', title: 'Remote Access & VPN', desc: 'Secure browsing & remote desktop setup for travel/work' },
                    { icon: '⚙️', title: 'Tech Optimization', desc: 'Smart home troubleshooting, network tuning, and device upgrades' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start group-hover:text-slate-200 transition-colors duration-300 p-4 bg-slate-800/20 rounded-xl hover:bg-slate-800/40 transition-all duration-300">
                      <span className="text-2xl mr-4 mt-1 animate-pulse-gentle">{service.icon}</span>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">{service.title}</h4>
                        <p className="text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group relative bg-slate-900/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-700 hover:transform hover:scale-105 service-card-futuristic">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-3xl transition-all duration-700"></div>
              <div className="absolute inset-0 bg-holographic opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow-blue group-hover:shadow-glow-blue-intense transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">Enterprise</h3>
                <p className="text-slate-300 mb-8 group-hover:text-slate-200 transition-colors duration-300 text-lg">
                  Advanced cybersecurity and scalable infrastructure solutions for large organizations.
                </p>
                <div className="space-y-6 text-slate-300">
                  {[
                    { icon: '🔐', title: 'Purview Implementation', desc: 'Organization-wide deployment of Microsoft 365 and Endpoint-based Data Loss Prevention (DLP) policies to safeguard sensitive information.' },
                    { icon: '🧩', title: 'Conditional Access (CAP) Rollout', desc: 'Design and implementation of Conditional Access Policies to enforce secure, identity-based access across all environments.' },
                    { icon: '✉️', title: 'Microsoft Defender for Office (MDO) Deployment', desc: 'Enterprise-wide implementation of MDO to enhance email threat protection and strengthen overall security posture.' },
                    { icon: '🏷️', title: 'Information Protection (MIP)', desc: 'Deployment of Microsoft Information Protection for data classification, labeling, and encryption across the organization.' },
                    { icon: '📬', title: 'Email Encryption', desc: 'Design and deployment of a customized email encryption solution, ensuring secure internal and external communications.' },
                    { icon: '🧑‍💼', title: 'Identity and Access Management (IAM)', desc: 'Architecture and rollout of PIM, Azure RBAC, Azure AD permissions, Exchange role configurations, and RBAC compliance.' },
                    { icon: '📲', title: 'Multi-Factor Authentication (MFA)', desc: 'End-to-end deployment using software and hardware tokens (FIDO2) to strengthen identity verification.' },
                    { icon: '☁️', title: 'Microsoft Defender for Cloud Apps (MDCA)', desc: 'Deployment of MDCA policies to monitor and secure cloud app usage, enforce file protection, and manage user sessions.' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start group-hover:text-slate-200 transition-colors duration-300 p-4 bg-slate-800/20 rounded-xl hover:bg-slate-800/40 transition-all duration-300">
                      <span className="text-2xl mr-4 mt-1 animate-pulse-gentle">{service.icon}</span>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">{service.title}</h4>
                        <p className="text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-data-stream opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">NetSys</span>
                </h2>
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
                {[
                  { value: '12+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover:animate-pulse">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c" 
                  alt="Professional IT Consultation" 
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 animate-pulse-slow"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-blue-400/50 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">NetSys?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              We combine deep technical expertise with personalized service to deliver solutions that work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Proven Expertise',
                description: 'Microsoft certified professionals with extensive experience in enterprise security solutions'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Personalized Service',
                description: 'Tailored solutions that fit your specific needs, budget, and timeline'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Rapid Response',
                description: 'Quick turnaround times with 24/7 support for critical issues'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow-blue group-hover:shadow-glow-blue-intense animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Ready to secure and optimize your IT infrastructure? Connect with our expert team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 animate-fade-in-up">
              <div className="group bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-holographic opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Email</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">info@netsys.com</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Phone</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Support</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">24/7 Emergency</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-holographic opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
                  <div>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Monday - Friday</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Saturday</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">9:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 font-medium">Sunday</p>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-binary-rain opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 animate-glow">NetSys</h3>
            <p className="text-slate-300 mb-8 animate-fade-in-up">
              Professional IT consulting and cybersecurity solutions for every need
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-8">
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Security</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400 text-sm animate-fade-in-up">
              © 2025 NetSys IT Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;