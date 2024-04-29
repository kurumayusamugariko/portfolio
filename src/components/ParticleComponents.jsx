import React, { useEffect } from 'react';

export default function ParticleComponent() {
  useEffect(() => {
    let particleSystem = null;
    let stage = null;

    stage = new createjs.Stage("myCanvas");

    particleSystem = new particlejs.ParticleSystem();

    stage.addChild(particleSystem.container);

    particleSystem.importFromJson(
      {
        bgColor: "#00000",
        width: 690,
        height: 487,
        emitFrequency: 34,
        startX: 345,
        startXVariance: 26,
        startY: 244,
        startYVariance: 19,
        initialDirection: 0,
        initialDirectionVariance: 0,
        initialSpeed: 0.9,
        initialSpeedVariance: 0.1,
        friction: 0.008,
        accelerationSpeed: 0.11,
        accelerationDirection: 190.4,
        startScale: 0.15,
        startScaleVariance: 0.43,
        finishScale: 0.26,
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

    createjs.Ticker.framerate = 60;
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick() {
      particleSystem.startX = stage.mouseX;
      particleSystem.startY = stage.mouseY;

      particleSystem.update();

      stage.update();
    }
  }, []);

  return (
    <canvas id="myCanvas"></canvas>
  );
}