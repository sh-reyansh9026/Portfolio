import React from 'react';
import './styles/main.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
