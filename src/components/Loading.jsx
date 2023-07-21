import React from "react";
import '../App.css'; // Importing custom CSS file

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="spinner"></div>
        </div>
        <span className="loading-text">Please wait your result</span>
      </div>
    </div>
  );
}
