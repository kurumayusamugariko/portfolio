import React, { useRef, useState } from "react";
import useSound from "use-sound";
import Soundurl from "../../public/metametamonmon.m4a";
import { Link } from "react-router-dom";
import "../css/Art.css";

function Art() {
  const [play, { stop, pause }] = useSound(Soundurl);

  return (
    <div className="art">
      <h3>Art Work</h3>
      <div style={{ marginBottom: 20 }}>
        <p>My art work</p>
        <p>Comming soon...</p>
        <p>もんもん　めたもん　ドコドコmix</p>
        <button id="audioBtn" onClick={() => play()}>音を鳴らす</button>
        <button id="audioBtn" onClick={() => stop()}>停止</button>
        <button id="audioBtn" onClick={() => pause()}>ポーズ</button>
      </div>
      <Link to="/">
        <img src="portfolio.png" width="50px" className="toHome" />
      </Link>
    </div>
  );
}

export default Art;
