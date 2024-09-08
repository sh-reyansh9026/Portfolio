// Projects.jsx
import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'An e-commerce website' },
    { title: 'Project 2', description: 'A chat application' },
    { title: 'Project 3', description: 'A portfolio website' }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-front">
              <h3>{project.title}</h3>
            </div>
            <div className="card-back">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
