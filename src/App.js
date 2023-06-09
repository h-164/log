import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Main from "../src/page/Main.js";
import Write from "../src/page/Write.js";
import Listening from "../src/page/Listening.js";
import Interests from "../src/page/Interests.js";
import Emotion from "../src/page/Emotion.js";
import HashTag from "../src/page/HashTag.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/emotion" element={<Emotion />} />
        <Route path="/hashtag" element={<HashTag />} />
      </Routes>
    </Router>
  );
}

export default App;
