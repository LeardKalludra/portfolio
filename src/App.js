import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Linkedin, Github, Mail, Code, Terminal, Monitor, FolderGit } from 'lucide-react';
import leardImage from './leardKalludra.png';
import eApartamentImage from './e-apartament.png';
import defiXImage from './Defi-x.png';
import hirehub from './HireHub.png';
import napolis from './naplis.png';
import cvFile from './LeardKalludra-CV.pdf';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  const [notification, setNotification] = React.useState({ show: false, message: '', type: '' });
  
  const sections = React.useMemo(() => ['home', 'about', 'skills', 'projects', 'contact'], []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });

      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = React.useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '#home', icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: 'About', href: '#about', icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-5 h-5 mr-2" /> },
    { name: 'Project', href: '#projects', icon: <FolderGit className="w-5 h-5 mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5 mr-2" /> },
  ];

  const socialLinks = [
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/posts/leard-kalludra-297209312_html-css-webdevelopment-activity-7212853347878330369-uMtX',
      color: 'hover:text-blue-500'
    },
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/LeardKalludra',
      color: 'hover:text-purple-500'
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: 'mailto:leardkalludra@gmail.com',
      color: 'hover:text-red-500'
    },
  ];

  const projects = [
    {
      title: 'E-apartment',
      description: 'E-apartment is an innovative platform for seamless apartment rentals and postings. Users can list their apartments online, explore available rentals, and use features like room sharing to find the perfect living arrangement.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://e-apartament.netlify.app/',
      image: eApartamentImage
    },
    {
      title: 'Hire Hub',
      description: 'Hire Hub is a free platform connecting recruiters and skilled laborers across various industries. It offers real-time chat, video interviews, job postings, and advanced search filters to streamline the hiring process',
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      image: hirehub,
      link: 'https://viewmyhirehub.online/'
    },
    {
      title: "Napoli's Italian Restaurant",
      description: "Napoli's Italian Restaurant serves authentic Italian dishes made with fresh ingredients and traditional recipes. Known for its homemade pizza crusts, vine-ripened tomato sauce, and real provolone cheese, Napoli's offers a variety of pizzas, pastas, subs, and more—all in a warm, welcoming atmosphere.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://napolis.netlify.app/",
      image: napolis
    },
   
   
  ];

  // Skill categories for tabs
  const skillTabs = React.useMemo(() => ({
    Frontend: [
      { name: 'React', color: 'hover:bg-[#61DAFB]/10', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]"><path fill="currentColor" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 17.25c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5z"/><path fill="currentColor" d="M12 5.25c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75S15.722 5.25 12 5.25zm0 11.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/><circle cx="12" cy="12" r="2.25" fill="currentColor"/></svg>
      )},
      { name: 'JavaScript', color: 'hover:bg-[#F7DF1E]/10', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7DF1E]"><path fill="currentColor" d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-8.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/></svg>
      )},
      { name: 'HTML', color: 'hover:bg-rose-100', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-rose-400"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
      )},
      { name: 'CSS', color: 'hover:bg-blue-100', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400"><path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm9.75 3.75l-.232 2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
      )},
      { name: 'Tailwind', color: 'hover:bg-teal-100', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400"><path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
      )},
      { name: 'Next.js', color: 'hover:bg-slate-800/30', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-slate-200"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M9 8h6v2h-3l3 6h-2l-3-6v6H9z" fill="#0F172A"/></svg>
      )},
      { name: 'Git', color: 'hover:bg-orange-900/30', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-orange-300"><path fill="currentColor" d="M22.675 12.317L11.68 1.322c-.42-.42-1.102-.42-1.522 0L7.48 3.999l2.14 2.14a2.25 2.25 0 012.846 2.847l2.14 2.14a2.25 2.25 0 11-1.06 1.06l-2.14-2.14a2.25 2.25 0 01-2.846-2.847L6.42 4.94l-4.1 4.1c-.42.42-.42 1.102 0 1.522l10.995 10.995c.42.42 1.102.42 1.522 0l7.838-7.838c.42-.42.42-1.102 0-1.522z"/></svg>
      )},
      { name: 'GitHub', color: 'hover:bg-slate-900/30', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-slate-300"><path fill="currentColor" d="M12 2a10 10 0 00-3.162 19.493c.5.092.682-.217.682-.482 0-.237-.01-1.023-.015-1.856-2.775.603-3.36-1.188-3.36-1.188-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.217-.252-4.55-1.109-4.55-4.938 0-1.09.39-1.983 1.029-2.681-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.698 1.028 1.591 1.028 2.681 0 3.841-2.337 4.683-4.56 4.932.359.309.678.92.678 1.854 0 1.338-.012 2.416-.012 2.744 0 .268.18.58.688.481A10 10 0 0012 2z"/></svg>
      )},
      { name: 'Firebase', color: 'hover:bg-amber-900/30', icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300"><path fill="currentColor" d="M4 20l1.4-12L9 3l2 5-7 12zM11 8l2-3 7 12-9 3-7-2 7-10z"/></svg>
      )},
    ],
  }), []);
  const [activeSkillTab, setActiveSkillTab] = React.useState('Frontend');

  const Notification = ({ message, type, onClose }) => {
    React.useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }, [onClose]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-[100] flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-indigo-950/50 to-black/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 10, opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="relative w-full max-w-sm mx-4"
        >
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600">
            <div className="rounded-2xl bg-violet-950/70 border border-violet-900/50 backdrop-blur-md px-6 py-5">
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center shadow-inner ${type === 'success' ? 'bg-emerald-500/15 border-emerald-400/30' : 'bg-rose-500/15 border-rose-400/30'}`}>
                  {type === 'success' ? (
                    <svg className="w-7 h-7 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  ) : (
                    <svg className="w-7 h-7 text-rose-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-slate-100">
                    {type === 'success' ? 'Message sent' : 'Something went wrong'}
                  </h4>
                  <p className="text-sm text-slate-300">
                    {message}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 ring-1 ring-inset ring-violet-400/30 hover:ring-violet-300/40 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-gradient-to-br from-violet-950 via-indigo-950 to-black text-slate-100 min-h-screen overflow-hidden relative"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      {/* Background: aurora ribbons */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {!prefersReducedMotion && (
        <motion.div
          className="absolute -top-1/3 -left-1/4 w-[140%] h-[80%] rotate-[-12deg]"
            style={{
            background:
              'linear-gradient(90deg, rgba(139,92,246,0.08), rgba(217,70,239,0.08) 50%, rgba(99,102,241,0.08))',
            filter: 'blur(32px)'
          }}
          animate={{ x: ['-5%', '5%', '-5%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />)}
        {!prefersReducedMotion && (
        <motion.div
          className="absolute top-1/2 -right-1/3 w-[120%] h-[70%] rotate-[18deg]"
            style={{
            background:
              'linear-gradient(90deg, rgba(99,102,241,0.08), rgba(59,130,246,0.08) 50%, rgba(217,70,239,0.08))',
            filter: 'blur(28px)'
          }}
          animate={{ x: ['5%', '-5%', '5%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />)}

        {/* Sweeping light beam */}
        {!prefersReducedMotion && (
          <motion.div
          className="absolute inset-0"
            style={{
            background:
              'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)'
          }}
          animate={{ backgroundPositionX: ['0%', '200%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />)}

        {/* Cursor-follow glow */}
        {!prefersReducedMotion && (
          <motion.div
          className="absolute w-[420px] h-[420px] rounded-full mix-blend-screen"
            style={{
            left: cursor.x - 210,
            top: cursor.y - 210,
            background:
              'radial-gradient(circle at center, rgba(168,85,247,0.25), rgba(0,0,0,0) 60%)',
            filter: 'blur(24px)'
          }}
          animate={{ opacity: [0.7, 0.5, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />)}
      </div>

      {/* Parallax stars and film grain */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Distant stars */}
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          {[...Array(60)].map((_, i) => (
            <motion.span
              key={`s1-${i}`}
              className="absolute block w-[1.5px] h-[1.5px] rounded-full bg-white/18"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={prefersReducedMotion ? {} : { opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 8 + Math.random() * 8, repeat: Infinity }}
            />
          ))}
        </div>
        {/* Mid stars (slow drift) */}
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={`s2-${i}`}
              className="absolute block w-[2px] h-[2px] rounded-full bg-white/22"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={prefersReducedMotion ? {} : { x: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 14 + Math.random() * 8, repeat: Infinity, ease: 'easeInOut' }}
            />
        ))}
      </div>
        {/* Near stars (tiny twinkle) */}
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          {[...Array(25)].map((_, i) => (
            <motion.span
              key={`s3-${i}`}
              className="absolute block w-[2.5px] h-[2.5px] rounded-full bg-white/28"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={prefersReducedMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,\
              <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'>\
                <filter id=\'n\'>\
                  <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
                  <feColorMatrix type=\'saturate\' values=\'0\'/>\
                </filter>\
                <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/>\
              </svg>\
              ")',
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-violet-950/50 backdrop-blur-xl border-b border-violet-800/40 py-3"
      >
        <div className="relative">
          <nav className="container mx-auto px-8">
            <div className="flex items-center justify-between">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold text-slate-100"
              >
                Leard <span className="text-slate-400">Kalludra</span>
              </motion.h1>
              
              {/* Desktop Navigation */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex items-center gap-1"
              >
                {navigation.map((item) => {
                  const section = item.href.replace('#', '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(section)}
                      className={`relative px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-300 group ${activeSection === section ? 'bg-violet-900/40 border border-violet-800/50' : 'hover:bg-violet-900/30'}`}
                    >
                      <span className="mr-1.5 inline-block align-middle group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="align-middle">{item.name}</span>
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${activeSection === section ? 'w-6 bg-slate-400' : 'w-0 bg-transparent group-hover:w-6 group-hover:bg-slate-500'}`}></span>
                    </button>
                  );
                })}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-full bg-violet-900/40 hover:bg-violet-900/60 transition-all duration-300 border border-violet-800/40"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-slate-100" /> : <Menu className="w-6 h-6 text-slate-100" />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-3 pb-4 space-y-2 bg-violet-950/60 backdrop-blur-xl rounded-xl p-4 border border-violet-800/40"
                >
                  {navigation.map((item) => {
                    const section = item.href.replace('#', '');
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(section);
                          setIsMenuOpen(false);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex items-center gap-2 py-2 px-2 rounded-lg text-slate-300 hover:text-white hover:bg-violet-900/40 transition-all duration-300 w-full ${activeSection === section ? 'bg-violet-900/40 border border-violet-800/50' : ''}`}
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        <span>{item.name}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="home" 
        className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 z-10"
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
            <motion.div variants={itemVariants} className="flex-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-5 pl-2 pr-3 py-1 rounded-full border border-violet-800/40 bg-violet-950/40 backdrop-blur-sm"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs sm:text-sm font-medium text-slate-300">Open for new opportunities</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-6"
              >
                <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-blue-300 text-transparent bg-clip-text">Hello, I’m Leard Kalludra</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0"
              >
                Frontend developer focused on React, Next.js and Tailwind CSS. I’m on track to complete my programming learning Jurney and become a Full‑Stack Developer by July. I turn ideas into polished, accessible products with clean code, smooth motion, and real performance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cvFile}
                  download="LeardKalludra-CV.pdf"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-violet-600 text-white font-medium shadow-lg hover:bg-violet-700 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Download CV
                </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-violet-400 text-violet-200 font-medium hover:bg-violet-900/30 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  View Projects
                  </motion.a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center md:justify-start"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 sm:p-4 border-2 border-violet-800/50 bg-violet-950/40 rounded-full hover:bg-violet-900/50 transition-all duration-300 shadow-md`}
                  >
                    {React.cloneElement(link.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-slate-200" })}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex-1 flex justify-center md:justify-end"
            >
              {/* Framed hero photo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
                className="relative"
              >
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 shadow-2xl">
                  <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-600/30 via-violet-600/30 to-indigo-600/30 blur-2xl"></div>
                  <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-violet-950/40 border border-violet-900/50 backdrop-blur">
                    <img src={leardImage} alt="Leard Kalludra" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-violet-950/70 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-4 px-3 py-1 rounded-full text-xs bg-violet-900/60 border border-violet-800/50">Frontend Developer</div>
                <div className="absolute -top-4 right-4 px-3 py-1 rounded-full text-xs bg-indigo-900/60 border border-indigo-800/50">React / Tailwind</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section divider */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-800/40 to-transparent my-8"></div>
      </div>

      {/* About Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="about" 
        className="relative py-20 px-6 z-10"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={itemVariants}
            className="bg-violet-950/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-violet-900/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent"></div>
            
            <div className="relative">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-violet-900/40 border border-violet-800/50">
                  <Terminal className="w-8 h-8 text-violet-300" />
            </div>
                <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Text + bullets */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                  className="lg:col-span-2 space-y-5"
                >
                  <h3 className="text-xl font-semibold text-slate-100">I build clean, fast, and thoughtful interfaces</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I’m a frontend developer specializing in React, Next.js and Tailwind CSS. I care about the details—animations that feel natural, readable code, and performance that keeps things snappy.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Responsive layouts and reusable components',
                      'Smooth animations with production performance',
                      'Clean Tailwind architectures',
                      'API integration and state management',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <svg className="w-5 h-5 mt-0.5 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { label: 'Projects', value: '10+' },
                      { label: 'Core Stack', value: 'React/Next' },
                      { label: 'Focus', value: 'UI & Perf' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl bg-violet-950/40 border border-violet-900/40 p-3 text-center">
                        <div className="text-lg font-bold text-slate-100">{s.value}</div>
                        <div className="text-[11px] tracking-wide text-slate-400 uppercase">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href={cvFile}
                      download="LeardKalludra-CV.pdf"
                      className="px-5 py-3 rounded-lg bg-violet-600 text-white hover:bg-violet-700 ring-1 ring-inset ring-violet-400/30 hover:ring-violet-300/40 transition-all"
                    >
                      Download CV
                    </motion.a>
                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection('skills')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-violet-400 text-violet-200 hover:bg-violet-900/30 transition-all"
                    >
                      View my skills
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      className="px-5 py-3 rounded-lg bg-violet-950/40 text-slate-200 border border-violet-900/40 hover:border-violet-800/60 transition-all"
                    >
                      Contact
                    </motion.a>
                  </div>
              </motion.div>

                {/* Side note card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-violet-950/40 border border-violet-900/40 p-5"
                >
                  <h4 className="text-sm font-semibold text-slate-200 mb-3">What I’m like to work with</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Pragmatic, communicative, and organized. I ship iteratively, keep PRs clean, and focus on the outcome: a delightful experience for users.
                  </p>
              </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="skills" 
        className="relative py-20 px-6 z-10"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={itemVariants}
            className="bg-violet-950/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-violet-900/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-900/40 border border-violet-800/50">
                    <Code className="w-8 h-8 text-violet-300" />
            </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-100">Skills</h2>
                    <div className="mt-2 h-px w-24 bg-gradient-to-r from-violet-400 to-fuchsia-400"></div>
                  </div>
                </div>
              </div>

              {/* Single grid, no tabs */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skillTabs.Frontend.map((skill, index) => (
                <motion.div
                  key={index}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-xl bg-violet-950/40 border border-violet-900/40 flex items-center gap-3 group ${skill.color} transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_0_1px_rgba(167,139,250,0.35)] hover:-translate-y-0.5`}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                  {skill.icon}
                    <span className="text-sm text-slate-200 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="projects" 
        className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 z-10"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={itemVariants}
            className="bg-violet-950/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl border border-violet-900/40"
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <FolderGit className="w-8 h-8 sm:w-10 sm:h-10 text-violet-300" />
              <div>
                <h2 className="text-3xl font-bold text-slate-100">Projects</h2>
                <div className="mt-2 h-px w-28 bg-gradient-to-r from-violet-400 to-fuchsia-400"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                   whileHover={{ y: -3 }}
                   transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                   className="rounded-xl overflow-hidden border border-violet-900/40 bg-violet-950/40 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:border-violet-800/60"
                >
                  {project.image && (
                     <div className="mb-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                         className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  )}
                   <div className="p-4 flex-1 flex flex-col">
                     <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-2">{project.title}</h3>
                     <p className="text-xs sm:text-sm text-slate-300 mb-4 flex-grow">{project.description}</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                           className="px-2 py-1 text-xs sm:text-sm rounded-md bg-violet-900/40 text-slate-200 border border-violet-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                     {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                         className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 ring-1 ring-inset ring-violet-400/30 hover:ring-violet-300/40 transition-all duration-300 text-sm sm:text-base self-end"
                    >
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Project
                    </a>
                     )}
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="contact" 
        className="relative py-20 px-6 z-10"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={itemVariants}
            className="bg-violet-950/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-violet-900/40 relative"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-100">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  
                  fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                      access_key: '15cf2744-fed1-4db5-917d-bb68145c48dc',
                      name: data.name,
                      email: data.email,
                      subject: data.subject,
                      message: data.message
                    })
                  })
                  .then(async (response) => {
                    if(response.status == 200) {
                      setNotification({
                        show: true,
                        message: "Thank you for your message! I'll get back to you soon.",
                        type: 'success'
                      });
                      e.target.reset();
                    } else {
                      const json = await response.json();
                      setNotification({
                        show: true,
                        message: json.message || "Something went wrong! Please try again.",
                        type: 'error'
                      });
                    }
                  })
                  .catch((error) => {
                    setNotification({
                      show: true,
                      message: "Something went wrong! Please try again later.",
                      type: 'error'
                    });
                    console.log(error);
                  });
                }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-slate-200 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-violet-950/40 border border-violet-900/40 focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 outline-none text-slate-100 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <label className="block text-slate-200 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-violet-950/40 border border-violet-900/40 focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 outline-none text-slate-100 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <label className="block text-slate-200 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-violet-950/40 border border-violet-900/40 focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 outline-none text-slate-100 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <label className="block text-slate-200 mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-violet-950/40 border border-violet-900/40 focus:border-violet-600 focus:ring-2 focus:ring-violet-600/20 outline-none text-slate-100 transition-all duration-300 resize-none"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 ring-1 ring-inset ring-violet-400/30 hover:ring-violet-300/40 transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col justify-center items-center space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">Get in Touch</h3>
                  <p className="text-slate-300 mb-6">Feel free to reach out to me through any of these channels:</p>
                </div>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 border-2 border-violet-800/50 bg-violet-950/40 rounded-full hover:bg-violet-900/50 transition-all duration-300 shadow-md`}
                  >
                    {React.cloneElement(link.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-slate-200" })}
                  </motion.a>
                ))}
                <div className="mt-6 text-center">
                  <p className="text-slate-300">Or send me an email at:</p>
                  <a href="mailto:leardkalludra@gmail.com" className="text-violet-300 hover:text-violet-200 transition-colors duration-300">leardkalludra@gmail.com</a>
              </div>
              </motion.div>
            </div>

            {/* Move notification inside the contact section */}
            <AnimatePresence>
              {notification.show && (
                <Notification
                  message={notification.message}
                  type={notification.type}
                  onClose={() => setNotification({ show: false, message: '', type: '' })}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-12 px-6 bg-violet-950/50 backdrop-blur-xl border-t border-violet-900/40"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h3 className="text-xl font-bold text-slate-100">Leard Kalludra</h3>
              <p className="text-slate-300 text-center md:text-left max-w-md">
                Creating beautiful and functional web experiences with a passion for design and development.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 sm:p-4 border-2 border-violet-800/50 bg-violet-950/40 rounded-full hover:bg-violet-900/50 transition-all duration-300 shadow-md`}
                  >
                    {React.cloneElement(link.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-slate-200" })}
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-slate-300">
                © {new Date().getFullYear()} Leard Kalludra. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors duration-200 border border-violet-400/30"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </motion.div>
  );
};

export default Portfolio;