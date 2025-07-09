import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [time, setTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

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

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = (key) => {
    const translations = {
      en: {
        // Navigation
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        secure: 'SECURE',
        
        // Hero Section
        heroTitle1: 'Expert IT Solutions',
        heroTitle2: 'For Every Need',
        heroDescription: 'From home networks to enterprise infrastructure, NetSyon delivers comprehensive IT consulting and cybersecurity solutions tailored to your unique requirements.',
        viewServices: 'View Our Services',
        learnMore: 'Learn More',
        scrollExplore: 'Scroll to explore',
        systemOnline: 'Trust',
        securityActive: 'Protect',
        servicesReady: 'Secure',
        
        // Services Section
        servicesTitle: 'Our Services',
        servicesDescription: 'Comprehensive IT solutions designed for home users and enterprise organizations',
        homeUsers: 'Home Users',
        homeUsersStatus: 'Residential Solutions',
        homeUsersDescription: 'Comprehensive technology support and cybersecurity solutions for families and individuals.',
        enterprise: 'Enterprise',
        enterpriseStatus: 'Corporate Solutions',
        enterpriseDescription: 'Advanced cybersecurity and scalable infrastructure solutions for large organizations.',
        
        // Home User Services
        homeNetworkSecurity: 'Home Network Security',
        homeNetworkSecurityDesc: 'Wi-Fi setup, firewall hardening, parental controls & guest isolation',
        deviceProtection: 'Device Protection',
        deviceProtectionDesc: 'Antivirus, IoT monitoring & secure setup of smart devices (TVs, cams, etc.)',
        cyberAwareness: 'Cyber Awareness',
        cyberAwarenessDesc: 'Family-focused training on phishing, passwords & online safety',
        dataPrivacyBackup: 'Data Privacy & Backup',
        dataPrivacyBackupDesc: 'Cloud backup config, encryption, GDPR-friendly storage (NAS)',
        userAccessControl: 'User Access Control',
        userAccessControlDesc: 'MFA setup, account recovery & password management',
        remoteAccessVPN: 'Remote Access & VPN',
        remoteAccessVPNDesc: 'Secure browsing & remote desktop setup for travel/work',
        techOptimization: 'Tech Optimization',
        techOptimizationDesc: 'Smart home troubleshooting, network tuning, and device upgrades',
        
        // Enterprise Services
        purviewImplementation: 'Purview Implementation',
        purviewImplementationDesc: 'Organization-wide deployment of Microsoft 365 and Endpoint-based Data Loss Prevention (DLP) policies to safeguard sensitive information.',
        conditionalAccess: 'Conditional Access (CAP) Rollout',
        conditionalAccessDesc: 'Design and implementation of Conditional Access Policies to enforce secure, identity-based access across all environments.',
        defenderOffice: 'Microsoft Defender for Office (MDO) Deployment',
        defenderOfficeDesc: 'Enterprise-wide implementation of MDO to enhance email threat protection and strengthen overall security posture.',
        informationProtection: 'Information Protection (MIP)',
        informationProtectionDesc: 'Deployment of Microsoft Information Protection for data classification, labeling, and encryption across the organization.',
        emailEncryption: 'Email Encryption',
        emailEncryptionDesc: 'Design and deployment of a customized email encryption solution, ensuring secure internal and external communications.',
        identityManagement: 'Identity and Access Management (IAM)',
        identityManagementDesc: 'Architecture and rollout of PIM, Azure RBAC, Azure AD permissions, Exchange role configurations, and RBAC compliance.',
        multiFactor: 'Multi-Factor Authentication (MFA)',
        multiFactorDesc: 'End-to-end deployment using software and hardware tokens (FIDO2) to strengthen identity verification.',
        defenderCloud: 'Microsoft Defender for Cloud Apps (MDCA)',
        defenderCloudDesc: 'Deployment of MDCA policies to monitor and secure cloud app usage, enforce file protection, and manage user sessions.',
        
        // About Section
        aboutTitle: 'About NetSyon',
        aboutParagraph1: 'NetSyon is a consulting office specializing in Microsoft Cloud security, data protection, and IT solutions for businesses, SMBs, and advanced home users. With over a decade of experience in IT consulting, NetSyon has been the trusted technology partner for individuals, small businesses, and large enterprises across the region.',
        aboutParagraph2: 'In an increasingly digital world, securing data and cloud infrastructure is critical—not only for enterprises, but also for individuals managing connected homes. NetSyon helps clients build secure, reliable, and scalable digital environments by combining strategic expertise with hands-on implementation.',
        aboutParagraph3: 'We provide tailored consulting services across the Microsoft ecosystem, helping organizations and individuals take full control of their cybersecurity posture, cloud governance, and IT infrastructure.',
        yearsExperience: 'Years Experience',
        projectsCompleted: 'Projects Completed',
        supportAvailable: 'Support Available',
        clientSatisfaction: 'Client Satisfaction',
        
        // Why Choose Section
        whyChooseTitle: 'Why Choose NetSyon?',
        whyChooseDescription: 'We combine deep technical expertise with personalized service to deliver solutions that work',
        provenExpertise: 'Proven Expertise',
        provenExpertiseDesc: 'Years of experience across all technology platforms',
        personalizedService: 'Personalized Service',
        personalizedServiceDesc: 'Tailored solutions that fit your specific needs, budget, and timeline',
        rapidResponse: 'Rapid Response',
        rapidResponseDesc: 'Quick turnaround times with 24/7 support for critical issues',
        
        // Contact Section
        contactTitle: 'Get In Touch',
        contactDescription: 'Ready to secure and optimize your IT infrastructure? Connect with our expert team.',
        contactInformation: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        support: 'Support',
        emergency: '24/7 Emergency',
        businessHours: 'Business Hours',
        mondayFriday: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        emergencyOnly: 'Emergency Only',
        
        // Footer
        footerDescription: 'Professional IT consulting and cybersecurity solutions for every need',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        footerSupport: 'Support',
        copyright: '© 2025 NetSyon. All rights reserved.',
      },
      fr: {
        // Navigation
        home: 'Accueil',
        services: 'Services',
        about: 'À propos',
        contact: 'Contact',
        secure: 'SÉCURISÉ',
        
        // Hero Section
        heroTitle1: 'Solutions TI Expertes',
        heroTitle2: 'Pour Tous Besoins',
        heroDescription: 'Des réseaux domestiques aux infrastructures d\'entreprise, NetSyon offre des services complets de consultation TI et de cybersécurité adaptés à vos exigences uniques.',
        viewServices: 'Voir Nos Services',
        learnMore: 'En Savoir Plus',
        scrollExplore: 'Défiler pour explorer',
        systemOnline: 'Confiance',
        securityActive: 'Protection',
        servicesReady: 'Sécurité',
        
        // Services Section
        servicesTitle: 'Nos Services',
        servicesDescription: 'Solutions TI complètes conçues pour les utilisateurs domestiques et les organisations d\'entreprise',
        homeUsers: 'Utilisateurs Domestiques',
        homeUsersStatus: 'Solutions Résidentielles',
        homeUsersDescription: 'Support technologique complet et solutions de cybersécurité pour familles et particuliers.',
        enterprise: 'Entreprise',
        enterpriseStatus: 'Solutions Corporatives',
        enterpriseDescription: 'Solutions avancées de cybersécurité et d\'infrastructure évolutive pour grandes organisations.',
        
        // Home User Services
        homeNetworkSecurity: 'Sécurité Réseau Domestique',
        homeNetworkSecurityDesc: 'Configuration Wi-Fi, durcissement pare-feu, contrôles parentaux et isolation invités',
        deviceProtection: 'Protection des Appareils',
        deviceProtectionDesc: 'Antivirus, surveillance IoT et configuration sécurisée d\'appareils intelligents (TV, caméras, etc.)',
        cyberAwareness: 'Sensibilisation Cyber',
        cyberAwarenessDesc: 'Formation familiale sur le phishing, mots de passe et sécurité en ligne',
        dataPrivacyBackup: 'Confidentialité et Sauvegarde',
        dataPrivacyBackupDesc: 'Configuration sauvegarde cloud, chiffrement, stockage conforme RGPD (NAS)',
        userAccessControl: 'Contrôle d\'Accès Utilisateur',
        userAccessControlDesc: 'Configuration MFA, récupération de compte et gestion des mots de passe',
        remoteAccessVPN: 'Accès Distant et VPN',
        remoteAccessVPNDesc: 'Navigation sécurisée et configuration bureau à distance pour voyages/travail',
        techOptimization: 'Optimisation Technologique',
        techOptimizationDesc: 'Dépannage maison intelligente, réglage réseau et mise à niveau appareils',
        
        // Enterprise Services
        purviewImplementation: 'Implémentation Purview',
        purviewImplementationDesc: 'Déploiement organisationnel des politiques de prévention de perte de données (DLP) Microsoft 365 et point de terminaison pour protéger les informations sensibles.',
        conditionalAccess: 'Déploiement Accès Conditionnel (CAP)',
        conditionalAccessDesc: 'Conception et implémentation de politiques d\'accès conditionnel pour imposer un accès sécurisé basé sur l\'identité dans tous les environnements.',
        defenderOffice: 'Déploiement Microsoft Defender pour Office (MDO)',
        defenderOfficeDesc: 'Implémentation d\'entreprise de MDO pour améliorer la protection contre les menaces par courriel et renforcer la posture de sécurité globale.',
        informationProtection: 'Protection de l\'Information (MIP)',
        informationProtectionDesc: 'Déploiement de Microsoft Information Protection pour la classification, l\'étiquetage et le chiffrement des données dans l\'organisation.',
        emailEncryption: 'Chiffrement de Courriel',
        emailEncryptionDesc: 'Conception et déploiement d\'une solution de chiffrement de courriel personnalisée, assurant des communications internes et externes sécurisées.',
        identityManagement: 'Gestion d\'Identité et d\'Accès (IAM)',
        identityManagementDesc: 'Architecture et déploiement de PIM, Azure RBAC, permissions Azure AD, configurations de rôles Exchange et conformité RBAC.',
        multiFactor: 'Authentification Multi-Facteurs (MFA)',
        multiFactorDesc: 'Déploiement de bout en bout utilisant des jetons logiciels et matériels (FIDO2) pour renforcer la vérification d\'identité.',
        defenderCloud: 'Microsoft Defender pour Applications Cloud (MDCA)',
        defenderCloudDesc: 'Déploiement de politiques MDCA pour surveiller et sécuriser l\'utilisation d\'applications cloud, imposer la protection des fichiers et gérer les sessions utilisateur.',
        
        // About Section
        aboutTitle: 'À propos de NetSyon',
        aboutParagraph1: 'NetSyon est un bureau de consultation spécialisé dans la sécurité cloud Microsoft, la protection des données et les solutions TI pour entreprises, PME et utilisateurs domestiques avancés. Avec plus d\'une décennie d\'expérience en consultation TI, NetSyon a été le partenaire technologique de confiance pour particuliers, petites entreprises et grandes entreprises de la région.',
        aboutParagraph2: 'Dans un monde de plus en plus numérique, sécuriser les données et l\'infrastructure cloud est critique—non seulement pour les entreprises, mais aussi pour les particuliers gérant des maisons connectées. NetSyon aide les clients à construire des environnements numériques sécurisés, fiables et évolutifs en combinant expertise stratégique et implémentation pratique.',
        aboutParagraph3: 'Nous fournissons des services de consultation adaptés dans l\'écosystème Microsoft, aidant organisations et particuliers à prendre le contrôle complet de leur posture de cybersécurité, gouvernance cloud et infrastructure TI.',
        yearsExperience: 'Années d\'Expérience',
        projectsCompleted: 'Projets Complétés',
        supportAvailable: 'Support Disponible',
        clientSatisfaction: 'Satisfaction Client',
        
        // Why Choose Section
        whyChooseTitle: 'Pourquoi Choisir NetSyon?',
        whyChooseDescription: 'Nous combinons une expertise technique approfondie avec un service personnalisé pour livrer des solutions qui fonctionnent',
        provenExpertise: 'Expertise Prouvée',
        provenExpertiseDesc: 'Années d\'expérience sur toutes les plateformes technologiques',
        personalizedService: 'Service Personnalisé',
        personalizedServiceDesc: 'Solutions adaptées qui correspondent à vos besoins spécifiques, budget et échéancier',
        rapidResponse: 'Réponse Rapide',
        rapidResponseDesc: 'Délais de réponse rapides avec support 24/7 pour problèmes critiques',
        
        // Contact Section
        contactTitle: 'Contactez-Nous',
        contactDescription: 'Prêt à sécuriser et optimiser votre infrastructure TI? Connectez-vous avec notre équipe d\'experts.',
        contactInformation: 'Informations de Contact',
        email: 'Courriel',
        phone: 'Téléphone',
        support: 'Support',
        emergency: 'Urgence 24/7',
        businessHours: 'Heures d\'Affaires',
        mondayFriday: 'Lundi - Vendredi',
        saturday: 'Samedi',
        sunday: 'Dimanche',
        emergencyOnly: 'Urgence Seulement',
        
        // Footer
        footerDescription: 'Solutions professionnelles de consultation TI et cybersécurité pour tous les besoins',
        privacyPolicy: 'Politique de Confidentialité',
        termsOfService: 'Conditions d\'Utilisation',
        footerSupport: 'Support',
        copyright: '© 2025 NetSyon Consultation TI. Tous droits réservés.',
      }
    };
    
    return translations[language][key] || key;
  };

  const getModalContent = () => {
    switch(modalContent) {
      case 'privacy':
        return {
          title: language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité',
          content: language === 'en' ? (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Privacy Policy</h3>
                <p className="text-sm text-slate-400 mb-4">Effective Date: January 1, 2025</p>
                <p className="mb-4">
                  NetSyon IT Consulting ("NetSyon," "we," "us," or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Information We Collect</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Personal Information:</strong> Name, email address, phone number, company details, and project requirements.</p>
                  <p><strong>Technical Information:</strong> IP address, browser type, device information, and website usage analytics.</p>
                  <p><strong>Professional Information:</strong> IT infrastructure details, security requirements, and business needs (only with explicit consent).</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">2. How We Use Your Information</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Provide IT consulting and cybersecurity services</li>
                  <li>Communicate regarding projects and support</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations</li>
                  <li>Send relevant industry updates (with consent)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">3. Information Sharing</h4>
                <p className="text-sm">
                  We do not sell, trade, or rent your personal information. We may share information only with:
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside mt-2">
                  <li>Trusted service providers bound by confidentiality agreements</li>
                  <li>Legal authorities when required by law</li>
                  <li>Microsoft partners for cloud services implementation (with consent)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">4. Data Security</h4>
                <p className="text-sm">
                  We implement industry-standard security measures including encryption, secure transmission protocols, 
                  and regular security audits to protect your information. Our team follows Microsoft security best practices 
                  and maintains relevant cybersecurity certifications.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">5. Your Rights (Quebec Privacy Act)</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to file a complaint with Quebec's privacy commissioner</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">6. Contact Information</h4>
                <p className="text-sm">
                  For privacy-related questions or to exercise your rights, contact us at:
                  <br />Email: privacy@netsyon.com
                  <br />Phone: +1 (514) 400-4279
                  <br />Address: Quebec, Canada
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Politique de Confidentialité</h3>
                <p className="text-sm text-slate-400 mb-4">Date d'entrée en vigueur : 1er janvier 2025</p>
                <p className="mb-4">
                  NetSyon Consultation TI (« NetSyon », « nous », « notre ») s'engage à protéger votre vie privée. 
                  Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons 
                  vos informations lorsque vous visitez notre site web ou utilisez nos services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Informations que Nous Collectons</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Informations Personnelles :</strong> Nom, adresse courriel, numéro de téléphone, détails de l'entreprise et exigences du projet.</p>
                  <p><strong>Informations Techniques :</strong> Adresse IP, type de navigateur, informations sur l'appareil et analyses d'utilisation du site web.</p>
                  <p><strong>Informations Professionnelles :</strong> Détails de l'infrastructure TI, exigences de sécurité et besoins d'affaires (uniquement avec consentement explicite).</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">2. Comment Nous Utilisons Vos Informations</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Fournir des services de consultation TI et de cybersécurité</li>
                  <li>Communiquer concernant les projets et le support</li>
                  <li>Améliorer nos services et fonctionnalités du site web</li>
                  <li>Respecter les obligations légales</li>
                  <li>Envoyer des mises à jour pertinentes de l'industrie (avec consentement)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">3. Partage d'Informations</h4>
                <p className="text-sm">
                  Nous ne vendons, n'échangeons ou ne louons pas vos informations personnelles. Nous pouvons partager des informations uniquement avec :
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside mt-2">
                  <li>Fournisseurs de services de confiance liés par des accords de confidentialité</li>
                  <li>Autorités légales lorsque requis par la loi</li>
                  <li>Partenaires Microsoft pour l'implémentation de services cloud (avec consentement)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">4. Sécurité des Données</h4>
                <p className="text-sm">
                  Nous implémentons des mesures de sécurité standards de l'industrie incluant le chiffrement, protocoles de transmission sécurisés, 
                  et audits de sécurité réguliers pour protéger vos informations. Notre équipe suit les meilleures pratiques de sécurité Microsoft 
                  et maintient des certifications de cybersécurité pertinentes.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">5. Vos Droits (Loi sur la Protection des Renseignements Personnels du Québec)</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Droit d'accéder à vos informations personnelles</li>
                  <li>Droit de corriger des informations inexactes</li>
                  <li>Droit de demander la suppression de vos données</li>
                  <li>Droit de retirer votre consentement</li>
                  <li>Droit de déposer une plainte auprès du commissaire à la vie privée du Québec</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">6. Informations de Contact</h4>
                <p className="text-sm">
                  Pour des questions liées à la vie privée ou pour exercer vos droits, contactez-nous à :
                  <br />Courriel : privacy@netsyon.com
                  <br />Téléphone : +1 (514) 400-4279
                  <br />Adresse : Québec, Canada
                </p>
              </div>
            </div>
          )
        };

      case 'terms':
        return {
          title: language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation',
          content: language === 'en' ? (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Terms of Service</h3>
                <p className="text-sm text-slate-400 mb-4">Effective Date: January 1, 2025</p>
                <p className="mb-4">
                  These Terms of Service ("Terms") govern your use of NetSyon IT Consulting services and website. 
                  By engaging our services, you agree to these terms.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Services Provided</h4>
                <p className="text-sm mb-2">NetSyon provides:</p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Microsoft Cloud security consulting</li>
                  <li>IT infrastructure consulting</li>
                  <li>Cybersecurity assessment and implementation</li>
                  <li>Data protection and compliance services</li>
                  <li>Technical support and maintenance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">2. Client Responsibilities</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain confidentiality of access credentials</li>
                  <li>Follow security recommendations and best practices</li>
                  <li>Pay invoices according to agreed terms</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">3. Intellectual Property</h4>
                <p className="text-sm">
                  All methodologies, tools, and documentation developed by NetSyon remain our intellectual property. 
                  Clients receive usage rights for implemented solutions but not ownership of proprietary methodologies.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">4. Limitation of Liability</h4>
                <p className="text-sm">
                  NetSyon's liability is limited to the value of services provided. We are not liable for indirect, 
                  consequential, or punitive damages. Our recommendations are based on industry best practices, 
                  but cybersecurity involves inherent risks that cannot be completely eliminated.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">5. Governing Law</h4>
                <p className="text-sm">
                  These terms are governed by the laws of Quebec, Canada. Any disputes will be resolved through 
                  arbitration in Quebec or Quebec courts, as applicable.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">6. Termination</h4>
                <p className="text-sm">
                  Either party may terminate services with 30 days written notice. Upon termination, all confidential 
                  information must be returned, and outstanding invoices become immediately due.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">7. Updates to Terms</h4>
                <p className="text-sm">
                  We may update these terms periodically. Continued use of our services constitutes acceptance of updated terms.
                  Material changes will be communicated with 30 days notice.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Conditions d'Utilisation</h3>
                <p className="text-sm text-slate-400 mb-4">Date d'entrée en vigueur : 1er janvier 2025</p>
                <p className="mb-4">
                  Ces Conditions d'Utilisation (« Conditions ») régissent votre utilisation des services et du site web de NetSyon Consultation TI. 
                  En utilisant nos services, vous acceptez ces conditions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">1. Services Fournis</h4>
                <p className="text-sm mb-2">NetSyon fournit :</p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Consultation en sécurité Microsoft Cloud</li>
                  <li>Consultation en infrastructure TI</li>
                  <li>Évaluation et implémentation de cybersécurité</li>
                  <li>Services de protection des données et conformité</li>
                  <li>Support technique et maintenance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">2. Responsabilités du Client</h4>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Fournir des informations exactes et complètes</li>
                  <li>Maintenir la confidentialité des identifiants d'accès</li>
                  <li>Suivre les recommandations de sécurité et meilleures pratiques</li>
                  <li>Payer les factures selon les conditions convenues</li>
                  <li>Respecter les lois et règlements applicables</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">3. Propriété Intellectuelle</h4>
                <p className="text-sm">
                  Toutes les méthodologies, outils et documentation développés par NetSyon demeurent notre propriété intellectuelle. 
                  Les clients reçoivent des droits d'utilisation pour les solutions implémentées mais pas la propriété des méthodologies propriétaires.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">4. Limitation de Responsabilité</h4>
                <p className="text-sm">
                  La responsabilité de NetSyon est limitée à la valeur des services fournis. Nous ne sommes pas responsables des dommages 
                  indirects, consécutifs ou punitifs. Nos recommandations sont basées sur les meilleures pratiques de l'industrie, 
                  mais la cybersécurité implique des risques inhérents qui ne peuvent être complètement éliminés.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">5. Droit Applicable</h4>
                <p className="text-sm">
                  Ces conditions sont régies par les lois du Québec, Canada. Tout litige sera résolu par arbitrage au Québec 
                  ou devant les tribunaux du Québec, selon le cas.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">6. Résiliation</h4>
                <p className="text-sm">
                  Chaque partie peut résilier les services avec un préavis écrit de 30 jours. Lors de la résiliation, toutes les informations 
                  confidentielles doivent être retournées et les factures impayées deviennent immédiatement exigibles.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">7. Mises à Jour des Conditions</h4>
                <p className="text-sm">
                  Nous pouvons mettre à jour ces conditions périodiquement. L'utilisation continue de nos services constitue l'acceptation des conditions mises à jour.
                  Les changements importants seront communiqués avec un préavis de 30 jours.
                </p>
              </div>
            </div>
          )
        };

      case 'security':
        return {
          title: 'Security',
          content: (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Security Framework</h3>
                <p className="mb-4">
                  NetSyon maintains the highest security standards to protect our clients' data and infrastructure. 
                  Our security approach is built on industry best practices and continuous improvement.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🔐 Data Protection Measures</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                  <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access controls</li>
                  <li><strong>Network Security:</strong> Firewalls, VPN access, and network segmentation</li>
                  <li><strong>Backup & Recovery:</strong> Automated, encrypted backups with tested recovery procedures</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🛡️ Microsoft Security Expertise</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>Azure Security:</strong> Advanced threat protection and security monitoring</li>
                  <li><strong>Microsoft 365:</strong> Defender for Office 365, Conditional Access, and DLP policies</li>
                  <li><strong>Identity Management:</strong> Azure AD, Privileged Identity Management (PIM)</li>
                  <li><strong>Compliance:</strong> GDPR, SOC 2, ISO 27001 frameworks</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🔍 Security Monitoring</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>24/7 Monitoring:</strong> Continuous security event monitoring and alerting</li>
                  <li><strong>Threat Intelligence:</strong> Real-time threat intelligence and vulnerability assessments</li>
                  <li><strong>Incident Response:</strong> Rapid response team with established escalation procedures</li>
                  <li><strong>Security Audits:</strong> Regular security assessments and penetration testing</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📋 Compliance & Certifications</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>Microsoft Certifications:</strong> Azure Security Engineer, Microsoft 365 Security Administrator</li>
                  <li><strong>Industry Standards:</strong> ISO 27001, NIST Cybersecurity Framework</li>
                  <li><strong>Privacy Compliance:</strong> GDPR, Quebec Privacy Act, PIPEDA</li>
                  <li><strong>Regular Training:</strong> Continuous security awareness and certification maintenance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🚨 Incident Response</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Response Time:</strong> Critical incidents acknowledged within 1 hour</p>
                  <p><strong>Communication:</strong> Real-time updates and post-incident reports</p>
                  <p><strong>Recovery:</strong> Documented procedures for business continuity</p>
                  <p><strong>Learning:</strong> Post-incident analysis and security improvements</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📞 Security Contact</h4>
                <p className="text-sm">
                  For security-related concerns or to report vulnerabilities:
                  <br />Email: security@netsyon.com
                  <br />Emergency Hotline: +1 (555) 123-4567 (24/7)
                  <br />Encrypted Communication: Available upon request
                </p>
              </div>
            </div>
          )
        };

      case 'support':
        return {
          title: language === 'en' ? 'Support' : 'Support',
          content: language === 'en' ? (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Technical Support</h3>
                <p className="mb-4">
                  NetSyon provides comprehensive technical support to ensure your IT infrastructure runs smoothly 
                  and securely. Our support team combines deep Microsoft expertise with responsive service.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📞 Support Channels</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Email Support:</strong> support@netsyon.com</p>
                    <p className="text-slate-400">Response time: 4 hours during business hours</p>
                  </div>
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Phone Support:</strong> +1 (514) 400-4279</p>
                    <p className="text-slate-400">Available: Monday-Friday 8:00 AM - 6:00 PM (EST)</p>
                  </div>
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Emergency Hotline:</strong> +1 (514) 400-4279</p>
                    <p className="text-slate-400">24/7 for critical security incidents</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🎯 Support Levels</h4>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-400 pl-4">
                    <p><strong>Basic Support</strong> - Included with all services</p>
                    <p className="text-slate-400">Email support, documentation, basic troubleshooting</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p><strong>Premium Support</strong> - For managed services clients</p>
                    <p className="text-slate-400">Priority phone support, proactive monitoring, faster response</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p><strong>Enterprise Support</strong> - For large organizations</p>
                    <p className="text-slate-400">Dedicated support manager, 24/7 availability, SLA guarantees</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">⚡ Response Times</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2">Priority</th>
                        <th className="text-left py-2">Response Time</th>
                        <th className="text-left py-2">Resolution Target</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-red-400">Critical</td>
                        <td className="py-2">1 hour</td>
                        <td className="py-2">4 hours</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-orange-400">High</td>
                        <td className="py-2">4 hours</td>
                        <td className="py-2">1 business day</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-blue-400">Medium</td>
                        <td className="py-2">8 hours</td>
                        <td className="py-2">3 business days</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-green-400">Low</td>
                        <td className="py-2">24 hours</td>
                        <td className="py-2">5 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🔧 Remote Support Capabilities</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>Secure Remote Access:</strong> Encrypted remote desktop support</li>
                  <li><strong>Cloud Management:</strong> Direct Azure and Microsoft 365 administration</li>
                  <li><strong>Network Monitoring:</strong> Real-time infrastructure monitoring</li>
                  <li><strong>Automated Patching:</strong> Scheduled maintenance and updates</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📊 Support Analytics</h4>
                <p className="text-sm mb-2">We provide detailed support metrics including:</p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Monthly support summary reports</li>
                  <li>Response and resolution time tracking</li>
                  <li>System uptime and performance metrics</li>
                  <li>Security incident reports and remediation status</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📧 Contact Our Support Team</h4>
                <p className="text-sm">
                  Ready to get help? Contact us using your preferred method above, or email us with details about your issue. 
                  Please include your contact information, a description of the problem, and any error messages you're seeing.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Support Technique</h3>
                <p className="mb-4">
                  NetSyon fournit un support technique complet pour assurer que votre infrastructure TI fonctionne 
                  de manière fluide et sécurisée. Notre équipe de support combine une expertise Microsoft approfondie avec un service réactif.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📞 Canaux de Support</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Support par Courriel :</strong> support@netsyon.com</p>
                    <p className="text-slate-400">Temps de réponse : 4 heures pendant les heures d'affaires</p>
                  </div>
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Support Téléphonique :</strong> +1 (555) 123-4567</p>
                    <p className="text-slate-400">Disponible : Lundi-Vendredi 8h00 - 18h00 (EST)</p>
                  </div>
                  <div className="bg-slate-800/30 p-3 rounded-lg">
                    <p><strong>Ligne d'Urgence :</strong> +1 (555) 123-4567</p>
                    <p className="text-slate-400">24/7 pour incidents de sécurité critiques</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🎯 Niveaux de Support</h4>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-400 pl-4">
                    <p><strong>Support de Base</strong> - Inclus avec tous les services</p>
                    <p className="text-slate-400">Support courriel, documentation, dépannage de base</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p><strong>Support Premium</strong> - Pour clients de services gérés</p>
                    <p className="text-slate-400">Support téléphonique prioritaire, surveillance proactive, réponse plus rapide</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p><strong>Support Entreprise</strong> - Pour grandes organisations</p>
                    <p className="text-slate-400">Gestionnaire de support dédié, disponibilité 24/7, garanties SLA</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">⚡ Temps de Réponse</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2">Priorité</th>
                        <th className="text-left py-2">Temps de Réponse</th>
                        <th className="text-left py-2">Objectif de Résolution</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-red-400">Critique</td>
                        <td className="py-2">1 heure</td>
                        <td className="py-2">4 heures</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-orange-400">Élevée</td>
                        <td className="py-2">4 heures</td>
                        <td className="py-2">1 jour ouvrable</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 text-blue-400">Moyenne</td>
                        <td className="py-2">8 heures</td>
                        <td className="py-2">3 jours ouvrables</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-green-400">Faible</td>
                        <td className="py-2">24 heures</td>
                        <td className="py-2">5 jours ouvrables</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">🔧 Capacités de Support à Distance</h4>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li><strong>Accès Distant Sécurisé :</strong> Support bureau à distance chiffré</li>
                  <li><strong>Gestion Cloud :</strong> Administration directe Azure et Microsoft 365</li>
                  <li><strong>Surveillance Réseau :</strong> Surveillance d'infrastructure en temps réel</li>
                  <li><strong>Correctifs Automatisés :</strong> Maintenance et mises à jour programmées</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📊 Analytiques de Support</h4>
                <p className="text-sm mb-2">Nous fournissons des métriques de support détaillées incluant :</p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>Rapports de résumé de support mensuels</li>
                  <li>Suivi des temps de réponse et de résolution</li>
                  <li>Métriques de temps de fonctionnement et de performance système</li>
                  <li>Rapports d'incidents de sécurité et statut de remédiation</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">📧 Contactez Notre Équipe de Support</h4>
                <p className="text-sm">
                  Prêt à obtenir de l'aide ? Contactez-nous en utilisant votre méthode préférée ci-dessus, ou envoyez-nous un courriel avec les détails de votre problème. 
                  Veuillez inclure vos informations de contact, une description du problème et tout message d'erreur que vous voyez.
                </p>
              </div>
            </div>
          )
        };

      default:
        return { title: '', content: null };
    }
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
                <img 
                  src="/cmlogo.png" 
                  alt="NetSyon" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            
            {/* Clock and Status */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-mono">
                  {time.toLocaleTimeString()}
                </span>
              </div>
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
                <span>{language === 'en' ? 'FR' : 'EN'}</span>
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { key: 'home', section: 'hero' },
                  { key: 'services', section: 'services' },
                  { key: 'about', section: 'about' },
                  { key: 'contact', section: 'contact' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.section)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.section
                        ? 'text-blue-400 bg-blue-400/10 border border-blue-400/30'
                        : 'text-slate-300 hover:text-blue-400 hover:bg-blue-400/5'
                    }`}
                  >
                    {t(item.key)}
                  </button>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                  </svg>
                  <span>{language === 'en' ? 'FR' : 'EN'}</span>
                </button>
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
                <button
                  onClick={toggleLanguage}
                  className="ml-4 px-2 py-1 bg-slate-800/50 hover:bg-slate-700/50 rounded border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 text-xs flex items-center space-x-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                  </svg>
                  <span>{language === 'en' ? 'FR' : 'EN'}</span>
                </button>
              </div>
              {[
                { key: 'home', section: 'hero' },
                { key: 'services', section: 'services' },
                { key: 'about', section: 'about' },
                { key: 'contact', section: 'contact' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 w-full text-left transition-all duration-300"
                >
                  {t(item.key)}
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
            <span>{t('systemOnline')}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>{t('securityActive')}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>{t('servicesReady')}</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="smart-container">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">{t('heroTitle1')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-slow">
                  {t('heroTitle2')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                {t('heroDescription')}
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
                  {t('viewServices')}
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
                  {t('learnMore')}
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
            <span className="text-xs text-slate-400">{t('scrollExplore')}</span>
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
                {t('servicesTitle')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {t('servicesDescription')}
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
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{t('homeUsers')}</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{t('homeUsersStatus')}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  {t('homeUsersDescription')}
                </p>
                
                <div className="space-y-4">
                  {[
                    { key: 'homeNetworkSecurity', descKey: 'homeNetworkSecurityDesc', icon: '📡' },
                    { key: 'deviceProtection', descKey: 'deviceProtectionDesc', icon: '💻' },
                    { key: 'cyberAwareness', descKey: 'cyberAwarenessDesc', icon: '🧠' },
                    { key: 'dataPrivacyBackup', descKey: 'dataPrivacyBackupDesc', icon: '🔐' },
                    { key: 'userAccessControl', descKey: 'userAccessControlDesc', icon: '👥' },
                    { key: 'remoteAccessVPN', descKey: 'remoteAccessVPNDesc', icon: '🌍' },
                    { key: 'techOptimization', descKey: 'techOptimizationDesc', icon: '⚙️' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 service-item">
                      <span className="text-xl mr-4 mt-1">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-400 mb-2">{t(service.key)}</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{t(service.descKey)}</p>
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
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{t('enterprise')}</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>{t('enterpriseStatus')}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  {t('enterpriseDescription')}
                </p>
                
                <div className="space-y-4">
                  {[
                    { key: 'purviewImplementation', descKey: 'purviewImplementationDesc', icon: '🔐' },
                    { key: 'conditionalAccess', descKey: 'conditionalAccessDesc', icon: '🧩' },
                    { key: 'defenderOffice', descKey: 'defenderOfficeDesc', icon: '✉️' },
                    { key: 'informationProtection', descKey: 'informationProtectionDesc', icon: '🏷️' },
                    { key: 'emailEncryption', descKey: 'emailEncryptionDesc', icon: '📬' },
                    { key: 'identityManagement', descKey: 'identityManagementDesc', icon: '🧑‍💼' },
                    { key: 'multiFactor', descKey: 'multiFactorDesc', icon: '📲' },
                    { key: 'defenderCloud', descKey: 'defenderCloudDesc', icon: '☁️' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 service-item">
                      <span className="text-xl mr-4 mt-1">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-orange-400 mb-2">{t(service.key)}</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">{t(service.descKey)}</p>
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
                  {t('aboutTitle')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  {t('aboutParagraph1')}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {t('aboutParagraph2')}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {t('aboutParagraph3')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: '15+', labelKey: 'yearsExperience', color: 'blue' },
                  { value: '500+', labelKey: 'projectsCompleted', color: 'cyan' },
                  { value: '24/7', labelKey: 'supportAvailable', color: 'green' },
                  { value: '100%', labelKey: 'clientSatisfaction', color: 'orange' }
                ].map((stat, index) => (
                  <div key={index} className="group smart-stat-card">
                    <div className="relative z-10 p-6 text-center">
                      <div className={`text-3xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-300 text-sm">{t(stat.labelKey)}</div>
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
                {t('whyChooseTitle')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {t('whyChooseDescription')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                titleKey: 'provenExpertise',
                descriptionKey: 'provenExpertiseDesc',
                color: 'blue'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                titleKey: 'personalizedService',
                descriptionKey: 'personalizedServiceDesc',
                color: 'cyan'
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                titleKey: 'rapidResponse',
                descriptionKey: 'rapidResponseDesc',
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
                    <h3 className={`text-xl font-bold text-white mb-4 group-hover:text-${feature.color}-400 transition-colors duration-300`}>{t(feature.titleKey)}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {t(feature.descriptionKey)}
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
                {t('contactTitle')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {t('contactDescription')}
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="group smart-card">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('contactInformation')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-blue-400/10 border border-blue-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">{t('email')}</p>
                      <p className="text-blue-400 text-sm">info@netsyon.com</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">{t('phone')}</p>
                      <a href="http://wa.me/15144004279" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors duration-300">
                        +1 (514) 400-4279
                      </a>
                    </div>
                    <div className="text-center group">
                      <div className="w-12 h-12 bg-green-400/10 border border-green-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium mb-1">{t('support')}</p>
                      <p className="text-green-400 text-sm">{t('emergency')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group smart-card">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('businessHours')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-white font-medium mb-1">{t('mondayFriday')}</p>
                      <p className="text-orange-400 text-sm">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t('saturday')}</p>
                      <p className="text-orange-400 text-sm">9:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t('sunday')}</p>
                      <p className="text-orange-400 text-sm">{t('emergencyOnly')}</p>
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
            <img 
              src="/cmlogo.png" 
              alt="NetSyon" 
              className="h-8 w-auto mx-auto mb-4"
            />
            <p className="text-slate-300 mb-8">
              {t('footerDescription')}
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/company/netsyon" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="http://wa.me/15144004279" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-8">
              <button onClick={() => openModal('privacy')} className="hover:text-blue-400 transition-all duration-300">{t('privacyPolicy')}</button>
              <button onClick={() => openModal('terms')} className="hover:text-blue-400 transition-all duration-300">{t('termsOfService')}</button>
              <button onClick={() => openModal('support')} className="hover:text-blue-400 transition-all duration-300">{t('footerSupport')}</button>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700/50 text-slate-400 text-sm">
              {t('copyright')}
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="smart-card max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {getModalContent().title}
                </h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
                {getModalContent().content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;