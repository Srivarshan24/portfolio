
import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "Basic CSS",
    "JavaScript",
    "React JS",
    "Python"
  ];

  return (
    <div style={{
      backgroundColor: "#EAF4FB",
      minHeight: "400px",
      padding: "30px",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#234E70" }}>
        My Skills
      </h2>

      <p>
        These are some technologies I am learning.
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            backgroundColor: "#3478B8",
            color: "white",
            padding: "18px 25px",
            borderRadius: "6px",
            minWidth: "100px",
            boxSizing: "border-box"
          }}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
