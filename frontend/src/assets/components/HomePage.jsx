import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const HomePage = () => {
  const [showContent, setShowContent] = useState(false); // To control the visibility of carousel and content

  const handleGetStarted = () => {
    setShowContent(true); // Show carousel and content when the button is clicked
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      backgroundColor: "#EDF2F7", // Light Gray background
      overflow: "auto",
      margin: "0 auto", 
    },
    title: {
      fontSize: "3rem",
      color: "#2D3748", // Charcoal Gray
      marginBottom: "20px",
      textAlign:"center",

    },
    description: {
      fontSize: "1.5rem",
      color: "#38B2AC", // Teal
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#38B2AC",
      color: "white",
      padding: "12px 24px",
      fontSize: "1.2rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginBottom: "30px",
    },
    carouselContainer: {
      width: "80%",
      maxWidth: "1200px",
      marginTop: "20px",
    },
    section: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#F7FAFC", // Light background
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      width: "80%",
    },
    heading: {
      fontSize: "2rem",
      color: "#2D3748",
      marginBottom: "15px",
    },
    text: {
      fontSize: "1.2rem",
      color: "#4A5568",
      lineHeight: "1.8",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Enhanced Smart Image Denoising System</h1>
      <p style={styles.description}>Upload and process images with ease!</p>
      <button style={styles.button} onClick={handleGetStarted}>
        Get Started
      </button>

      {showContent && (
        <>
          {/* Carousel Section */}
          <div style={styles.carouselContainer}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                <img
                  src="https://myedit.online/seo_content/images/section_05/denoise_01.webp"
                  alt="Denoising Example 1"
                />
              </div>
              <div>
                <img
                  src="https://cdn.fstoppers.com/styles/full/s3/media/2022/08/17/alex-armitage-ai-noise-reduction-natural-bridge.jpg"
                  alt="Denoising Example 2"
                />
              </div>
              <div>
                <img
                  src="https://ugc.futurelearn.com/uploads/images/a8/fc/a8fc5b56-d1ca-466f-a159-2ab9fde364ac.jpg"
                  alt="Denoising Example 3"
                />
              </div>
              <div>
                <img
                  src="https://myedit.online/cover/denoise_cover.jpg?version=11"
                  alt="Denoising Example 4"
                />
              </div>
              <div>
                <img
                  src="https://blogs.nvidia.com/wp-content/uploads/2022/11/denoising-3.jpg"
                  alt="Denoising Example 5"
                />
              </div>
            </Carousel>
          </div>

          {/* Importance of Image Denoising */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Why is Image Denoising Important?</h2>
            <p style={styles.text}>
              Image denoising plays a crucial role in enhancing the quality of images by reducing noise, which often
              arises from poor lighting, high ISO settings, or sensor limitations. Clearer images lead to better
              analysis, improved decision-making, and more accurate outcomes in various fields.
            </p>
          </div>

          {/* Applications of Denoising */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Applications of Image Denoising</h2>
            <p style={styles.text}>
              - **Medical Imaging**: Enhances clarity in MRI and CT scans for accurate diagnosis.
              <br />
              - **Photography**: Produces high-quality, noise-free photographs.
              <br />
              - **Security**: Improves surveillance footage for better visibility in low light.
              <br />
              - **Astronomy**: Removes noise from telescope images, revealing celestial details.
            </p>
          </div>

          {/* Benefits of Denoising */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Benefits of Image Denoising</h2>
            <p style={styles.text}>
              - Enhances image quality and detail clarity.
              <br />
              - Reduces artifacts and improves focus on critical areas.
              <br />
              - Enables better storage and transmission of data.
            </p>
          </div>

          {/* Advancements in Denoising Technology */}
          <div style={styles.section}>
            <h2 style={styles.heading}>Advancements in Denoising Technology</h2>
            <p style={styles.text}>
              Recent advancements in AI and machine learning have revolutionized denoising techniques. Models like
              convolutional neural networks (CNNs) and generative adversarial networks (GANs) now enable real-time
              denoising with exceptional accuracy, transforming industries such as healthcare, film production, and
              remote sensing.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
