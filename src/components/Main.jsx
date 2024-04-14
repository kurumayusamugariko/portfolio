import { Link } from "react-router-dom";
import "../css/Main.css";

function Main() {
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

      <div className="backgroundtext">
        <h1>HYPE</h1>
        <h1>MODE</h1>
      </div>
      <div
        className="background"
        style={{ backgroundImage: "url(eye.gif)", backgroundSize: "cover" }}
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
      <canvas width="960" height="540" id="myCanvas"></canvas>
    </div>
  );
}

export default Main;
