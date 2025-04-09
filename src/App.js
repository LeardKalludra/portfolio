import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Github, Mail, ArrowUp, Code, Terminal, Monitor ,FolderGit } from 'lucide-react';
import leardImage from './leardKalludra.png';
import eApartamentImage from './e-apartament.png';
import defiXImage from './Defi-x.png';
import portfolioImage from './Portfolio.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      title: 'DeFi-X',
      description: 'Crypto Wallet revolutionizes cryptocurrency transactions, providing users with a secure digital wallet solution. It enables seamless management of digital assets and robust security features for safeguarding investments.',
      technologies: ['HTML', 'CSS'],
      link: 'https://rijonntahiri.netlify.app/others/crypto-wallet/',
      image: defiXImage
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio showcasing skills, projects, and experience, built with React.js and Tailwind CSS. The site features responsive design, smooth animations, and project highlights.',
      technologies: ['React', 'Tailwind CSS'],
      image: portfolioImage
    }
  ];

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-black text-white min-h-screen overflow-hidden relative"
    >
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.03),transparent_50%)]"></div>
      </div>

      {/* Multiple Rotating Galaxies */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="fixed inset-0 z-0">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 30}%`,
              height: `${Math.random() * 50 + 30}%`,
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: Math.random() * 60 + 60, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <radialGradient id={`galaxyGradient${i}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.1)`} />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>
            <circle cx="500" cy="500" r="400" fill={`url(#galaxyGradient${i})`} />
            <motion.path
              d="M500,100 C700,100 900,300 900,500 C900,700 700,900 500,900 C300,900 100,700 100,500 C100,300 300,100 500,100"
              fill="none"
              stroke={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.1)`}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </div>
      ))}

      {/* Constellations */}
      <div className="fixed inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
            }}
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity }}
          >
            {[...Array(5)].map((_, j) => (
              <motion.line
                key={j}
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </motion.svg>
        ))}
      </div>

      {/* Interactive Space Objects */}
      <div className="fixed inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute cursor-pointer"
            style={{
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            whileHover={{ scale: 1.5, rotate: 180 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: Math.random() * 20 + 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 100 100">
              <motion.path
                d="M50,10 L90,50 L50,90 L10,50 Z"
                fill="none"
                stroke={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.2)`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Rotating Planets with Rings */}
      <div className="fixed inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ rotate: 0, scale: 0.8 }}
            animate={{ 
              rotate: 360,
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              rotate: { duration: Math.random() * 30 + 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.2)`}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.1)`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke={`rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, 0.1)`}
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Animated Stars */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(300)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              scale: [
                Math.random() * 1.5,
                Math.random() * 1.5,
                Math.random() * 1.5
              ],
              opacity: [
                Math.random() * 0.5 + 0.1,
                Math.random() * 0.5 + 0.1,
                Math.random() * 0.5 + 0.1
              ]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Subtle Shooting Stars */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Cosmic Dust */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-slate-700/20"
      >
        <div className="relative">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-slate-200"
              >
                Leard <span className="text-slate-400">Kalludra</span>
              </motion.h1>
              
              {/* Desktop Navigation */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex items-center space-x-8"
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-sm text-slate-400 hover:text-slate-200 transition-all duration-300 group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-full bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6 text-slate-200" /> : <Menu className="w-6 h-6 text-slate-200" />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pb-4 space-y-4 bg-slate-900/50 backdrop-blur-xl rounded-xl p-4"
                >
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center py-2 text-slate-400 hover:text-slate-200 transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  ))}
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
        className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 z-10"
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div variants={itemVariants} className="flex-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm"
              >
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 text-transparent bg-clip-text">
                  Welcome to my portfolio
                </span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 text-transparent bg-clip-text"
              >
                Hi, It's <span className="text-slate-400">Leard</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-slate-400 font-light"
              >
                Frontend Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0"
              >
                I'm a passionate developer who learned coding through structured education and dedicated practice. With guidance from experienced teachers and countless hours of hands-on practice at home, I've developed a strong foundation in web development. I love transforming ideas into elegant digital solutions and continuously improving my skills through real-world projects.
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
                  href="https://drive.google.com/uc?export=download&id=1YOUR_FILE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 text-slate-200 font-medium shadow-lg shadow-slate-800/20 hover:from-slate-600 hover:via-slate-700 hover:to-slate-600 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Download CV
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-slate-700 text-slate-200 font-medium hover:bg-slate-800/50 shadow-lg shadow-slate-800/10 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Contact Me
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
                    className={`p-3 sm:p-4 border-2 border-slate-700 bg-slate-800/50 rounded-full hover:bg-slate-800/70 transition-all duration-300 shadow-lg shadow-slate-800/10 ${link.color}`}
                  >
                    {React.cloneElement(link.icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex-1 flex justify-center md:justify-end"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-slate-900/30 to-black/30 rounded-full animate-pulse"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-700/20 via-slate-600/20 to-slate-700/20 rounded-full blur-md"></div>
                <motion.img
                  src={leardImage}
                  alt="Leard Kalludra"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-700/50 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute -inset-1 bg-gradient-to-br from-slate-700/10 via-slate-600/10 to-slate-700/10 rounded-full blur-xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="w-8 h-8 text-slate-400" />
              <h2 className="text-3xl font-bold text-slate-200">About Me</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-slate-400">
                  I'm a front-end developer who learned coding through structured education with experienced teachers and dedicated practice at home. I've built real-world applications like online doctor consultation platforms and second-hand clothing marketplaces. I'm passionate about creating meaningful web experiences and always eager to learn new technologies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { 
                    name: "React", 
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]">
                        <path fill="currentColor" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 17.25c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5z"/>
                        <path fill="currentColor" d="M12 5.25c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75S15.722 5.25 12 5.25zm0 11.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/>
                        <circle cx="12" cy="12" r="2.25" fill="currentColor"/>
                      </svg>
                    ),
                    color: "hover:bg-[#61DAFB]/10"
                  },
                  { 
                    name: "JavaScript", 
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7DF1E]">
                        <path fill="currentColor" d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-8.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
                      </svg>
                    ),
                    color: "hover:bg-[#F7DF1E]/10"
                  },
                  { 
                    name: "HTML/CSS", 
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#E34F26]">
                        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                      </svg>
                    ),
                    color: "hover:bg-[#E34F26]/10"
                  },
                  { 
                    name: "Tailwind", 
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#38B2AC]">
                        <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    ),
                    color: "hover:bg-[#38B2AC]/10"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-2 group ${item.color} transition-colors duration-300`}
                  >
                    {item.icon}
                    <span className="text-xs sm:text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
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
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-8 h-8 text-slate-400" />
              <h2 className="text-3xl font-bold text-slate-200">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { 
                  name: "React", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#61DAFB]">
                      <path fill="currentColor" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 17.25c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5z"/>
                      <path fill="currentColor" d="M12 5.25c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75S15.722 5.25 12 5.25zm0 11.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/>
                      <circle cx="12" cy="12" r="2.25" fill="currentColor"/>
                    </svg>
                  ),
                  color: "hover:bg-[#61DAFB]/10"
                },
                { 
                  name: "JavaScript", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7DF1E]">
                      <path fill="currentColor" d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-8.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
                    </svg>
                  ),
                  color: "hover:bg-[#F7DF1E]/10"
                },
                { 
                  name: "HTML", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#E34F26]">
                      <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  ),
                  color: "hover:bg-[#E34F26]/10"
                },
                { 
                  name: "CSS", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#264DE4]">
                      <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm9.75 3.75l-.232 2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  ),
                  color: "hover:bg-[#264DE4]/10"
                },
                { 
                  name: "Tailwind", 
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#38B2AC]">
                      <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  ),
                  color: "hover:bg-[#38B2AC]/10"
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`p-3 sm:p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-2 group ${skill.color} transition-colors duration-300`}
                >
                  {skill.icon}
                  <span className="text-xs sm:text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
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
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/20"
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <FolderGit className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-200">Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg p-4 border border-slate-700/50 h-full flex flex-col"
                >
                  {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <FolderGit className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                    <h3 className="text-base sm:text-lg font-semibold text-slate-200">{project.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs sm:text-sm rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-slate-700/50 my-3 sm:my-4"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-end"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-700/50 text-slate-200 hover:bg-slate-700/70 transition-colors duration-300 text-sm sm:text-base"
                    >
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Project
                    </a>
                  </motion.div>
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
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-700/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-200">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  const mailtoLink = `mailto:leardkalludra@gmail.com?subject=${encodeURIComponent(data.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message || ''}`)}`;
                  window.location.href = mailtoLink;
                }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-slate-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50 outline-none text-slate-200 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <label className="block text-slate-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50 outline-none text-slate-200 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <label className="block text-slate-400 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50 outline-none text-slate-200 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <label className="block text-slate-400 mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-slate-600 focus:ring-2 focus:ring-slate-600/50 outline-none text-slate-200 transition-all duration-300 resize-none"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-full bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition-all duration-300 shadow-lg shadow-slate-800/20"
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
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Get in Touch</h3>
                  <p className="text-slate-400 mb-6">Feel free to reach out to me through any of these channels:</p>
                </div>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 border-2 border-slate-700 bg-slate-800/50 rounded-full hover:bg-slate-800/70 transition-all duration-300 shadow-lg shadow-slate-800/10 ${link.color}`}
                  >
                    {React.cloneElement(link.icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                  </motion.a>
                ))}
                <div className="mt-6 text-center">
                  <p className="text-slate-400">Or send me an email at:</p>
                  <a 
                    href="mailto:leardkalludra@gmail.com" 
                    className="text-slate-200 hover:text-slate-300 transition-colors duration-300"
                  >
                    leardkalludra@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-12 px-6 bg-slate-900/50 backdrop-blur-xl border-t border-slate-700/20"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h3 className="text-xl font-bold text-slate-200">Leard Kalludra</h3>
              <p className="text-slate-400 text-center md:text-left max-w-md">
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
                    className={`p-3 border-2 border-slate-700 bg-slate-800/50 rounded-full hover:bg-slate-800/70 transition-all duration-300 shadow-lg shadow-slate-800/10 ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} Leard Kalludra. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Portfolio;