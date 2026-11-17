import React from "react";

export default function About() {
  return (
    <section className="section page-section">
      <p className="eyebrow">THE STUDENT PORTAL</p>
      <h1>About</h1>
      <div className="about-panel">
        <h2>Student Information Portal</h2>
        <p>
          The portal includes pages for viewing a list of students, exploring available academic programs, and providing information about the application itself. It showcases how to structure a React application with multiple pages and components.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Home page with an overview of the portal</li>
          <li>Student directory with individual student profiles</li>
          <li>Course catalog with details about academic programs</li>
          <li>Responsive design for various screen sizes</li>
        </ul>
      </div>
    </section>
  );
}
