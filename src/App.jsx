import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Camera,
  Layout,
  Pencil,
  Code,
  Sparkles,
  Plus,
  Sun,
  Moon
} from 'lucide-react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={`portfolio-bg ${theme}-theme`}>
      <header className="navbar container">
        <div className="logo">RetiX</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary">Let's talk</button>
        </div>
      </header>

      <main className="container">
        <motion.div
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Row 1 & 2 Left */}
          <motion.div className="card profile-card" variants={itemVariants}>
            <div className="profile-img-container">
              <img src="My_Photo.jpg" alt="Profile" />
            </div>
            <div className="profile-info">
              <p className="subtitle">A WEB DEVELOPER</p>
              <h1>Retik<br />Kumar Yadav.</h1>
              <p className="bio">I am a Full Stack Web Developer based in India.</p>
              <div className="card-footer-abs">
                <ArrowRight className="icon-btn" />
              </div>
            </div>
          </motion.div>

          {/* Row 1 Right */}
          <motion.div className="card marquee-card" variants={itemVariants}>
            <div className="marquee-container">
              <div className="marquee-content">
                <span>LATEST WORK AND FEATURED • BEST WORK AND FEATURED • LATEST WORK AND FEATURED • BEST WORK AND FEATURED •&nbsp;</span>
                <span>LATEST WORK AND FEATURED • BEST WORK AND FEATURED • LATEST WORK AND FEATURED • BEST WORK AND FEATURED •&nbsp;</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="card credentials-card" variants={itemVariants}>
            <div className="card-content">
              <div className="signature-img">
                <svg width="120" height="60" viewBox="0 0 120 60">
                  <path d="M10,45 Q30,15 50,45 T90,25 T110,35" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="card-bottom">
                <p className="label">MORE ABOUT ME</p>
                <h3>Credentials</h3>
              </div>
              <Plus className="plus-icon" />
            </div>
          </motion.div>

          <motion.div className="card projects-card" variants={itemVariants}>
            <div className="card-content">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" alt="Projects" className="preview-img" />
              <div className="card-bottom">
                <p className="label">SHOWCASE</p>
                <h3>Projects</h3>
              </div>
              <Plus className="plus-icon" />
            </div>
          </motion.div>

          {/* Row 2 Right (Under Credentials/Projects) */}
          <motion.div className="card gfonts-card" variants={itemVariants}>
            <div className="card-content">
              <div className="blog-icon-box">
                <div className="shape red"></div>
                <div className="shape blue"></div>
                <div className="shape yellow"></div>
              </div>
              <div className="card-bottom">
                <p className="label">BLOG</p>
                <h3>GFonts</h3>
              </div>
              <Plus className="plus-icon" />
            </div>
          </motion.div>

          <motion.div className="card services-card" variants={itemVariants}>
            <div className="card-content">
              <div className="services-icons">
                <Camera size={28} />
                <Layout size={28} />
                <Sparkles size={28} />
                <Code size={28} />
              </div>
              <div className="card-bottom">
                <p className="label">SPECIALIZATION</p>
                <h3>Services Offering</h3>
              </div>
              <Plus className="plus-icon" />
            </div>
          </motion.div>

          <motion.div className="card profiles-card" variants={itemVariants}>
            <div className="card-content">
              <div className="social-box">
                <div className="social-icon">
                  <Twitter size={20} />
                </div>
                <div className="social-icon">
                  <Github size={20} />
                </div>
              </div>
              <div className="card-bottom">
                <p className="label">STAY WITH ME</p>
                <h3>Profiles</h3>
              </div>
              <Plus className="plus-icon" />
            </div>
          </motion.div>

          {/* Row 3 - Full Width Stats and Connect */}
          <motion.div className="card stats-card" variants={itemVariants}>
            <div className="stats-grid">
              <div className="stat-item">
                <h2>0</h2>
                <p>YEARS<br />EXPERIENCE</p>
              </div>
              <div className="stat-item">
                <h2>+125</h2>
                <p>CONTRIBUTIONS<br />THROUGHOUT</p>
              </div>
              <div className="stat-item">
                <h2>+10</h2>
                <p>TOTAL<br />PROJECTS</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="card connect-card" variants={itemVariants}>
            <div className="connect-content">
              <Plus className="spark-icon" />
              <h1>Let's work <span>together.</span></h1>
              <div className="card-footer-abs">
                <ArrowRight className="icon-btn" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer className="footer container">
        <div className="logo">RetiX</div>
        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#works">WORKS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <p className="copyright">© All rights reserved by Retik29</p>
      </footer>
    </div>
  );
};

export default App;
