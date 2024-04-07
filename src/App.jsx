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

  return (
		<div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
				<Route path="/history" element={<History />} />
				<Route path="/playground" element={<Playground />} />
				<Route path="/art" element={<Art />} />
        /{/* <T /> */}

        
      </Routes>
    </Router>
		</div>
  );
}

export default App;
