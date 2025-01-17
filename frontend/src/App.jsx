import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import ProcessImage from "./assets/pages/ProcessImage";
import AboutPage from "./assets/components/AboutPage";
import ContactPage from "./assets/components/ContactPage";
import "./assets/styles/Global.css"; // Import global styles

const App = () => {
  return (
    <Router>
      {/* Navigation Bar with consistent styling */}
      <nav style={styles.navbar}>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/process-image" style={styles.navLink}>Process Image</Link>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </div>
      </nav>

      {/* Routes for different pages */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/process-image" element={<ProcessImage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

// Styles for consistent navbar and layout
const styles = {
  navbar: {
    backgroundColor: "#2D3748", // Dark gray background
    padding: "10px 20px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000, // Keeps navbar on top of the content
  },
  navLinks: {
    display: "flex",
    justifyContent: "center", // Center navigation links
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "8px 12px",
    transition: "background-color 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#38B2AC", // Teal hover color
    borderRadius: "5px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Vertically center the content
    alignItems: "center", // Horizontally center the content
    paddingTop: "60px", // Offset for the fixed navbar
    height: "calc(100vh - 60px)", // Make the content section take the remaining height
  },
};

export default App;
