import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../css/Skill.css";

const skills = [
  { title: 'HTML/CSS', description: 'HTMLとCSSの説明' },
  { title: 'JavaScript', description: 'JavaScriptの説明' },
  { title: 'C', description: 'Cの説明' },
  { title: 'PHP', description: 'PHPの説明' },
  { title: 'Python', description: 'Pythonの説明' },
  { title: 'Java', description: 'Javaの説明' },
  { title: 'SQL', description: 'SQLの説明' },
  { title: 'Docker', description: 'Dockerの説明' },
	{ title: 'ibisPaint X', description: 'ibisPaint Xの説明' },
];

function Skill() {
	const [selectedSkill, setSelectedSkill] = useState(null);

  const handleClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };
	
  return (
    <div className="about">
      <h3>Skill</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <h4 className="title" onClick={() => handleClick(skill)}>{skill.title}</h4>
          {selectedSkill === skill && <p className="description">{skill.description}</p>}
        </div>
      ))}
      <Link to="/" className="toHome">
        <img src="portfolio.png" width="10%" />
      </Link>
    </div>
  );
}

export default Skill;