import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../css/Skill.css";

const skills = [
  { title: 'HTML/CSS',
	description: 'WebサイトやWebアプリの制作に使用<br />メンターとして中高生のサポートも' },
  { title: 'JavaScript', description: '一番よく使用するプログラミング言語<br />最近ではハッカソンでReactやVue.jsでもWebアプリを制作' },
  { title: 'C', description: '学校の授業やインターンで使用<br />Arduino楽しかった' },
  { title: 'PHP', description: '学校の授業で使用<br />SQLを使って簡単な掲示板を制作' },
  { title: 'Python', description: '学校の授業やインターンで使用<br />アルゴリズムの勉強に使用' },
  { title: 'Java', description: '学校の授業で使用<br />すごろくゲームを作った' },
  { title: 'SQL', description: '授業やハッカソンでWebサイトやWebアプリの制作に使用' },
  { title: 'Docker', description: 'Google Cloud Platform関連で使用。<br />デプロイはできたけどまだ理解が浅いので勉強中。' },
	{ title: 'Firebase', description: 'Webアプリの制作で使用<br />ログインやユーザー管理にとても便利' },
	{ title: 'ibisPaint X', description: '細々とイラスト制作中<br />クリップスタジオ憧れる' },
];

function Skill() {
	const [selectedSkill, setSelectedSkill] = useState(null);

  const handleClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };
	
  return (
    <div className="about">
			<div className="title">
      	<h3>- Skill -</h3>
			</div>
			<div className="skill">
      {skills.map((skill, index) => (
        <div key={index}>
          <h4 className="title" onClick={() => handleClick(skill)}>{skill.title}</h4>
          {selectedSkill === skill && <div className="description" dangerouslySetInnerHTML={{ __html: skill.description }} />}
        </div>
      ))}
			</div>
      <Link to="/" className="toHome">
        <img src="portfolio.png" width="10%" />
      </Link>
    </div>
  );
}

export default Skill;