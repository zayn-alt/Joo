import { motion } from 'framer-motion';
import { portfolioConfig } from '../data/portfolio.config';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="py-32 md:py-48 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl mb-4">Expertise</h2>
          <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
            Tools & Technologies
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {portfolioConfig.skills.map((skill) => (
            <motion.div
              key={skill}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: portfolioConfig.theme.accentColor
              }}
              className="group p-4 border border-foreground/10 hover:bg-foreground/5 transition-colors duration-300 cursor-default"
            >
              <span className="font-mono text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 pt-12 border-t border-foreground/10"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '8+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + i * 0.1, 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="text-center md:text-left"
              >
                <p 
                  className="font-heading text-5xl md:text-6xl mb-2"
                  style={{ color: portfolioConfig.theme.accentColor }}
                >
                  {stat.number}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
