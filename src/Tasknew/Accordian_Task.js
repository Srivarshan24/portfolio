
import React from "react";
import { Link } from "react-router-dom";

function Accordian_Task() {
  return (
    <div style={{
      backgroundColor: "#234E70",
      color: "white",
      padding: "15px",
      textAlign: "center"
    }}>
      <h2>My Portfolio</h2>

      <div style={{ marginTop: "15px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  margin: "10px",
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};

export default Accordian_Task;
