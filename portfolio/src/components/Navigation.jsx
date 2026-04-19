import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { portfolioConfig } from '../data/portfolio.config';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1 + i * 0.1, 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }
    })
  };

  const navLinks = ['About', 'Work', 'Skills', 'Contact'];

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 bg-background/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a 
            href="#"
            className="font-heading text-2xl font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {portfolioConfig.name.split(' ')[0]}
            <span style={{ color: portfolioConfig.theme.accentColor }}>.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-sm uppercase tracking-wider hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="absolute h-px bg-foreground w-full origin-left"
                animate={isOpen ? { rotate: 45, width: '100%' } : { rotate: 0, width: '100%' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ top: isOpen ? '50%' : '0%', translateY: isOpen ? '-50%' : '0%' }}
              />
              <motion.span
                className="absolute h-px bg-foreground w-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute h-px bg-foreground w-full origin-left"
                animate={isOpen ? { rotate: -45, width: '100%' } : { rotate: 0, width: '100%' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ bottom: isOpen ? '50%' : '0%', translateY: isOpen ? '50%' : '0%' }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-4xl hover:text-accent transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
