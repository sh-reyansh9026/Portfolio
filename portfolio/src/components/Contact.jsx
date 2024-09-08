// src/components/Contact.jsx
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="page"
  >
    <h1>Contact Me</h1>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <motion.button whileHover={{ scale: 1.1 }} type="submit">Send</motion.button>
    </form>
  </motion.div>
);

export default Contact;
