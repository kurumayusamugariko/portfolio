import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useState } from "react";
import "./App.css";
import T from "./components/T";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />

        {/* <T /> */}

        {/* <div className="unity">
			<h1>Unity</h1>
        <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 }}
        />
      </div> */}
      </Routes>
    </Router>
  );
}

export default App;
