
import React from "react";

function About() {
  return (
    <div style={{
      backgroundColor: "#EAF4FB",
      minHeight: "400px",
      padding: "30px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "8px",
        // borderLeft: "5px solid #3478B8"
      }}>
        <h2 style={{ color: "black" }}>About Me</h2>

        <p>
          I am a third-year Computer Science Engineering student.
          I am interested in learning new technologies.
        </p>

        <p>
          I have started learning React JS and web development.
          I want to improve my programming skills by building
          simple projects.
        </p>

        <h3 style={{ color: "black" }}>Education</h3>
        <p>B.E. Computer Science Engineering</p>

        <h3 style={{ color: "black" }}>My Hobbies</h3>
        <ul>
          <li>Learning programming</li>
          <li>Listening to music</li>
          <li>Exploring new technologies</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
