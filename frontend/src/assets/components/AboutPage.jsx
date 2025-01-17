import React from "react";
import "../styles/AboutPage.css"; // Import page-specific styles

const AboutPage = () => (
  <div className="about-page">
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Welcome to our app! We provide advanced algorithms to denoise images, detect edges, and enhance contrast to help you make your photos better and more appealing.
      </p>

      <div className="about-section">
        <h3 className="section-title">Our Mission</h3>
        <p className="section-description">
          We aim to simplify image enhancement for everyone. Our goal is to make powerful, AI-driven tools accessible to everyone, from beginners to professionals.
        </p>
      </div>

      <div className="about-section">
        <h3 className="section-title">Our Services</h3>
        <ul className="feature-list">
          <li>Image Denoising: Remove noise and improve image clarity.</li>
          <li>Edge Detection: Automatically identify and highlight edges.</li>
          <li>Contrast Enhancement: Improve image sharpness and visibility.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="section-title">Why Choose Us?</h3>
        <p className="section-description">
          Our technology is designed to enhance your photos in a matter of seconds, offering both simplicity and powerful features in one app.
        </p>
      </div>

      <div className="about-section">
        <h3 className="section-title">Our Values</h3>
        <p className="section-description">
          We value innovation, efficiency, and user satisfaction. We believe in creating easy-to-use tools that deliver high-quality results with minimal effort.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
