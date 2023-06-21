import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Main from "../src/page/Main.js";
import Write from "../src/page/Write.js";
import Listening from "../src/page/Listening.js";
import Interests from "../src/page/Interests.js";
import Emotion from "../src/page/Emotion.js";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../src/style/sudol.theme.js";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/emotion" element={<Emotion />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
