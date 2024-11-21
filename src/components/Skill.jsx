import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Skill.css";
import ParticleComponent from "./ParticleComponents";

const skills = [
  {
    title: "HTML/CSS",
    description:
      "WebサイトやWebアプリの制作に使用<br />メンターとして中高生のサポートも",
    star: 3,
  },
  {
    title: "JavaScript",
    description:
      "ハッカソンでWebアプリを制作<br />ReactやVue.jsも勉強中",
    star: 2,
  },
  {
    title: "C",
    description: "学校の授業やインターンで使用<br />Arduino楽しかった",
    star: 1,
  },
  {
    title: "PHP",
    description: "学校の授業で使用<br />SQLを使って簡単な掲示板を制作",
    star: 1,
  },
  {
    title: "Python",
    description: "学校の授業やインターンで使用<br />アルゴリズムの勉強に使用",
    star: 1,
  },
  {
    title: "Java",
    description: "学校の授業で使用<br />すごろくゲームを作った",
    star: 1,
  },
  {
    title: "Swift",
    description: "ハッカソン用に使用<br />iOSアプリを制作",
    star: 1,
  },
  {
    title: "SQL",
    description: "Webアプリの制作に使用",
    star: 2,
  },
  {
    title: "Docker",
    description: "チーム開発で使用",
    star: 1,
  },
  {
    title: "Firebase",
    description:
      "Webアプリの制作で使用<br />ログインやユーザー管理にとても便利",
    star: 2,
  },
  {
    title: "ibisPaint X",
    description: "細々とイラスト制作中<br />クリップスタジオ憧れる",
    star: 2,
  },
];

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <div className="skillPage">
      <h3>- Skill -</h3>
      <div className="skill">
        {skills.map((skill, index) => (
          <div key={index}>
            <h4
              className="title"
              onClick={() => handleClick(skill)}
            >
              {skill.title}
              <div className="star">
                {Array(skill.star)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src="star.png" width="20px" alt="star" />
                  ))}
              </div>
            </h4>
            {selectedSkill === skill && (
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: skill.description }}
              />
            )}
          </div>
        ))}
      </div>
      <Link to="/" className="toHome">
        <img src="portfolio.png" width="10%" />
      </Link>
      <ParticleComponent />
    </div>
  );
}

export default Skill;
