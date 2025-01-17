import React from "react";

const ContactUs = () => {
  const members = [
    {
      name: "Lavanya R",
      phone: "+1 234 567 890",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg", // Replace with actual image URLs
    },
    {
      name: "Parvathi S R",
      phone: "+1 345 678 901",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    },
    {
      name: "Abinaya G",
      phone: "+1 456 789 012",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    },
    {
      name: "Dhanu Subramani R",
      phone: "+1 567 890 123",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    },
  ];

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", // Ensure everything is centered vertically and horizontally
      backgroundColor: "#EDF2F7", // Light gray background to match HomePage
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      color: "#2D3748", // Charcoal Gray
      marginBottom: "40px", // Add more space between title and cards
      fontWeight: "600", // Make title bold
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // Create 4 equal columns
      gap: "30px", // Increase gap for spacing between cards
      width: "100%",
      maxWidth: "1200px", // Limit the grid width for better organization
      justifyItems: "center", // Ensure cards are centered horizontally
      padding: "10px",
    },
    card: {
      backgroundColor: "#ffffff", // White background for cards to stand out
      borderRadius: "15px", // Softer rounded corners for a smoother look
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // A bit stronger shadow to highlight the cards
      textAlign: "center",
      padding: "30px", // Increase padding for more space inside the card
      width: "250px", // Set a fixed width for all cards to be the same size
      height: "350px", // Set a fixed height for all cards to be the same size
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // Space out the content inside the card
    },
    image: {
      width: "120px", // Larger image size for better visibility
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px", // More space between image and text
      alignSelf: "center", // Ensure the image is centered
    },
    name: {
      fontSize: "1.5rem", // Increase name font size for clarity
      color: "#2D3748",
      fontWeight: "600", // Make name bold
      marginBottom: "10px", // Add space below name
    },
    phone: {
      fontSize: "1.2rem",
      color: "#4A5568",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.grid}>
        {members.map((member, index) => (
          <div key={index} style={styles.card}>
            <img src={member.image} alt={member.name} style={styles.image} />
            <h2 style={styles.name}>{member.name}</h2>
            <p style={styles.phone}>{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
