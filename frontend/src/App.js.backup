import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translations = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        getStarted: 'Get Started'
      },
      hero: {
        title: 'Your Trusted',
        subtitle: 'IT Partner',
        description: 'Empowering homes, businesses, and enterprises with cutting-edge IT solutions. From personal tech support to enterprise-grade infrastructure.',
        exploreServices: 'Explore Services',
        contactUs: 'Contact Us'
      },
      services: {
        title: 'Comprehensive IT Solutions',
        subtitle: 'Tailored technology services for every need - from personal computing to enterprise infrastructure',
        home: {
          title: 'Home Users & Cybersecurity',
          description: 'Comprehensive home IT security and optimization services for modern families',
          items: [
            'Home Network Security & Setup',
            'Smart Device Protection & IoT Security',
            'Family Cyber Awareness Training',
            'Data Privacy & Backup Solutions',
            'Remote Access & VPN Configuration'
          ]
        },
        smb: {
          title: 'Small & Medium Business',
          description: 'Scalable IT solutions and security services designed to protect and grow your business',
          items: [
            'Managed IT Services & Support',
            'Business Email Security & Encryption',
            'Cloud Migration & Management',
            'Multi-Factor Authentication Setup',
            'Business Continuity Planning'
          ]
        },
        enterprise: {
          title: 'Enterprise Security',
          description: 'Advanced security implementations and compliance solutions for large organizations',
          items: [
            'Data Loss Prevention (DLP) Implementation',
            'Conditional Access Policy Design',
            'Identity & Access Management (IAM)',
            'Microsoft Defender Suite Deployment',
            'Information Protection & Classification'
          ]
        },
        learnMore: 'Learn More'
      },
      whyChoose: {
        title: 'Why Choose NetSyon?',
        subtitle: 'Experience the difference of working with a trusted IT partner',
        fastResponse: {
          title: 'Fast Response',
          description: 'Quick response times and efficient problem resolution'
        },
        expertise: {
          title: 'Proven Expertise',
          description: 'Years of experience across all technology platforms'
        },
        costEffective: {
          title: 'Cost Effective',
          description: 'Competitive pricing with transparent service rates'
        }
      },
      about: {
        title: 'About NetSyon',
        description: 'NetSyon is a consulting office specializing in Microsoft Cloud security, data protection, and IT solutions for businesses, SMBs, and advanced home users. With over a decade of experience in IT consulting, NetSyon has been the trusted technology partner for individuals, small businesses, and large enterprises across the region.',
        subtitle: 'In an increasingly digital world, securing data and cloud infrastructure is critical—not only for enterprises, but also for individuals managing connected homes. NetSyon helps clients build secure, reliable, and scalable digital environments by combining strategic expertise with hands-on implementation.',
        expertise: 'We provide tailored consulting services across the Microsoft ecosystem, helping organizations and individuals take full control of their cybersecurity posture, cloud governance, and IT infrastructure.',
        mission: {
          title: 'Mission',
          description: 'To simplify technology and empower our clients with reliable, innovative IT solutions that drive success.'
        },
        vision: {
          title: 'Vision',
          description: 'To be the leading IT consulting firm, known for exceptional service and innovative solutions.'
        }
      },
      contact: {
        title: 'Ready to Get Started?',
        subtitle: 'Contact us today to discover how NetSyon can transform your technology experience',
        getInTouch: 'Get in Touch',
        phone: 'Phone',
        email: 'Email',
        address: 'Address'
      },
      footer: {
        description: 'Your trusted IT partner for comprehensive technology solutions.',
        services: 'Services',
        company: 'Company',
        support: 'Support',
        copyright: '© 2024 NetSyon. All rights reserved.'
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: December 2024',
        sections: {
          introduction: {
            title: 'Introduction',
            content: 'NetSyon is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our IT consulting services.'
          },
          informationWeCollect: {
            title: 'Information We Collect',
            subtitle1: 'Personal Information',
            content1: 'We may collect personal information that you voluntarily provide to us when you contact us for services, including: name, email address, phone number, company name, job title, and project details.',
            subtitle2: 'Automatically Collected Information', 
            content2: 'When you visit our website, we may automatically collect certain information about your device, including: IP address, browser type, operating system, referring URLs, and pages viewed.'
          },
          howWeUse: {
            title: 'How We Use Your Information',
            content: 'We use the collected information to provide and improve our IT consulting services, respond to your inquiries, send you relevant information about our services, maintain the security of our systems, and comply with legal obligations.'
          },
          dataProtection: {
            title: 'Data Protection and Security',
            content: 'As an IT security consulting firm, we implement industry-standard security measures to protect your personal information. We use encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.'
          },
          informationSharing: {
            title: 'Information Sharing',
            content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, to protect our rights and safety, or with trusted service providers who assist us in operating our business.'
          },
          yourRights: {
            title: 'Your Privacy Rights',
            content: 'You have the right to access, update, or delete your personal information. You may opt-out of receiving marketing communications from us. For residents of certain jurisdictions, you may have additional rights under applicable privacy laws.'
          },
          retention: {
            title: 'Data Retention',
            content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.'
          },
          changes: {
            title: 'Changes to This Privacy Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
          },
          contact: {
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:',
            email: 'Email: privacy@netsyon.com',
            phone: 'Phone: +1 (555) 123-4567',
            address: 'Address: 123 Technology Drive, Montreal, QC H3B 2Y5, Canada'
          }
        }
      },
      termsOfUse: {
        title: 'Terms of Use',
        lastUpdated: 'Last Updated: December 2024',
        sections: {
          introduction: {
            title: 'Introduction',
            content: 'Welcome to NetSyon. These Terms of Use govern your use of our website and IT consulting services. By accessing our website or engaging our services, you agree to be bound by these terms.'
          },
          acceptanceOfTerms: {
            title: 'Acceptance of Terms',
            content: 'By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.'
          },
          servicesOffered: {
            title: 'Services Offered',
            content: 'NetSyon provides IT consulting services including but not limited to: Microsoft Cloud security implementation, data protection solutions, cybersecurity consulting, IT infrastructure design, and related technology services for home users, small-medium businesses, and enterprises.'
          },
          userResponsibilities: {
            title: 'User Responsibilities',
            content: 'You agree to provide accurate information when engaging our services, maintain the confidentiality of any login credentials, use our services only for lawful purposes, and comply with all applicable laws and regulations.'
          },
          intellectualProperty: {
            title: 'Intellectual Property',
            content: 'All content on our website, including text, graphics, logos, and software, is the property of NetSyon or our licensors and is protected by copyright and other intellectual property laws. Our consulting methodologies and custom solutions remain our intellectual property.'
          },
          serviceTerms: {
            title: 'Service Terms and Conditions',
            content: 'Consulting services are provided based on specific agreements with each client. Project scope, timelines, and deliverables will be defined in separate service agreements. We reserve the right to modify or discontinue services with appropriate notice.'
          },
          limitationOfLiability: {
            title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by law, NetSyon shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.'
          },
          confidentiality: {
            title: 'Confidentiality',
            content: 'We maintain strict confidentiality regarding client information and projects. Both parties agree to maintain confidentiality of sensitive information shared during the course of our professional relationship.'
          },
          termination: {
            title: 'Termination',
            content: 'Either party may terminate services with appropriate notice as specified in individual service agreements. Upon termination, both parties remain bound by confidentiality obligations and payment terms for services rendered.'
          },
          governingLaw: {
            title: 'Governing Law',
            content: 'These Terms of Use are governed by the laws of the Province of Quebec, Canada. Any disputes arising from these terms or our services shall be resolved in the courts of Quebec, Canada.'
          },
          changesToTerms: {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify these Terms of Use at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the modified terms.'
          },
          contact: {
            title: 'Contact Information',
            content: 'If you have any questions about these Terms of Use, please contact us at:',
            email: 'Email: legal@netsyon.com',
            phone: 'Phone: +1 (555) 123-4567',
            address: 'Address: 123 Technology Drive, Montreal, QC H3B 2Y5, Canada'
          }
        }
      },
      termsOfUse: {
        title: 'Conditions d\'Utilisation',
        lastUpdated: 'Dernière mise à jour : Décembre 2024',
        sections: {
          introduction: {
            title: 'Introduction',
            content: 'Bienvenue chez NetSyon. Ces Conditions d\'Utilisation régissent votre utilisation de notre site web et de nos services de conseil IT. En accédant à notre site web ou en utilisant nos services, vous acceptez d\'être lié par ces conditions.'
          },
          acceptanceOfTerms: {
            title: 'Acceptation des Conditions',
            content: 'En utilisant notre site web ou nos services, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions d\'Utilisation et notre Politique de Confidentialité. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.'
          },
          servicesOffered: {
            title: 'Services Offerts',
            content: 'NetSyon fournit des services de conseil IT incluant mais sans s\'y limiter : implémentation de sécurité Microsoft Cloud, solutions de protection des données, conseil en cybersécurité, conception d\'infrastructure IT, et services technologiques connexes pour utilisateurs domestiques, petites-moyennes entreprises, et entreprises.'
          },
          userResponsibilities: {
            title: 'Responsabilités de l\'Utilisateur',
            content: 'Vous acceptez de fournir des informations exactes lors de l\'utilisation de nos services, de maintenir la confidentialité de tous identifiants de connexion, d\'utiliser nos services uniquement à des fins légales, et de respecter toutes les lois et réglementations applicables.'
          },
          intellectualProperty: {
            title: 'Propriété Intellectuelle',
            content: 'Tout le contenu de notre site web, y compris le texte, les graphiques, les logos et les logiciels, est la propriété de NetSyon ou de nos concédants de licence et est protégé par le droit d\'auteur et autres lois sur la propriété intellectuelle. Nos méthodologies de conseil et solutions personnalisées restent notre propriété intellectuelle.'
          },
          serviceTerms: {
            title: 'Conditions de Service',
            content: 'Les services de conseil sont fournis sur la base d\'accords spécifiques avec chaque client. La portée du projet, les délais et les livrables seront définis dans des accords de service séparés. Nous nous réservons le droit de modifier ou d\'interrompre les services avec un préavis approprié.'
          },
          limitationOfLiability: {
            title: 'Limitation de Responsabilité',
            content: 'Dans la mesure maximale permise par la loi, NetSyon ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l\'utilisation de nos services. Notre responsabilité totale ne dépassera pas le montant payé pour le service spécifique en question.'
          },
          confidentiality: {
            title: 'Confidentialité',
            content: 'Nous maintenons une confidentialité stricte concernant les informations et projets clients. Les deux parties acceptent de maintenir la confidentialité des informations sensibles partagées au cours de notre relation professionnelle.'
          },
          termination: {
            title: 'Résiliation',
            content: 'Chaque partie peut résilier les services avec un préavis approprié tel que spécifié dans les accords de service individuels. Lors de la résiliation, les deux parties restent liées par les obligations de confidentialité et les conditions de paiement pour les services rendus.'
          },
          governingLaw: {
            title: 'Loi Applicable',
            content: 'Ces Conditions d\'Utilisation sont régies par les lois de la Province de Québec, Canada. Tout litige découlant de ces conditions ou de nos services sera résolu devant les tribunaux du Québec, Canada.'
          },
          changesToTerms: {
            title: 'Modifications des Conditions',
            content: 'Nous nous réservons le droit de modifier ces Conditions d\'Utilisation à tout moment. Les modifications seront publiées sur notre site web avec une date d\'entrée en vigueur mise à jour. L\'utilisation continue de nos services après les modifications constitue l\'acceptation des conditions modifiées.'
          },
          contact: {
            title: 'Informations de Contact',
            content: 'Si vous avez des questions sur ces Conditions d\'Utilisation, veuillez nous contacter à :',
            email: 'E-mail : legal@netsyon.com',
            phone: 'Téléphone : +1 (555) 123-4567',
            address: 'Adresse : 123 Technology Drive, Montréal, QC H3B 2Y5, Canada'
          }
        }
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        about: 'À propos',
        contact: 'Contact',
        getStarted: 'Commencer'
      },
      hero: {
        title: 'Votre Partenaire',
        subtitle: 'IT de Confiance',
        description: 'Autonomiser les foyers, les entreprises et les grandes organisations avec des solutions IT de pointe. Du support technique personnel à l\'infrastructure de niveau entreprise.',
        exploreServices: 'Explorer les Services',
        contactUs: 'Nous Contacter'
      },
      services: {
        title: 'Solutions IT Complètes',
        subtitle: 'Services technologiques adaptés à chaque besoin - de l\'informatique personnelle à l\'infrastructure d\'entreprise',
        home: {
          title: 'Utilisateurs Domestiques & Cybersécurité',
          description: 'Services complets de sécurité et d\'optimisation IT domestique pour les familles modernes',
          items: [
            'Sécurité et Configuration du Réseau Domestique',
            'Protection des Appareils Intelligents & Sécurité IoT',
            'Formation de Sensibilisation Cyber Familiale',
            'Solutions de Confidentialité et Sauvegarde de Données',
            'Configuration d\'Accès Distant & VPN'
          ]
        },
        smb: {
          title: 'Petites et Moyennes Entreprises',
          description: 'Solutions IT évolutives et services de sécurité conçus pour protéger et développer votre entreprise',
          items: [
            'Services IT Gérés & Support',
            'Sécurité et Chiffrement des E-mails Professionnels',
            'Migration et Gestion Cloud',
            'Configuration d\'Authentification Multi-Facteurs',
            'Planification de Continuité d\'Activité'
          ]
        },
        enterprise: {
          title: 'Sécurité Entreprise',
          description: 'Implémentations de sécurité avancées et solutions de conformité pour les grandes organisations',
          items: [
            'Implémentation de Prévention des Pertes de Données (DLP)',
            'Conception de Politiques d\'Accès Conditionnel',
            'Gestion des Identités et Accès (IAM)',
            'Déploiement de la Suite Microsoft Defender',
            'Protection et Classification des Informations'
          ]
        },
        learnMore: 'En Savoir Plus'
      },
      whyChoose: {
        title: 'Pourquoi Choisir NetSyon?',
        subtitle: 'Découvrez la différence de travailler avec un partenaire IT de confiance',
        fastResponse: {
          title: 'Réponse Rapide',
          description: 'Temps de réponse rapides et résolution efficace des problèmes'
        },
        expertise: {
          title: 'Expertise Prouvée',
          description: 'Des années d\'expérience sur toutes les plateformes technologiques'
        },
        costEffective: {
          title: 'Rentable',
          description: 'Prix compétitifs avec des tarifs de service transparents'
        }
      },
      about: {
        title: 'À Propos de NetSyon',
        description: 'NetSyon est un bureau de conseil spécialisé dans la sécurité Microsoft Cloud, la protection des données et les solutions IT pour les entreprises, PME et utilisateurs domestiques avancés. Avec plus d\'une décennie d\'expérience dans le conseil IT, NetSyon a été le partenaire technologique de confiance pour les particuliers, les petites entreprises et les grandes entreprises de la région.',
        subtitle: 'Dans un monde de plus en plus numérique, sécuriser les données et l\'infrastructure cloud est essentiel—non seulement pour les entreprises, mais aussi pour les particuliers gérant des maisons connectées. NetSyon aide les clients à construire des environnements numériques sécurisés, fiables et évolutifs en combinant expertise stratégique et mise en œuvre pratique.',
        expertise: 'Nous fournissons des services de conseil sur mesure à travers l\'écosystème Microsoft, aidant les organisations et les particuliers à prendre le contrôle total de leur posture de cybersécurité, gouvernance cloud et infrastructure IT.',
        mission: {
          title: 'Mission',
          description: 'Simplifier la technologie et autonomiser nos clients avec des solutions IT fiables et innovantes qui favorisent le succès.'
        },
        vision: {
          title: 'Vision',
          description: 'Être la société de conseil IT leader, reconnue pour un service exceptionnel et des solutions innovantes.'
        }
      },
      contact: {
        title: 'Prêt à Commencer?',
        subtitle: 'Contactez-nous aujourd\'hui pour découvrir comment NetSyon peut transformer votre expérience technologique',
        getInTouch: 'Nous Contacter',
        phone: 'Téléphone',
        email: 'E-mail',
        address: 'Adresse'
      },
      footer: {
        description: 'Votre partenaire IT de confiance pour des solutions technologiques complètes.',
        services: 'Services',
        company: 'Entreprise',
        support: 'Support',
        copyright: '© 2024 NetSyon. Tous droits réservés.'
      },
      privacyPolicy: {
        title: 'Politique de Confidentialité',
        lastUpdated: 'Dernière mise à jour : Décembre 2024',
        sections: {
          introduction: {
            title: 'Introduction',
            content: 'NetSyon s\'engage à protéger votre vie privée et à assurer la sécurité de vos informations personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services de conseil IT.'
          },
          informationWeCollect: {
            title: 'Informations que Nous Collectons',
            subtitle1: 'Informations Personnelles',
            content1: 'Nous pouvons collecter des informations personnelles que vous nous fournissez volontairement lorsque vous nous contactez pour des services, notamment : nom, adresse e-mail, numéro de téléphone, nom de l\'entreprise, titre du poste et détails du projet.',
            subtitle2: 'Informations Collectées Automatiquement',
            content2: 'Lorsque vous visitez notre site web, nous pouvons automatiquement collecter certaines informations sur votre appareil, notamment : adresse IP, type de navigateur, système d\'exploitation, URLs de référence et pages consultées.'
          },
          howWeUse: {
            title: 'Comment Nous Utilisons Vos Informations',
            content: 'Nous utilisons les informations collectées pour fournir et améliorer nos services de conseil IT, répondre à vos demandes, vous envoyer des informations pertinentes sur nos services, maintenir la sécurité de nos systèmes et respecter les obligations légales.'
          },
          dataProtection: {
            title: 'Protection et Sécurité des Données',
            content: 'En tant qu\'entreprise de conseil en sécurité IT, nous mettons en œuvre des mesures de sécurité standard de l\'industrie pour protéger vos informations personnelles. Nous utilisons le chiffrement, des serveurs sécurisés, des contrôles d\'accès et des audits de sécurité réguliers. Cependant, aucune méthode de transmission sur internet n\'est sécurisée à 100%.'
          },
          informationSharing: {
            title: 'Partage d\'Informations',
            content: 'Nous ne vendons, n\'échangeons ou ne louons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les circonstances suivantes : avec votre consentement, pour nous conformer aux obligations légales, pour protéger nos droits et notre sécurité, ou avec des prestataires de services de confiance qui nous aident à exploiter notre entreprise.'
          },
          yourRights: {
            title: 'Vos Droits de Confidentialité',
            content: 'Vous avez le droit d\'accéder, de mettre à jour ou de supprimer vos informations personnelles. Vous pouvez vous désabonner de nos communications marketing. Pour les résidents de certaines juridictions, vous pouvez avoir des droits supplémentaires sous les lois de confidentialité applicables.'
          },
          retention: {
            title: 'Conservation des Données',
            content: 'Nous conservons vos informations personnelles seulement aussi longtemps que nécessaire pour accomplir les fins pour lesquelles elles ont été collectées, respecter les obligations légales, résoudre les disputes et faire respecter nos accords.'
          },
          changes: {
            title: 'Modifications de Cette Politique de Confidentialité',
            content: 'Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page et en mettant à jour la date de "Dernière mise à jour".'
          },
          contact: {
            title: 'Nous Contacter',
            content: 'Si vous avez des questions sur cette Politique de Confidentialité ou nos pratiques de confidentialité, veuillez nous contacter à :',
            email: 'E-mail : privacy@netsyon.com',
            phone: 'Téléphone : +1 (555) 123-4567',
            address: 'Adresse : 123 Technology Drive, Montréal, QC H3B 2Y5, Canada'
          }
        }
      }
    }
  };

  const t = translations[language];

  const PrivacyPolicyModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-slate-800">{t.privacyPolicy.title}</h2>
          <button 
            onClick={() => setShowPrivacyPolicy(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <p className="text-sm text-slate-500">{t.privacyPolicy.lastUpdated}</p>
          
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.introduction.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.introduction.content}</p>
          </section>

          {/* Information We Collect */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.informationWeCollect.title}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-slate-700 mb-2">{t.privacyPolicy.sections.informationWeCollect.subtitle1}</h4>
                <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.informationWeCollect.content1}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-700 mb-2">{t.privacyPolicy.sections.informationWeCollect.subtitle2}</h4>
                <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.informationWeCollect.content2}</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.howWeUse.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.howWeUse.content}</p>
          </section>

          {/* Data Protection */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.dataProtection.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.dataProtection.content}</p>
          </section>

          {/* Information Sharing */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.informationSharing.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.informationSharing.content}</p>
          </section>

          {/* Your Rights */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.yourRights.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.yourRights.content}</p>
          </section>

          {/* Data Retention */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.retention.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.retention.content}</p>
          </section>

          {/* Changes */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.changes.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.privacyPolicy.sections.changes.content}</p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.privacyPolicy.sections.contact.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-4">{t.privacyPolicy.sections.contact.content}</p>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
              <p className="text-slate-700 font-medium">{t.privacyPolicy.sections.contact.email}</p>
              <p className="text-slate-700 font-medium">{t.privacyPolicy.sections.contact.phone}</p>
              <p className="text-slate-700 font-medium">{t.privacyPolicy.sections.contact.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const TermsOfUseModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-slate-800">{t.termsOfUse.title}</h2>
          <button 
            onClick={() => setShowTermsOfUse(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <p className="text-sm text-slate-500">{t.termsOfUse.lastUpdated}</p>
          
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.introduction.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.introduction.content}</p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.acceptanceOfTerms.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.acceptanceOfTerms.content}</p>
          </section>

          {/* Services Offered */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.servicesOffered.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.servicesOffered.content}</p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.userResponsibilities.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.userResponsibilities.content}</p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.intellectualProperty.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.intellectualProperty.content}</p>
          </section>

          {/* Service Terms */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.serviceTerms.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.serviceTerms.content}</p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.limitationOfLiability.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.limitationOfLiability.content}</p>
          </section>

          {/* Confidentiality */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.confidentiality.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.confidentiality.content}</p>
          </section>

          {/* Termination */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.termination.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.termination.content}</p>
          </section>

          {/* Governing Law */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.governingLaw.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.governingLaw.content}</p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.changesToTerms.title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.termsOfUse.sections.changesToTerms.content}</p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.termsOfUse.sections.contact.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-4">{t.termsOfUse.sections.contact.content}</p>
            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
              <p className="text-slate-700 font-medium">{t.termsOfUse.sections.contact.email}</p>
              <p className="text-slate-700 font-medium">{t.termsOfUse.sections.contact.phone}</p>
              <p className="text-slate-700 font-medium">{t.termsOfUse.sections.contact.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {showPrivacyPolicy && <PrivacyPolicyModal />}
      {showTermsOfUse && <TermsOfUseModal />}
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/logo-netsyon.png" 
                  alt="NetSyon Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className={`${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors font-medium`}>{t.nav.home}</button>
                <button onClick={() => scrollToSection('services')} className={`${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors font-medium`}>{t.nav.services}</button>
                <button onClick={() => scrollToSection('about')} className={`${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors font-medium`}>{t.nav.about}</button>
                <button onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors font-medium`}>{t.nav.contact}</button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors font-medium`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{language === 'en' ? 'FR' : 'EN'}</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
            <span className="block text-blue-400">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t.hero.exploreServices}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all"
            >
              {t.contact.getInTouch}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Home Users */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.home.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.home.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.home.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>

            {/* SMB */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.smb.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.smb.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.smb.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>

            {/* Enterprise */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.services.enterprise.title}</h3>
              <p className="text-slate-600 mb-6">{t.services.enterprise.description}</p>
              <ul className="text-slate-600 space-y-2 mb-8">
                {t.services.enterprise.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {t.services.learnMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NetSys */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {t.whyChoose.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-blue-50">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.whyChoose.fastResponse.title}</h3>
                <p className="text-slate-600">{t.whyChoose.fastResponse.description}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-green-50">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.whyChoose.expertise.title}</h3>
                <p className="text-slate-600">{t.whyChoose.expertise.description}</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-purple-50">
                <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.whyChoose.costEffective.title}</h3>
                <p className="text-slate-600">{t.whyChoose.costEffective.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                {t.about.title}
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {t.about.subtitle}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                {t.about.expertise}
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{t.about.mission.title}</h3>
                    <p className="text-slate-600">{t.about.mission.description}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{t.about.vision.title}</h3>
                    <p className="text-slate-600">{t.about.vision.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" 
                  alt="NetSyon Team"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">{t.contact.getInTouch}</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold">{t.contact.phone}</h4>
                      <p className="text-blue-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold">{t.contact.email}</h4>
                      <p className="text-blue-200">info@netsyon.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold">{t.contact.address}</h4>
                      <p className="text-blue-200">123 Technology Drive<br />Montreal, QC H3B 2Y5, Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/logo-netsyon.png" 
                alt="NetSyon Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-slate-400 mb-4">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Home IT Support' : 'Support IT Domestique'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Business Solutions' : 'Solutions Entreprise'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Enterprise Infrastructure' : 'Infrastructure Entreprise'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Cloud Services' : 'Services Cloud'}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'About Us' : 'À Propos'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Our Team' : 'Notre Équipe'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Careers' : 'Carrières'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Help Center' : 'Centre d\'Aide'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Documentation' : 'Documentation'}</a></li>
                <li><button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-white transition-colors text-left">{language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}</button></li>
                <li><button onClick={() => setShowTermsOfUse(true)} className="hover:text-white transition-colors text-left">{language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;