import React, { useState, useEffect } from "react";
import '../App.css'; // Importing custom CSS file

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

  return (
    <div className="loading-container">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="spinner"></div>
        </div>
        <span className="loading-text">Loading</span>
      </div>
    </div>
  );
}
