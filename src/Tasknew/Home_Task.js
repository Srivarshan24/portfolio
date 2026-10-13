
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      backgroundColor: "#EAF4FB",
      minHeight: "400px",
      padding: "40px 20px"
    }}>

      <div style={{
        backgroundColor: "white",
        maxWidth: "500px",
        margin: "auto",
        padding: "40px 30px",
        borderRadius: "12px",
        textAlign: "center"
      }}>

        <h1 style={{ color: "black" }}>
          HELLO, I'M VARSHAN
        </h1>

        <h3 style={{ color: "black" }}>
          Welcome to My Portfolio
        </h3>

        <p>
          I am a Computer Science Engineering student.
        </p>

        <p>
          I am learning web development and programming.
        </p>

        <p>
          This website shows my skills, projects and interests.
        </p>

        <Link
          to="/about"
          style={{ textDecoration: "none" }}
        >
          <button style={{
            backgroundColor: "#3478B8",
            color: "white",
            border: "none",
            padding: "12px 30px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "15px"
          }}>
            About Me
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;
