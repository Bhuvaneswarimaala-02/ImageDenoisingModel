import React, { useState, useRef } from "react";
import p5 from "p5";
import "../styles/ProcessImage.css"; // Assuming you have this file for styling

const ProcessImage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setUploadedImage(img);
      };
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Apply image processing (Edge detection example)
  const applyEffects = () => {
    if (!uploadedImage) return;

    const sketch = (p) => {
      let img;

      p.setup = () => {
        p.createCanvas(uploadedImage.width, uploadedImage.height, p.WEBGL);
        img = p.loadImage(uploadedImage.src, () => {
          p.image(img, -uploadedImage.width / 2, -uploadedImage.height / 2);
        });
      };

      p.draw = () => {
        if (img) {
          p.clear();
          p.image(img, -uploadedImage.width / 2, -uploadedImage.height / 2);
          p.filter(p.EDGE_DETECT);
        }
      };
    };

    new p5(sketch, canvasRef.current);
  };

  return (
    <div className="process-image-container">
      <h1 className="heading">Process Image</h1>
      <div className="image-sections">
        <div className="uploaded-image-section">
          <input type="file" onChange={handleImageUpload} accept="image/*" />
          {uploadedImage && (
            <>
              <h2 className="image-title">Uploaded Image</h2>
              <img src={uploadedImage.src} alt="Uploaded" className="uploaded-image" />
            </>
          )}
          <button onClick={applyEffects} className="apply-effects-btn">
            Apply Effects
          </button>
        </div>
        <div className="processed-image-section">
          <h2 className="processed-image-title">Processed Image</h2>
          <div ref={canvasRef} className="processed-canvas"></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessImage;
