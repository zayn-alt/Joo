import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioConfig } from '../data/portfolio.config';

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl md:text-4xl italic leading-relaxed border-l-2 pl-6"
              style={{ borderColor: portfolioConfig.theme.accentColor }}
            >
              "{portfolioConfig.bio.quote}"
            </motion.blockquote>

            {/* Bio paragraphs */}
            <div className="space-y-6">
              {portfolioConfig.bio.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: i * 0.15, 
                    duration: 0.7, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="font-body text-lg leading-relaxed text-foreground/80"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right column - Parallax image */}
          <motion.div
            ref={imageRef}
            style={{ y }}
            className="relative aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10" />
            <img
              src={portfolioConfig.bio.image}
              alt={portfolioConfig.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Decorative frame */}
            <div 
              className="absolute inset-4 border z-20 pointer-events-none"
              style={{ borderColor: portfolioConfig.theme.accentColor + '40' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
