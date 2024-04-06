import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import T from "./components/T";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return (
    <>
      <div className="header">
        <h1>mogumo portfolio</h1>
      </div>
      <T />
			
			<div className="unity">
			<h1>Unity</h1>
        <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 }}
        />
      </div>
    </>
  );
}

export default App;
