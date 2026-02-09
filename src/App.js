import React, { useState } from "react";
import "./App.css";

export default function KECGUVIApp() {
  const [currentPage, setCurrentPage] = useState("home");

  const Header = ({ theme }) => (
    <header className={`header ${theme}`}>
      <div className="container header-content">
        <div className="logo-box">
          <div className="logo-circle">{theme === "green" ? "K" : "G"}</div>
          <div>
            <h1>KEC × GUVI</h1>
            <p>Learn. Build. Succeed.</p>
          </div>
        </div>
        <nav>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("courses")}>Courses</button>
        </nav>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="page home-bg">
      <Header theme="green" />

      <section className="hero">
        <h2>
          Empowering <span>KEC</span> Students
        </h2>
        <p>
          Partnering with GUVI to provide world-class technical education and
          career opportunities
        </p>
      </section>

      <section className="features container">
        <div className="card">
          <h3>Expert Courses</h3>
          <p>Industry-relevant courses designed by experts</p>
        </div>
        <div className="card">
          <h3>Hands-on Projects</h3>
          <p>Build real-world projects and portfolios</p>
        </div>
        <div className="card">
          <h3>Career Support</h3>
          <p>Placement assistance & career guidance</p>
        </div>
      </section>

      <section className="cta">
        <h3>Ready to Start Your Journey?</h3>
        <p>Join thousands of KEC students learning with GUVI</p>
        <button onClick={() => setCurrentPage("courses")}>
          Explore Courses →
        </button>
      </section>

      <footer>© 2024 KEC × GUVI Partnership</footer>
    </div>
  );

  const CoursesPage = () => (
    <div className="page courses-bg">
      <Header theme="blue" />

      <section className="hero">
        <h2>
          Popular <span>Courses</span>
        </h2>
        <p>Choose from industry-leading programs</p>
      </section>

      <section className="courses container">
        {[
          "Full Stack Development",
          "Data Science & AI",
          "Cloud Computing",
          "Mobile App Development",
        ].map((course, i) => (
          <div key={i} className="course-card">
            <h3>{course}</h3>
            <p>Duration: 4–8 Months</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </section>

      <footer>© 2024 KEC × GUVI Partnership</footer>
    </div>
  );

  return currentPage === "home" ? <HomePage /> : <CoursesPage />;
}
