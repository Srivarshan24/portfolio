
import React from "react";

function Login() {
  return (
    <div style={{
      backgroundColor: "#EAF4FB",
      minHeight: "400px",
      padding: "40px 20px"
    }}>
      <div style={{
        backgroundColor: "white",
        maxWidth: "350px",
        margin: "auto",
        padding: "25px",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#234E70" }}>Login</h2>

        <form>
          <input
            type="email"
            placeholder="Enter email"
            style={inputStyle}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Enter password"
            style={inputStyle}
          />

          <br /><br />

          <button type="button" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  boxSizing: "border-box",
  border: "1px solid #B8D8EE",
  borderRadius: "4px"
};

const buttonStyle = {
  backgroundColor: "#3478B8",
  color: "white",
  border: "none",
  padding: "10px 25px",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Login;
