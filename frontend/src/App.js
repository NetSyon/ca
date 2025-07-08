import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(new Date());

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

    const timer = setInterval(() => setTime(new Date()), 1000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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

  // Matrix rain effect
  const MatrixRain = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 matrix-rain">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs font-mono opacity-20 animate-matrix-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
    );
  };

  // Scanning lines effect
  const ScanningLines = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-scan-lines opacity-10 animate-scan"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan-line"></div>
      </div>
    );
  };

  // Terminal cursor
  const TerminalCursor = () => {
    return (
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePos.x - 2,
          top: mousePos.y - 2,
          transition: 'all 0.1s ease',
        }}
      >
        <div className="w-4 h-4 border border-green-400 bg-green-400/20 animate-pulse"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      <ScanningLines />
      <TerminalCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 group">
                <div className="relative">
                  <h1 className="text-2xl font-bold text-green-400 glitch" data-text="NetSys">
                    NetSys
                  </h1>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="text-xs text-green-400/70">
                {time.toLocaleTimeString()} | SECURE_MODE: ON
              </div>
              <div className="flex items-baseline space-x-6">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 terminal-link ${
                      activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                        ? 'text-green-400 bg-green-400/10 border border-green-400/50'
                        : 'text-green-400/70 hover:text-green-400 hover:bg-green-400/5'
                    }`}
                  >
                    [{item.toUpperCase()}]
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-green-400 hover:text-green-300 hover:bg-green-400/10 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300"
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
          <div className="md:hidden animate-terminal-open">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-green-400/30">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-green-400/70 hover:text-green-400 hover:bg-green-400/10 w-full text-left transition-all duration-300"
                >
                  > {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Alert indicators */}
        <div className="absolute top-20 right-20 flex space-x-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-400/70 ml-4">root@netsys:~$</span>
                </div>
              </div>
              <div className="terminal-content">
                <h1 className="text-4xl md:text-7xl font-bold leading-tight typing-animation">
                  <span className="text-green-400">Expert IT Solutions</span>
                  <br />
                  <span className="text-orange-400">For Every Need</span>
                </h1>
                <p className="text-lg md:text-xl text-green-300/80 max-w-4xl mx-auto leading-relaxed mt-6 terminal-text">
                  From home networks to enterprise infrastructure, NetSys delivers comprehensive IT consulting 
                  and cybersecurity solutions tailored to your unique requirements.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-green-400/10 border border-green-400 text-green-400 font-semibold hover:bg-green-400/20 hover:border-green-300 transition-all duration-300 cyber-button"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">{'>'}</span>
                  VIEW_SERVICES.EXE
                </span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="group px-8 py-4 bg-orange-400/10 border border-orange-400 text-orange-400 font-semibold hover:bg-orange-400/20 hover:border-orange-300 transition-all duration-300 cyber-button"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">{'>'}</span>
                  LEARN_MORE.EXE
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* System status indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4 text-green-400/70 text-sm">
            <span>SYSTEM STATUS:</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>OPERATIONAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="terminal-window inline-block">
              <div className="terminal-header">
                <span className="text-xs text-green-400/70">services.exe --list</span>
              </div>
              <div className="terminal-content">
                <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 glitch" data-text="Our Services">
                  Our Services
                </h2>
                <p className="text-xl text-green-300/80 max-w-3xl mx-auto">
                  Comprehensive IT solutions designed for home users and enterprise organizations
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Home Users */}
            <div className="group relative cyber-card">
              <div className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/60 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 animate-scan-line"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-400/10 border border-green-400/50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-400 mb-2">Home Users</h3>
                    <div className="text-xs text-green-400/70">TYPE: RESIDENTIAL | STATUS: ACTIVE</div>
                  </div>
                </div>
                
                <p className="text-green-300/80 mb-8 text-lg">
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
                    <div key={index} className="flex items-start p-3 bg-green-400/5 border-l-2 border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-300">
                      <span className="text-lg mr-3 mt-1">{service.icon}</span>
                      <div>
                        <h4 className="font-semibold text-green-400 mb-1">{service.title}</h4>
                        <p className="text-sm text-green-300/70 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group relative cyber-card">
              <div className="absolute inset-0 border border-orange-400/30 group-hover:border-orange-400/60 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 animate-scan-line" style={{animationDelay: '1s'}}></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-400/10 border border-orange-400/50 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-orange-400 mb-2">Enterprise</h3>
                    <div className="text-xs text-orange-400/70">TYPE: CORPORATE | STATUS: ACTIVE</div>
                  </div>
                </div>
                
                <p className="text-orange-300/80 mb-8 text-lg">
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
                    <div key={index} className="flex items-start p-3 bg-orange-400/5 border-l-2 border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-400/10 transition-all duration-300">
                      <span className="text-lg mr-3 mt-1">{service.icon}</span>
                      <div>
                        <h4 className="font-semibold text-orange-400 mb-1">{service.title}</h4>
                        <p className="text-sm text-orange-300/70 leading-relaxed">{service.desc}</p>
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
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 data-flow opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="text-xs text-green-400/70">about.exe --info</span>
                </div>
                <div className="terminal-content">
                  <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 glitch" data-text="About NetSys">
                    About NetSys
                  </h2>
                  <p className="text-xl text-green-300/80 leading-relaxed mb-6">
                    With over a decade of experience in IT consulting and cybersecurity, NetSys delivers 
                    comprehensive technology solutions that protect, optimize, and scale your digital infrastructure.
                  </p>
                  <p className="text-lg text-green-300/80 leading-relaxed">
                    We understand that every client has unique needs. Whether you're a family looking to secure 
                    your home network, a growing business requiring reliable IT support, or an enterprise needing 
                    advanced cybersecurity solutions, we tailor our approach to deliver maximum value.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: '12+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="cyber-stat-card">
                    <div className="relative z-10 p-4">
                      <div className="text-3xl font-bold text-green-400 mb-2 glitch-number" data-text={stat.value}>
                        {stat.value}
                      </div>
                      <div className="text-green-300/70 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="cyber-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1565688527174-775059ac429c" 
                  alt="Professional IT Consultation" 
                  className="w-full h-96 object-cover filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-green-400/50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-orange-400/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="terminal-window inline-block">
              <div className="terminal-header">
                <span className="text-xs text-green-400/70">advantages.exe --display</span>
              </div>
              <div className="terminal-content">
                <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 glitch" data-text="Why Choose NetSys?">
                  Why Choose NetSys?
                </h2>
                <p className="text-xl text-green-300/80 max-w-3xl mx-auto">
                  We combine deep technical expertise with personalized service to deliver solutions that work
                </p>
              </div>
            </div>
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
              <div key={index} className="text-center group">
                <div className="cyber-feature-card">
                  <div className="relative z-10 p-6">
                    <div className="w-16 h-16 bg-green-400/10 border border-green-400/50 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-400/20 transition-all duration-300">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {feature.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">{feature.title}</h3>
                    <p className="text-green-300/70 leading-relaxed">
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
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 connection-nodes opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="terminal-window inline-block">
              <div className="terminal-header">
                <span className="text-xs text-green-400/70">contact.exe --connect</span>
              </div>
              <div className="terminal-content">
                <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 glitch" data-text="Get In Touch">
                  Get In Touch
                </h2>
                <p className="text-xl text-green-300/80 max-w-3xl mx-auto">
                  Ready to secure and optimize your IT infrastructure? Connect with our expert team.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="group cyber-card">
                <div className="absolute inset-0 border border-green-400/30 group-hover:border-green-400/60 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 animate-scan-line"></div>
                
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-400/10 border border-green-400/50 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-green-300/80 font-medium">Email</p>
                      <p className="text-green-400/70">info@netsys.com</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-400/10 border border-green-400/50 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-green-300/80 font-medium">Phone</p>
                      <p className="text-green-400/70">+1 (555) 123-4567</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-400/10 border border-green-400/50 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-green-300/80 font-medium">Support</p>
                      <p className="text-green-400/70">24/7 Emergency</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group cyber-card">
                <div className="absolute inset-0 border border-orange-400/30 group-hover:border-orange-400/60 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 animate-scan-line" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-orange-300/80 font-medium">Monday - Friday</p>
                      <p className="text-orange-400/70">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-orange-300/80 font-medium">Saturday</p>
                      <p className="text-orange-400/70">9:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="text-orange-300/80 font-medium">Sunday</p>
                      <p className="text-orange-400/70">Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-green-400/30 py-12 relative overflow-hidden">
        <div className="absolute inset-0 matrix-background opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4 glitch" data-text="NetSys">NetSys</h3>
            <p className="text-green-300/80 mb-8">
              Professional IT consulting and cybersecurity solutions for every need
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-green-400/70 hover:text-green-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-green-400/70 hover:text-green-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-green-400/70 mb-8">
              <a href="#" className="hover:text-green-400 transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-all duration-300">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-all duration-300">Security</a>
              <a href="#" className="hover:text-green-400 transition-all duration-300">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-green-400/30 text-green-400/70 text-sm">
              © 2025 NetSys IT Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;