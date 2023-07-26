import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Lesson from "./Lesson";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lesson/:id" element={<Lesson />} /> {/* Changed here */}
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
