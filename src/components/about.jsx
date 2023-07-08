import React from "react";
import '../App.css';
import aboutImage from '../image/about-img.png'

function About(){
    return(
    <section id="about" className="about py">
      <div className="about-inner">
        <div className="container grid">
          <div className="about-left text-center">
            <div className="section-head">
              <h2>About Us</h2>
              <div className="border-line"></div>
            </div>
            <p className="text text-lg">
            We are dedicated to leveraging the power of machine learning to improve diabetes detection and raise awareness about this prevalent health condition. 
            Our mission is to provide accurate and accessible tools that help individuals assess their risk of diabetes, leading to early detection and proactive management.
            Diabetes is a chronic disease that affects millions of people worldwide. It can have serious health consequences if left undiagnosed or uncontrolled. With our advanced machine learning algorithms
            , we have developed a state-of-the-art diabetes checker that analyzes various factors and indicators to provide reliable risk assessment. 
                
            </p>
          </div>
          <div className="about-right flex">
            <div className="img">
              <img src={aboutImage} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;