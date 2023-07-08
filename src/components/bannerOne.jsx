import React from "react";
import '../App.css';
function BannerOne(){
    return(
    <section id="banner-one" className="banner-one text-center">
      <div className="container text-white">
        <blockquote className="lead">
          <i className="fas fa-quote-left"></i> When you are young and healthy, it never occurs to you that in a single second your whole life could change. <i className="fas fa-quote-right"></i>
        </blockquote>
        <small className="text text-sm">- Anonim Nano</small>
      </div>
    </section>
    );
}

export default BannerOne;