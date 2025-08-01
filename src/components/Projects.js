import React from 'react';

const ProjectCard = ({ title, description, inProgress }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {inProgress && <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">In Progress</span>}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    { title: 'Chatbot Project', description: 'A personal chatbot web app with documentation.', inProgress: false },
    { title: 'HSMS', description: 'Health Services Management System for clinics (school project).', inProgress: true },
    { title: 'Dashboard Templates', description: 'General dashboards built using Power BI or Google Sheets.', inProgress: false },
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
