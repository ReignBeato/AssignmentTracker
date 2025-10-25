// Homepage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './trackers.png'; // make sure this file is inside 'src'

function Homepage() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      {/* Logo */}
      <img src={logo} alt="Trackers Logo" className="app-logo mb-4" />

      {/* Header */}
      <h1 className="mb-3 text-primary">Welcome to Trackers!</h1>
      <p className="text-secondary mb-5 fs-5">
        A Student Assignment Tracker Application
      </p>

      {/* Links Section */}
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-6 col-md-3 mb-3">
            <a href="/student-login" className="btn btn-outline-primary w-100">
              Student Login
            </a>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <a href="/lecturer-login" className="btn btn-outline-success w-100">
              Lecturer Login
            </a>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <a href="/learning-support-login" className="btn btn-outline-warning w-100">
              Learning Support Login
            </a>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <a href="/admin-login" className="btn btn-outline-danger w-100">
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
