import React from 'react';

const SkillCard = ({ title, skills }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const webSkills = ['HTML', 'CSS', 'JS', 'Tailwind', 'React'];
  const toolSkills = ['Power BI', 'Google Sheets', 'Excel', 'WordPress', 'Notion', 'Canva', 'Slack'];
  const otherSkills = ['Technical support', 'Team communication'];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Web" skills={webSkills} />
          <SkillCard title="Tools" skills={toolSkills} />
          <SkillCard title="Other" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
