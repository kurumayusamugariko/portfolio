import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="contents">
        <p>I am a web developer.</p>
      </div>
      <Link to="/">
        <img src="portfolio.png" width="10%" />
      </Link>
    </div>
  );
}

export default About;
