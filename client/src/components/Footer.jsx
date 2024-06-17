import React from "react";

const footerStyle = {
  backgroundColor: "#007bff",
  fontWeight: "bolder",
  color: "white",
  display: "flex",
  justifyContent: "center",
  padding: "1.5rem",
};

export default function Footer() {
  return (
    <div>
      <footer style={footerStyle}>Welcome to Rent & Ride</footer>
    </div>
  );
}
