import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects"
import NotFoundPage from "./Components/404PageNotFound/NotFoundPage";
import { Experience } from "./Pages/Experience/Experience";
import Dsa from "./Pages/DSA/Dsa";
import PdfViewer from "./Pages/PDF/PdfViewer";
import DSA_Answer from "./Pages/DSA_Answer/DSA_Answer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/pdf/:pdf" element={<PdfViewer />} />
          <Route path="/:topic/:question/question" element={<DSA_Answer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
