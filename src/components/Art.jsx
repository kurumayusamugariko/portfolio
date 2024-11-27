import { Link } from "react-router-dom";
import "../css/Art.css";
import ParticleComponent from "./ParticleComponents";

function Art() {
  const audio = new Audio('/metametamonmon.m4a');

  return (
    <div className="art">
      <h3>Art Work</h3>
      <div style={{ marginBottom: 20 }}>
        <div className="artwork">
					<img src="sleep.png" width="150px" />
          <p>もんもん めたもん -ドコドコmix-</p>
          <img src="play.png" id="audioBtn" onClick={() => audio.play()} />
          <img src="stop.png" id="audioBtn" onClick={() => audio.pause()} />
          <img src="reset.png" id="audioBtn" onClick={() => {
            audio.pause();
            audio.currentTime=0;
            }} />
					<p></p>
					<a href="../../public/metametamonmon.m4a" download>Download</a>
        </div>
				
				<p></p>
      </div>
      <Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
			<ParticleComponent />
    </div>
  );
}

export default Art;
