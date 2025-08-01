import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, inProgress }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    {inProgress && <span className="in-progress">In Progress</span>}
  </div>
);

const Projects = () => {
  const projects = [
    { title: 'Chatbot Project', description: 'A personal chatbot web app with documentation.', inProgress: false },
    { title: 'HSMS', description: 'Health Services Management System for clinics (school project).', inProgress: true },
    { title: 'Dashboard Templates', description: 'General dashboards built using Power BI or Google Sheets.', inProgress: false },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
