import { Link } from "react-router-dom";
import "../css/Main.css";
import About from "./About";

function Main() {
  return (
    <div className="main">
      <h3>welcome to my portfolio</h3>
			
      <div className="contents">
        <ul>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/history">History & Work</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
					<li>
            <Link to="/art">Art Work</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
