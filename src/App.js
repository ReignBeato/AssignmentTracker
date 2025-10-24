



// import { useState } from "react";
// import "./App.css";

// function App() {
//   // 🧠 Step 1: Store email and password
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // 🧠 Step 2: Function to handle login
//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "" || password === "") {
//       alert("⚠️ Please enter both email and password.");
//       return;
//     }

//     // Example hardcoded credentials (later replaced with backend)
//     if (email === "mandeepsingh93683@gmail.com" && password === "12345") {
//       alert("✅ Login successful!");
//     } else {
//       alert("❌ Invalid credentials. Please try again.");
//     }
//   };

//   // 🧠 Step 3: Forgot password
//   const handleForgotPassword = () => {
//     alert("📧 Password reset link has been sent to your email.");
//   };

//   return (
//     <div className="login-page">
//       {/* LEFT SIDE IMAGE */}
//       <div
//         className="left-image"
//         style={{ backgroundImage: "url(/images/library.jpg)" }}
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
//           <input
//             type="email"
//             placeholder="Enter your staff email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* PASSWORD INPUT */}
//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         {/* FORGOT PASSWORD */}
//         <a href="#" className="forget-link" onClick={handleForgotPassword}>
//           Forget password?
//         </a>

//         {/* LOGIN BUTTON */}
//         <button className="login-btn" onClick={handleLogin}>
//           LOG IN
//         </button>

//         {/* REGISTER LINK */}
//         <p className="signup-text">
//           Don’t have an account? <a href="#">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;




// import { useState } from "react";
// import emailjs from "emailjs-com";
// import "./App.css";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Function to send email using EmailJS
//   const sendLoginEmail = () => {
//     emailjs
//       .send(
//         "service_n9kxk4s", // ✅ your Service ID
//         "template_g7lhl6j", // ✅ your Template ID
//         {
//           to_email: email,
//           subject: "Login Notification - Trackers App",
//           message: `Hi ${email},
// You have successfully logged in to Trackers on ${new Date().toLocaleString()}.

// If this wasn't you, please reset your password immediately.`,
//         },
//         "6o_DaRU9z4ciUJlIA" // ✅ your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("📧 A login notification has been sent to your email!");
//         },
//         (error) => {
//           console.error("Email failed:", error.text);
//           alert("❌ Failed to send email. Please try again.");
//         }
//       );
//   };

//   // Handle login
//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("⚠️ Please enter both email and password.");
//       return;
//     }

//     if (email === "lecturer@college.com" && password === "12345") {
//       alert("✅ Login successful!");
//       sendLoginEmail(); // 🔔 Send email after login
//     } else {
//       alert("❌ Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="login-page">
//       {/* LEFT IMAGE */}
//       <div
//         className="left-image"
//         style={{ backgroundImage: "url(/images/library.jpg)" }}
//       ></div>

//       {/* RIGHT LOGIN PANEL */}
//       <div className="right-panel">
//         <div className="logo-section">
//           <img src="/images/trackers.jpg" alt="Trackers Logo" className="logo" />
//         </div>

//         <h2 className="login-title">LOG IN</h2>

//         {/* EMAIL INPUT */}
//         <div className="input-group">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your staff email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* PASSWORD INPUT WITH TOGGLE */}
//         <div className="input-group password-field">
//           <label>Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             className="toggle-visibility"
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "🙈" : "👁"}
//           </button>
//         </div>

//         <a
//           href="#"
//           className="forget-link"
//           onClick={(e) => {
//             e.preventDefault();
//             alert("📧 Password reset link has been sent to your email.");
//           }}
//         >
//           Forget password?
//         </a>

//         <button className="login-btn" onClick={handleLogin}>
//           LOG IN
//         </button>

//         <p className="signup-text">
//           Don’t have an account? <a href="#">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;







// import { useState } from "react";
// import emailjs from "emailjs-com";
// import "./App.css";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Function to send real-time email using EmailJS
//   const sendLoginEmail = () => {
//     emailjs
//       .send(
//         "service_n9kxk4s", // ✅ your Service ID
//         "template_g7lhl6j", // ✅ your Template ID
//         {
//           to_email: email, // ✅ dynamic lecturer email
//           subject: "Login Notification - Trackers App",
//           message: `Hi ${email},

// You have successfully logged in to Trackers on ${new Date().toLocaleString()}.

// If this wasn't you, please reset your password immediately.`,
//         },
//         "6o_DaRU9z4ciUJlIA" // ✅ your Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent:", result.text);
//           alert("📧 Login notification sent to your email!");
//         },
//         (error) => {
//           console.error("Email failed:", error.text);
//           alert("❌ Failed to send email.");
//         }
//       );
//   };

//   // Login button click
//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("⚠️ Please enter both email and password.");
//       return;
//     }

//     // Simulated lecturer credentials check
//     if (password === "12345") {
//       alert("✅ Login successful!");
//       sendLoginEmail();
//     } else {
//       alert("❌ Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="login-page">
//       {/* LEFT IMAGE */}
//       <div
//         className="left-image"
//         style={{ backgroundImage: "url(/images/library.jpg)" }}
//       ></div>

//       {/* RIGHT LOGIN PANEL */}
//       <div className="right-panel">
//         {/* LOGO */}
//         <div className="logo-section">
//           <img src="/images/trackers.jpg" alt="Trackers Logo" className="logo" />
//         </div>

//         <h2 className="login-title">LOG IN</h2>

//         {/* EMAIL */}
//         <div className="input-group">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your staff email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* PASSWORD */}
//         <div className="input-group password-field">
//           <label>Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             className="toggle-visibility"
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "🙈" : "👁"}
//           </button>
//         </div>

//         {/* FORGOT PASSWORD */}
//         <a
//           href="#"
//           className="forget-link"
//           onClick={(e) => {
//             e.preventDefault();
//             alert("📧 Password reset link has been sent to your email.");
//           }}
//         >
//           Forget password?
//         </a>

//         {/* LOGIN BUTTON */}
//         <button className="login-btn" onClick={handleLogin}>
//           LOG IN
//         </button>

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
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Function to send login email using EmailJS
  const sendLoginEmail = () => {
    emailjs
      .send(
        "service_n9kxk4s", // Service ID
        "template_g7lhl6j", // Template ID
        {
          to_email: email, // Dynamic lecturer email
          subject: "Login Notification - Trackers App",
          message: `Hi ${email},

You have successfully logged in to Trackers on ${new Date().toLocaleString()}.

If this wasn't you, please reset your password immediately.`,
        },
        "6o_DaRU9z4ciUJlIA" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("📧 Login notification sent to your email!");
        },
        (error) => {
          console.error("Email failed:", error.text);
          alert("❌ Failed to send email.");
        }
      );
  };

  // ✅ Handle login button click
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    // Example validation (replace with real credentials later)
    if (password === "12345") {
      alert("✅ Login successful!");
      sendLoginEmail(); // Send email after successful login
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      {/* LEFT IMAGE */}
      <div
        className="left-image"
        style={{ backgroundImage: "url(/images/library.jpg)" }}
      ></div>

      {/* RIGHT LOGIN PANEL */}
      <div className="right-panel">
        <div className="panel-content">
          {/* LOGO */}
          <div className="logo-section">
            <img
              src="/images/trackers.jpg"
              alt="Trackers Logo"
              className="logo"
            />
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

          {/* PASSWORD INPUT WITH TOGGLE */}
          <div className="input-group password-field">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="toggle-visibility"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {/* FORGOT PASSWORD */}
          <a
            href="#"
            className="forget-link"
            onClick={(e) => {
              e.preventDefault();
              alert("📧 Password reset link has been sent to your email.");
            }}
          >
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
    </div>
  );
}

export default App;
