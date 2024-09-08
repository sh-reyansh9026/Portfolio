// src/components/Skills.jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="page"
  >
    <h1>Skills</h1>
    <motion.div variants={itemVariants}>
      <h2>JavaScript</h2>
    </motion.div>
    <motion.div variants={itemVariants}>
      <h2>React</h2>
    </motion.div>
    <motion.div variants={itemVariants}>
      <h2>Node.js</h2>
    </motion.div>
  </motion.div>
);

export default Skills;
