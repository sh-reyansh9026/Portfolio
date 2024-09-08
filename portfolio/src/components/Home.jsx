// src/components/Home.jsx
import { motion } from 'framer-motion';
import Background from './Background';

const Home = () => {
  return (
    <div className="home-container">
      {/* Three.js animated background */}
      <Background />

      {/* Content overlay */}
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a passionate web developer with expertise in creating interactive,
          responsive, and visually stunning web applications.
        </p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="primary-btn"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="secondary-btn"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
