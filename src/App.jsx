import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import T from "./components/T";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import History from "./components/History";
import Playground from "./components/Playground";
import Art from "./components/Art";

function App() {
	let particleSystem = null;
  let stage = null;
  //  ウィンドウのロードが終わり次第、初期化コードを呼び出す。
  window.addEventListener("load", function () {
    // Stageオブジェクトを作成します。表示リストのルートになります。
    stage = new createjs.Stage("myCanvas");

    // パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);

    // Particle Develop( http://ics-web.jp/projects/particle-develop/ ) から書きだしたパーティクルの設定を読み込む
    particleSystem.importFromJson(
      // パラメーターJSONのコピー＆ペースト ここから--
      {
        bgColor: "#00000",
        width: 690,
        height: 487,
        emitFrequency: 34,
        startX: 345,
        startXVariance: 36,
        startY: 244,
        startYVariance: 49,
        initialDirection: 0,
        initialDirectionVariance: 0,
        initialSpeed: 0.9,
        initialSpeedVariance: 0.1,
        friction: 0.008,
        accelerationSpeed: 0.331,
        accelerationDirection: 238.4,
        startScale: 0.44,
        startScaleVariance: 0.43,
        finishScale: 0.56,
        finishScaleVariance: 0,
        lifeSpan: 29,
        lifeSpanVariance: "27",
        startAlpha: "1",
        startAlphaVariance: "0",
        finishAlpha: "0",
        finishAlphaVariance: "0",
        shapeIdList: ["blur_circle"],
        startColor: {
          hue: 37,
          hueVariance: 360,
          saturation: "91",
          saturationVariance: 0,
          luminance: "56",
          luminanceVariance: "16",
        },
        blendMode: true,
        alphaCurveType: "0",
        VERSION: "1.0.0",
      }
    );

    // フレームレートの設定
    createjs.Ticker.framerate = 60;
    // requestAnimationFrameに従った呼び出し
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.addEventListener("tick", handleTick);
  });

  function handleTick() {
    //  マウス位置に従って、パーティクル発生位置を変更する
    particleSystem.startX = stage.mouseX;
    particleSystem.startY = stage.mouseY;

    // パーティクルの発生・更新
    particleSystem.update();

    // 描画を更新する
    stage.update();
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/history" element={<History />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/art" element={<Art />} />/{/* <T /> */}
        </Routes>
      </Router>
			<canvas width="960" height="540" id="myCanvas"></canvas>
    </div>
  );
}

export default App;
