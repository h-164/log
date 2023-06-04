import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Main from "../src/page/Main.js";
import Log from "../src/page/Log.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </Router>
  );
}

export default App;
