import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <NavLink to="/" className="brand">
          <span className="brand-mark">S</span>
          <span>Student Portal</span>
        </NavLink>

        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/students" className={linkClass}>Students</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}