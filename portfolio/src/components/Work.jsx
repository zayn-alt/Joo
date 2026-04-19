import { useRef } from 'react';
import { motion, useScroll, useTransform, LayoutGroup } from 'framer-motion';
import { portfolioConfig } from '../data/portfolio.config';

const Work = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="work" ref={containerRef} className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl mb-4">Selected Work</h2>
          <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
            {portfolioConfig.projects.length} Projects
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <LayoutGroup>
          <motion.div 
            style={{ opacity }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioConfig.projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`group relative overflow-hidden cursor-pointer ${
                  i % 5 === 0 ? 'md:col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-background/90 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <motion.h3
                    layoutId={`title-${project.title}`}
                    className="font-heading text-3xl mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="font-body text-foreground/70 mb-4 line-clamp-2"
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-foreground/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Subtle border */}
                <div 
                  className="absolute inset-0 border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: portfolioConfig.theme.accentColor + '40' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Work;
