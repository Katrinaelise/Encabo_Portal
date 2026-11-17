import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <section className="empty-state">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>Student Information Portal</p>
      </footer>
    </>
  );
}

