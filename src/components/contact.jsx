import React from "react";
import '../App.css';
function Contact(){
    return(
    <section id="contact" className="contact py">
      <div className="container grid">
        <div className="contact-right text-white text-center bg-blue">
          <div className="contact-head">
            <h3 className="lead">Contact Us</h3>
          </div>
          <form>
            <div className="form-element">
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="form-element">
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="form-element">
              <textarea rows="5" placeholder="Your Message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-white btn-submit">
              <i className="fas fa-arrow-right"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    );
}

export default Contact;