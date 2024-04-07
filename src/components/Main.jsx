import { Link } from "react-router-dom";
import "../css/Main.css";

function Main() {
  return (
    <div className="main">
      <h1>Hello World</h1>
      <div className="contents">
        <ul>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
					<Link to="/skill">Skill</Link>
          </li>
          <li>
					<Link to="/history">History</Link>
          </li>
          <li>
					<Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
