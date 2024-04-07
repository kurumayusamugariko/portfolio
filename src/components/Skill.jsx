import { Link } from "react-router-dom";

function Skill() {
  return (
    <div className="about">
      <h1>Skill</h1>
      <div className="contents">
        <p>I am a web developer.</p>
      </div>
      <Link to="/" className="toHome">
        <img src="portfolio.png" width="10%" />
      </Link>
    </div>
  );
}

export default Skill;