import React from 'react';

function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'Responsive Web Design',
    'UI/UX Design',
    'Python',
    'BoothStrap'
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
