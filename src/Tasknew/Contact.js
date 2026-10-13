
import React from "react";

function Contact() {
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
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center"
      }}>

        <h2 style={{ color: "#234E70" }}>
          Contact Me
        </h2>

        <p>Email: student@example.com</p>

        <p>Phone: 9876543210</p>

        <h3 style={{ color: "#3478B8" }}>
          Send a Message
        </h3>

        <form>
          <input
            type="text"
            placeholder="Enter your name"
            style={inputStyle}
          />

          <br /><br />

          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
          />

          <br /><br />

          <textarea
            placeholder="Enter your message"
            style={{
              ...inputStyle,
              height: "100px",
              resize: "vertical"
            }}
          />

          <br /><br />

          <button type="button" style={buttonStyle}>
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  boxSizing: "border-box",
  border: "1px solid #B8D8EE",
  borderRadius: "5px",
  fontSize: "16px"
};

const buttonStyle = {
  backgroundColor: "#3478B8",
  color: "white",
  border: "none",
  padding: "12px 28px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px"
};

export default Contact;
