

// // src/App.js
// import "./App.css";

// function App() {
//   return (
//     <div className="login-page">
//       {/* LEFT IMAGE */}
//       <div
//         className="left-image"
//         style={{
//           backgroundImage: "url(/images/library.jpg)",
//         }}
//       ></div>

//       {/* RIGHT LOGIN PANEL */}
//       <div className="right-panel">
//         {/* LOGO */}
//         <div className="logo-section">
//           <img src="/images/trackers.jpg" alt="Trackers Logo" className="logo" />
//         </div>

//         <h2 className="login-title">LOG IN</h2>

//         {/* EMAIL INPUT */}
//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your staff email" />
//         </div>

//         {/* PASSWORD INPUT */}
//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />
//         </div>

//         {/* FORGET LINK */}
//         <a href="#" className="forget-link">
//           Forget password?
//         </a>

//         {/* LOGIN BUTTON */}
//         <button className="login-btn">LOG IN</button>

//         {/* REGISTER LINK */}
//         <p className="signup-text">
//           Don’t have an account? <a href="#">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;





import { useState } from "react";
import "./App.css";

function App() {
  // 🧠 Step 1: Store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🧠 Step 2: Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    // Example hardcoded credentials (later replaced with backend)
    if (email === "mandeepsingh93683@gmail.com" && password === "12345") {
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  // 🧠 Step 3: Forgot password
  const handleForgotPassword = () => {
    alert("📧 Password reset link has been sent to your email.");
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE IMAGE */}
      <div
        className="left-image"
        style={{ backgroundImage: "url(/images/library.jpg)" }}
      ></div>

      {/* RIGHT LOGIN PANEL */}
      <div className="right-panel">
        {/* LOGO */}
        <div className="logo-section">
          <img src="/images/trackers.jpg" alt="Trackers Logo" className="logo" />
        </div>

        <h2 className="login-title">LOG IN</h2>

        {/* EMAIL INPUT */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your staff email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD INPUT */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* FORGOT PASSWORD */}
        <a href="#" className="forget-link" onClick={handleForgotPassword}>
          Forget password?
        </a>

        {/* LOGIN BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          LOG IN
        </button>

        {/* REGISTER LINK */}
        <p className="signup-text">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default App;
