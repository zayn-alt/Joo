import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolio.config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'GitHub', url: portfolioConfig.social.github },
    { name: 'LinkedIn', url: portfolioConfig.social.linkedin },
    { name: 'Twitter', url: portfolioConfig.social.twitter },
    { name: 'Instagram', url: portfolioConfig.social.instagram }
  ];

  return (
    <section id="contact" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl mb-4">Get In Touch</h2>
          <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
            Let's Create Together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl mb-4">Have a project in mind?</h3>
              <p className="font-body text-lg text-foreground/70 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities 
                to be part of your visions. Let's turn your concept into something extraordinary.
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-2">
                Email
              </p>
              <a 
                href={`mailto:${portfolioConfig.contactEmail}`}
                className="font-heading text-2xl hover:text-accent transition-colors duration-300"
              >
                {portfolioConfig.contactEmail}
              </a>
            </div>

            {/* Social links with animated underline */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-4">
                Follow
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative font-mono text-sm uppercase tracking-wider overflow-hidden pb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {social.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-accent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:border-accent outline-none transition-colors duration-300 peer"
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-sm uppercase tracking-wider ${
                  formData.name 
                    ? '-top-3 bg-background px-2 text-accent text-xs' 
                    : 'top-4 text-foreground/60'
                } peer-focus:-top-3 peer-focus:bg-background peer-focus:px-2 peer-focus:text-accent peer-focus:text-xs`}
              >
                Name
              </label>
            </div>

            {/* Email field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:border-accent outline-none transition-colors duration-300 peer"
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-sm uppercase tracking-wider ${
                  formData.email 
                    ? '-top-3 bg-background px-2 text-accent text-xs' 
                    : 'top-4 text-foreground/60'
                } peer-focus:-top-3 peer-focus:bg-background peer-focus:px-2 peer-focus:text-accent peer-focus:text-xs`}
              >
                Email
              </label>
            </div>

            {/* Message field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder=" "
                className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:border-accent outline-none transition-colors duration-300 peer resize-none"
              />
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-sm uppercase tracking-wider ${
                  formData.message 
                    ? '-top-3 bg-background px-2 text-accent text-xs' 
                    : 'top-4 text-foreground/60'
                } peer-focus:-top-3 peer-focus:bg-background peer-focus:px-2 peer-focus:text-accent peer-focus:text-xs`}
              >
                Message
              </label>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
              className="relative w-full py-4 border border-foreground/30 hover:border-accent hover:text-accent transition-colors duration-300 font-mono text-sm uppercase tracking-wider overflow-hidden group"
            >
              <span className={`transition-opacity duration-300 ${isSubmitting || submitted ? 'opacity-0' : 'opacity-100'}`}>
                Send Message
              </span>
              
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full"
                  />
                </motion.div>
              )}
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center text-accent"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
