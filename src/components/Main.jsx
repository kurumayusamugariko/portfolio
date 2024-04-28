import { Link } from "react-router-dom";
import ParticleComponent from "./ParticleComponents.jsx";
import "../css/Main.css";

function Main() {

  return (
    <div className="main">
      <h3>Welcome to my portfolio</h3>

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

			<div className="matrix">
				
			</div>

      <div
        className="background"
        style={{ backgroundImage: "url(portfolio3.png)", backgroundSize: "cover"}}
      ></div>
      <div className="dotcat">
        <img
          src="dotcat.gif"
          onClick={() => {
            let i = Math.floor(Math.random() * 6);
            console.log(i);
            if (i === 0) {
              Swal.fire({
                text: "最近はPhasmophobiaにお熱。",
                icon: "",
                imageUrl: "dotcat.gif",
              });
            } else if (i === 1) {
              Swal.fire({
                text: "推しが武道館行くらしい。",
                icon: "",
                imageUrl: "dotcat.gif",
              });
            } else if (i === 2) {
              Swal.fire({
                text: "僕の名前はだいふく。",
                icon: "",
                imageUrl: "dotcat.gif",
              });
            } else if (i === 3) {
              Swal.fire({
                text: "深夜部はカオス。だがそこがいい。",
                icon: "",
                imageUrl: "dotcat.gif",
              });
            } else if (i === 4) {
              Swal.fire({
                text: "ドット絵って落ち着くよね",
                icon: "",
                imageUrl: "dotcat.gif",
              });
            } else {
              Swal.fire({
                text: "カラフルにしてみる？",
                icon: "",
                confirmButtonText: "はい",
                cancelButtonText: "黒いのが落ち着く",
                showCancelButton: true,
                showCloseButton: true,
                imageUrl: "dotcat.gif",
              }).then((result) => {
                if (result.isConfirmed) {
                  document.body.style.backgroundImage =
                    "linear-gradient(rgba(162, 203, 240, 1) 10%, rgba(76, 207, 220, 0.5) 19%, rgba(66, 124, 251, 0.5) 29%, rgba(204, 135, 255, 0.5) 40%, rgba(249, 90, 163, 0.5) 54%, rgba(255, 34, 87, 0.5) 67%, rgba(255, 203, 214, 0.5) 82%, rgba(255, 249, 238, 1))";
                } else {
                  document.body.style.backgroundImage = "";
                }
              });
            }
          }}
        />
      </div>
      <ParticleComponent />
    </div>
  );
}

export default Main;
