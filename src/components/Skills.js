import React from 'react';
import './Skills.css';

const SkillCard = ({ title, skills }) => (
  <div className="skill-card">
    <h3>{title}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const webSkills = ['HTML', 'CSS', 'JS', 'React'];
  const toolSkills = ['Power BI', 'Google Sheets', 'Excel', 'WordPress', 'Notion', 'Canva', 'Slack'];
  const otherSkills = ['Technical support', 'Team communication'];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <SkillCard title="Web" skills={webSkills} />
          <SkillCard title="Tools" skills={toolSkills} />
          <SkillCard title="Other" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
