import React, { useRef, useState } from "react";
import useSound from "use-sound";
import Soundurl from "../../public/metametamonmon.m4a";
import { Link } from "react-router-dom";
import "../css/Art.css";
import ParticleComponent from "./ParticleComponents";

function Art() {
  const [play, { stop, pause }] = useSound(Soundurl);

  return (
    <div className="art">
      <h3>Art Work</h3>
      <div style={{ marginBottom: 20 }}>
        <p>My art work</p>
        <div className="artwork">
					<img src="sleep.png" width="150px" />
          <p>もんもん めたもん -ドコドコmix-</p>
          <img src="play.png" id="audioBtn" onClick={() => play()} />
          <img src="stop.png" id="audioBtn" onClick={() => stop()} />
          <img src="reset.png" id="audioBtn" onClick={() => pause()} />
        </div>
				<p>Comming soon...</p>
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
