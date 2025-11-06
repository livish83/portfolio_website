import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, ArrowRight, Code2, Briefcase, User, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const skills = [
    { category: 'Languages', items: ['Java', 'Python', 'JavaScript'] },
    { category: 'Backend', items: ['Spring Boot', 'Flask', 'REST APIs'] },
    { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind'] },
    { category: 'Databases', items: ['MySQL', 'Neo4j', 'Apache Solr'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Postman'] },
    { category: 'Concepts', items: ['OOP', 'Data Structures', 'CI/CD'] }
  ];

  const projects = [
    {
      id: 'project1',
      title: 'Power Usage Monitoring',
      subtitle: 'Energy Management Solution',
      description: 'Python-based solution analyzing power meter data for retail shops with anomaly detection.',
      features: ['Daily pattern recognition', 'Anomaly detection', 'Real-time alerts', 'Energy optimization'],
      tech: ['Python', 'Data Analysis', 'Automation'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'project2',
      title: 'Enterprise Backend System',
      subtitle: 'Scalable Java Application',
      description: 'Spring Boot microservices architecture with advanced search and graph database integration.',
      features: ['Microservices', 'REST APIs', 'Database optimization', 'CI/CD pipeline'],
      tech: ['Spring Boot', 'Neo4j', 'Apache Solr', 'AWS'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed w-full bg-slate-950 bg-opacity-80 backdrop-blur-xl z-50 border-b border-slate-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              LK
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden pb-4 space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-2 px-4 text-gray-300 hover:text-blue-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Avatar */}
            <motion.div
              className="mb-8 flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                LK
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-6xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Livish Kumar P
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl text-cyan-400 mb-4 font-semibold"
              variants={itemVariants}
            >
              Junior Java Developer & Full Stack Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Building scalable enterprise applications with Spring Boot. Passionate about software development, network security, and creating innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              variants={itemVariants}
            >
              {[
                { icon: Phone, label: 'Call', href: 'tel:+919363254736' },
                { icon: Mail, label: 'Email', href: 'mailto:livishkumarlk83@gmail.com' },
                { icon: Github, label: 'GitHub', href: 'http://github.com/livishkumar' },
                { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/livish-kumar53716728a' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-full transition"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-cyan-400">Professional Profile</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a dedicated Computer Science Engineering student with hands-on experience in enterprise software development. Currently working as a Junior Java Developer at Nectar IT, where I develop scalable applications using Spring Boot and modern technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans backend development, database optimization, and cloud deployment. I'm passionate about building robust systems and exploring network security.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { title: 'B.Tech Computer Science', org: 'R P Sarathy Institute of Technology', year: '2021 - 2025', cgpa: 'CGPA: 7.5' },
                { title: 'Higher Secondary Certificate', org: 'Model School', year: '2020 - 2021', cgpa: 'Percentage: 61%' }
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-slate-900 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-2">{edu.title}</h4>
                    <p className="text-gray-400 text-sm mb-1">{edu.org}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{edu.year}</span>
                      <span>{edu.cgpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition group"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: '#06b6d4' }}
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4 group-hover:text-blue-300 transition">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-cyan-400" size={28} />
                  <h3 className="text-2xl font-bold text-cyan-400">Junior Java Developer</h3>
                </div>
                <p className="text-gray-400 text-lg">Nectar IT</p>
              </div>
              <span className="text-blue-400 font-semibold text-lg">June 2025 - Present</span>
            </div>

            <motion.div
              className="space-y-4 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                'Develop and maintain scalable Java applications utilizing Spring Boot framework for enterprise backend services',
                'Design and implement database solutions using Apache Solr and Neo4j for advanced search and graph modeling',
                'Collaborate in Agile/Scrum environment with daily stand-ups and iterative development cycles',
                'Configure and deploy Java applications to production servers with CI/CD pipelines',
                'Debug and resolve software defects, improving application performance and reducing downtime'
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <motion.div
                  className={`bg-gradient-to-br ${project.color} p-0.5 rounded-2xl h-full`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-slate-900 p-8 rounded-2xl h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.subtitle}</p>
                      </div>
                      <Code2 className="text-cyan-400 flex-shrink-0" size={28} />
                    </div>

                    <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                    <motion.button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-blue-300 transition mb-6 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      {expandedProject === project.id ? 'Hide Details' : 'View Details'}
                      <ChevronDown
                        size={20}
                        className={`transform transition ${expandedProject === project.id ? 'rotate-180' : ''}`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          className="space-y-4 pt-6 border-t border-slate-700"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <div>
                            <h4 className="font-semibold text-blue-300 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, fidx) => (
                                <li key={fidx} className="flex gap-2 text-gray-300 text-sm">
                                  <span className="text-cyan-400">✓</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-300 mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, tidx) => (
                                <span key={tidx} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Have a project in mind? Let's build something amazing together.
          </motion.p>

          <motion.form
            onSubmit={handleFormSubmit}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition text-white"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition text-white"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
              <label className="block text-sm font-semibold text-cyan-400 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition text-white h-32 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              {formSubmitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Quick Links */}
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: Mail, label: 'Email', value: 'livishkumarlk83@gmail.com', href: 'mailto:livishkumarlk83@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 9363254736', href: 'tel:+919363254736' },
              { icon: Github, label: 'GitHub', value: 'github.com/livishkumar', href: 'http://github.com/livishkumar' }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition text-center group"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition" size={28} />
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition">{contact.value}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Livish Kumar P. All rights reserved.</p>
        <p className="mt-2 text-sm">Languages: Tamil (Native) | English (Professional)</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;