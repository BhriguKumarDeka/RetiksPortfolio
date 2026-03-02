import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Layout,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Globe,
  Quote,
  Sun,
  Moon,
  Send,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Animation variants
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Data
  const services = [
    {
      icon: <Layout size={24} />,
      title: 'UI/UX Design',
      desc: 'Crafting intuitive, beautiful interfaces with modern design principles and user-centered methodologies.'
    },
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      desc: 'Building performant, responsive web applications using cutting-edge technologies and frameworks.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Landing Pages',
      desc: 'High-converting landing pages that capture attention and turn visitors into customers.'
    }
  ];

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      date: 'Jan 2024 — Present',
      desc: 'Building modern web applications and digital experiences for diverse clients worldwide.'
    },
    {
      role: 'Frontend Developer',
      company: 'Open Source',
      date: 'Sep 2023 — Present',
      desc: 'Contributing to open-source projects, crafting reusable components and design systems.'
    },
    {
      role: 'UI/UX Designer',
      company: 'Personal Projects',
      date: 'Jun 2023 — Present',
      desc: 'Designing intuitive user interfaces and creating comprehensive design systems.'
    },
    {
      role: 'Web Developer',
      company: 'Academic Projects',
      date: 'Jan 2023 — Dec 2023',
      desc: 'Developed full-stack applications as part of university coursework and hackathons.'
    }
  ];

  const projects = [
    {
      tag: 'Web App',
      title: 'Food Delivery Solution',
      desc: 'Complete food ordering platform with real-time tracking and payment integration.',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
      filter: 'Web App'
    },
    {
      tag: 'Dashboard',
      title: 'Analytics Dashboard',
      desc: 'Data visualization dashboard with interactive charts and real-time metrics.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      filter: 'Dashboard'
    },
    {
      tag: 'Landing Page',
      title: 'SaaS Product Page',
      desc: 'High-converting landing page for a productivity SaaS platform.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      filter: 'Landing Page'
    },
    {
      tag: 'Web App',
      title: 'Mental Health Platform',
      desc: 'Wellness app with counselling, exercises, and community features.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      filter: 'Web App'
    },
    {
      tag: 'Landing Page',
      title: 'Portfolio Template',
      desc: 'Modern portfolio template with dark/light themes and animations.',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
      filter: 'Landing Page'
    },
    {
      tag: 'Dashboard',
      title: 'E-Commerce Admin',
      desc: 'Comprehensive admin panel for managing products, orders, and analytics.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
      filter: 'Dashboard'
    }
  ];

  const testimonials = [
    {
      text: 'Retik delivered an outstanding website that exceeded all our expectations. His attention to detail and creative approach made the project a huge success.',
      name: 'Sarah Johnson',
      title: 'CEO, TechStart',
      initials: 'SJ'
    },
    {
      text: 'Working with Retik was a fantastic experience. He understood our vision perfectly and translated it into a beautiful, functional web application.',
      name: 'Mike Chen',
      title: 'Product Manager, DesignCo',
      initials: 'MC'
    }
  ];

  const blogPosts = [
    {
      date: 'Feb 15, 2026',
      title: 'Design Increased Robust Reliability Software',
      desc: 'A deep dive into creating resilient design systems that scale.',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: 'Jan 28, 2026',
      title: 'Repeat And Portfolio In Staffing Software',
      desc: 'How to build a standout developer portfolio that gets noticed.',
      img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: 'Jan 10, 2026',
      title: 'Media & Insights: Unleashing the Power of Data',
      desc: 'Leveraging analytics for better design decisions.',
      img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const filters = ['All', 'Web App', 'Landing Page', 'Dashboard'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filter === activeFilter);

  return (
    <div className={`portfolio-bg ${theme}-theme`}>
      {/* ═══ NAVBAR ═══ */}
      <header className="navbar container">
        <div className="logo">RetiX</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* ═══ HERO SECTION ═══ */}
      <section className="hero-section container" id="home">
        <motion.div
          className="hero-grid"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text-block" variants={fadeUp}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Hello!
            </div>
            <h1 className="hero-title">
              I'm <span className="accent">Retik,</span>
            </h1>
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-description">
              I craft beautiful, high-performance web applications and digital
              experiences that leave a lasting impression.
            </p>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <div className="stat-number">10<span className="accent">+</span></div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">125<span className="accent">+</span></div>
                <div className="stat-label">Contributions</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">1<span className="accent">+</span></div>
                <div className="stat-label">Years Exp</div>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary">
                Portfolio <ArrowRight size={16} />
              </button>
              <button className="btn-outline">
                Hire Me
              </button>
            </div>
          </motion.div>

          <motion.div className="hero-image-block" variants={scaleIn}>
            <div className="hero-img-container">
              <img src="My_Photo.jpg" alt="Retik Kumar Yadav" />
            </div>
            <motion.div
              className="hero-float-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="float-number">10+</div>
              <div className="float-label">Projects</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ SERVICES SECTION ═══ */}
      <section className="services-section" id="services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Services</span>
              <h2>My <span className="accent">Services</span></h2>
            </div>
            <p>
              I focus on all areas of web design and development to bring
              your ideas to life with clean, modern solutions.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div className="service-card" key={i} variants={fadeUp}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ EXPERIENCE SECTION ═══ */}
      <section className="experience-section" id="experience">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Experience</span>
              <h2>My Work <span className="accent">Experience</span></h2>
            </div>
          </motion.div>

          <motion.div
            className="experience-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, i) => (
              <motion.div className="experience-card" key={i} variants={fadeUp}>
                <div className="exp-marker">
                  <div className="exp-dot"></div>
                  <div className="exp-line"></div>
                </div>
                <div className="exp-content">
                  <h3>{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-date">{exp.date}</div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Why You <span className="italic">Hire Me</span> for<br />
              Your Next Projects?
            </h2>
            <p>
              Delivering pixel-perfect, performant web solutions with a keen eye
              for design and commitment to quality code.
            </p>
            <div className="cta-stats-row">
              <div className="cta-stat">
                <div className="cta-number">800+</div>
                <div className="cta-label">Hours Coding</div>
              </div>
              <div className="cta-stat">
                <div className="cta-number">98%</div>
                <div className="cta-label">Satisfaction</div>
              </div>
              <div className="cta-stat">
                <div className="cta-number">24/7</div>
                <div className="cta-label">Support</div>
              </div>
            </div>
            <button className="btn-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire Me <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROJECTS SECTION ═══ */}
      <section className="projects-section" id="portfolio">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Portfolio</span>
              <h2>Let's Have a Look at<br />my <span className="accent">Portfolio</span></h2>
            </div>
            <a href="#" className="btn-outline" style={{ fontSize: '13px', padding: '10px 24px' }}>
              See All <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <div className="projects-filter">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div
            className="projects-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, i) => (
                <motion.div
                  className="project-card"
                  key={project.title}
                  variants={fadeUp}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="project-img-wrapper">
                    <img src={project.img} alt={project.title} />
                    <div className="project-overlay">
                      <a href="#" className="project-link">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tag">{project.tag}</div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Testimonials</span>
              <h2>Testimonials that<br />Speak to <span className="accent">My Results</span></h2>
            </div>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div className="testimonial-card" key={i} variants={fadeUp}>
                <Quote size={32} className="quote-icon" />
                <p>"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <span>{t.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ MARQUEE STRIP ═══ */}
      <div className="marquee-section">
        <div className="marquee-track">
          <span>Design</span>
          <span>App Design</span>
          <span>Dashboard</span>
          <span>Wireframe</span>
          <span>User Flow</span>
          <span>Design</span>
          <span>App Design</span>
          <span>Dashboard</span>
          <span>Wireframe</span>
          <span>User Flow</span>
        </div>
      </div>

      {/* ═══ BLOG SECTION ═══ */}
      <section className="blog-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Blog</span>
              <h2>From my<br /><span className="accent">Blog Post</span></h2>
            </div>
          </motion.div>

          <motion.div
            className="blog-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, i) => (
              <motion.div className="blog-card" key={i} variants={fadeUp}>
                <div className="blog-img-wrapper">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CONNECT / CONTACT ═══ */}
      <section className="connect-section" id="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Contact</span>
              <h2>Let's <span className="accent">Connect</span> Here</h2>
            </div>
          </motion.div>

          <motion.div
            className="connect-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="connect-text">
              <h2>Have An Awesome Project<br />Idea? <span className="accent">Let's Discuss</span></h2>
              <p>
                Whether you need a website, web application, or digital product,
                I'm here to help bring your vision to life with clean code and
                stunning design.
              </p>
              <div className="social-links">
                <a href="https://github.com/Retik29" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="mailto:rk@example.com" className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <form className="connect-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Your Message"></textarea>
              <button className="btn-primary" type="submit" style={{ alignSelf: 'flex-start' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="logo">RetiX</div>
            <nav>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Works</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© 2026 RetiX. All rights reserved by Retik29</p>
            <div className="footer-socials">
              <a href="https://github.com/Retik29" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
