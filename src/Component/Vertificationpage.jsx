import React from "react";
import "./Verificationpage.css";

const VerificationPage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h2>Verification Code Sent!</h2>
        <p>A verification code has been sent to your email for password change.</p>

        <input type="text" placeholder="Enter Verification Code" className="input-box"/ >
        
        <div className="actions">
          <span className="resend">Resend (30s)</span>
          <a href="#" className="login-link">Go back to LOGIN</a>
        </div>

        <button className="verify-btn">Verify</button>
      </div>

      <div className="right-section">
        <h1>Welcome to <span className="highlight">Super Admin!</span></h1>
        <p>Let's build something extraordinary together.</p>
        <img src="/images/images (2).png" alt="Verification Illustration" className="illustration" />
      </div>
    </div>
  );
};




export default VerificationPage;