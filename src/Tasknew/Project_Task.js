
import React from "react";

function Project() {
  return (
    <div style={{
      backgroundColor: "#EAF4FB",
      minHeight: "400px",
      padding: "30px"
    }}>
      <h2 style={{ color: "#234E70" }}>My Projects</h2>

      <div style={{
        backgroundColor: "white",
        border: "1px solid #B8D8EE",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "15px"
      }}>
        <h3 style={{ color: "black" }}>Portfolio Website</h3>
        <p>A simple portfolio website created using React JS.</p>
        <p>Technology: React JS</p>
      </div>

      <div style={{
        backgroundColor: "white",
        border: "1px solid #B8D8EE",
        borderRadius: "8px",
        padding: "20px"
      }}>
        <h3 style={{ color: "black" }}>Student Details Page</h3>
        <p>A basic webpage to display student information.</p>
        <p>Technology: HTML and CSS</p>
      </div>
    </div>
  );
}

export default Project;
