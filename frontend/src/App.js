import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [time, setTime] = useState(new Date());
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

    const timer = setInterval(() => setTime(new Date()), 1000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Floating tech particles
  const TechParticles = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <TechParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  NetSys
                </h1>
              </div>
            </div>
            
            {/* Clock and Status */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-mono">
                  {time.toLocaleTimeString()}
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-green-400 text-xs">SECURE</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                        ? 'text-blue-400 bg-blue-400/10 border border-blue-400/30'
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
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
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
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
              <div className="flex items-center justify-center space-x-3 px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-mono text-sm">
                  {time.toLocaleTimeString()}
                </span>
                <span className="text-green-400 text-xs">SECURE</span>
              </div>
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 w-full text-left transition-all duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea')] bg-cover bg-center opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 tech-grid-subtle opacity-30"></div>
        
        {/* Status indicators */}
        <div className="absolute top-24 right-8 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Security Active</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>Services Ready</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="smart-container">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Expert IT Solutions</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-slow">
                  For Every Need
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                From home networks to enterprise infrastructure, NetSys delivers comprehensive IT consulting 
                and cybersecurity solutions tailored to your unique requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 smart-button"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Our Services
                </span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 hover:border-blue-300 transition-all duration-300 smart-button"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full p-1">
              <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll-indicator"></div>
            </div>
            <span className="text-xs text-slate-400">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/30 relative">
        <div className="absolute inset-0 circuit-pattern-subtle opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="smart-container">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed for home users and enterprise organizations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Home Users */}
            <div className="group smart-card">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Home Users</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Residential Solutions</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Comprehensive technology support and cybersecurity solutions for families and individuals.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: '📡', title: 'Home Network Security', desc: 'Wi-Fi setup, firewall hardening, parental controls & guest isolation' },
                    { icon: '💻', title: 'Device Protection', desc: 'Antivirus, IoT monitoring & secure setup of smart devices (TVs, cams, etc.)' },
                    { icon: '🧠', title: 'Cyber Awareness', desc: 'Family-focused training on phishing, passwords & online safety' },
                    { icon: '🔐', title: 'Data Privacy & Backup', desc: 'Cloud backup config, encryption, GDPR-friendly storage (NAS)' },
                    { icon: '👥', title: 'User Access Control', desc: 'MFA setup, account recovery & password management' },
                    { icon: '🌍', title: 'Remote Access & VPN', desc: 'Secure browsing & remote desktop setup for travel/work' },
                    { icon: '⚙️', title: 'Tech Optimization', desc: 'Smart home troubleshooting, network tuning, and device upgrades' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 service-item">
                      <span className="text-xl mr-4 mt-1">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-400 mb-2">{service.title}</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group smart-card">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">Enterprise</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Corporate Solutions</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Advanced cybersecurity and scalable infrastructure solutions for large organizations.
                </p>
                
                <div className="space-y-4">
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
                    <div key={index} className="flex items-start p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 service-item">
                      <span className="text-xl mr-4 mt-1">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-orange-400 mb-2">{service.title}</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{service.desc}</p>
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
      <section id="about" className="py-20 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 data-pattern-subtle opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="smart-container">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">NetSys</span>
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
                  { value: '12+', label: 'Years Experience', color: 'blue' },
                  { value: '500+', label: 'Projects Completed', color: 'cyan' },
                  { value: '24/7', label: 'Support Available', color: 'green' },
                  { value: '100%', label: 'Client Satisfaction', color: 'orange' }
                ].map((stat, index) => (
                  <div key={index} className="group smart-stat-card">
                    <div className="relative z-10 p-6 text-center">
                      <div className={`text-3xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="smart-image-frame group">
                <img 
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c" 
                  alt="Professional IT Consultation" 
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-blue-400/30 rounded animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-cyan-400/30 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern-subtle opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="smart-container">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">NetSys?</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We combine deep technical expertise with personalized service to deliver solutions that work
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Proven Expertise',
                description: 'Microsoft certified professionals with extensive experience in enterprise security solutions',
                color: 'blue'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Personalized Service',
                description: 'Tailored solutions that fit your specific needs, budget, and timeline',
                color: 'cyan'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Rapid Response',
                description: 'Quick turnaround times with 24/7 support for critical issues',
                color: 'green'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="smart-feature-card">
                  <div className="relative z-10 p-8">
                    <div className={`w-16 h-16 bg-${feature.color}-400/10 border border-${feature.color}-400/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-${feature.color}-400/20 transition-all duration-300`}>
                      <svg className={`w-8 h-8 text-${feature.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon}
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold text-white mb-4 group-hover:text-${feature.color}-400 transition-colors duration-300`}>{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 connection-pattern-subtle opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="smart-container">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ready to secure and optimize your IT infrastructure? Connect with our expert team.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="group smart-card">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-blue-400/10 border border-blue-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">Email</p>
                      <p className="text-blue-400 text-sm">info@netsys.com</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">Phone</p>
                      <p className="text-cyan-400 text-sm">+1 (555) 123-4567</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-green-400/10 border border-green-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">Support</p>
                      <p className="text-green-400 text-sm">24/7 Emergency</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group smart-card">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Monday - Friday</p>
                      <p className="text-orange-400 text-sm">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Saturday</p>
                      <p className="text-orange-400 text-sm">9:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium mb-1">Sunday</p>
                      <p className="text-orange-400 text-sm">Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700/50 py-12 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-subtle opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">NetSys</h3>
            <p className="text-slate-300 mb-8">
              Professional IT consulting and cybersecurity solutions for every need
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-8">
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Security</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700/50 text-slate-400 text-sm">
              © 2025 NetSys IT Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;