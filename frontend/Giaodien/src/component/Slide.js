import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import banner2 from "../images/banner2.png"
import banner1 from "../images/banner1.png"
import banner3 from "../images/banner3.png"
import left from "../images/icons/left-arrow.png"
import right from "../images/icons/right-arrow.png"



const Slide =() => {
    return (
        <div>
        <div id="myCarousel1" className="carousel slide" data-ride="carousel"> 
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel1" data-slide-to={0} className="active" />
            <li data-target="#myCarousel1" data-slide-to={1} />
            <li data-target="#myCarousel1" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="item active"> <img src={banner2} style={{width: '100%', height: '500px'}} alt="First slide" />
              <div className="carousel-caption">
                <h1>BIG CORP<br /> car </h1>
              </div>
            </div>
            <div className="item"> <img src={banner1} style={{width: '100%', height: '500px'}} alt="Second slide" />
              <div className="carousel-caption">
                <h1>BIG CORP<br /> car </h1>
              </div>
            </div>
            <div className="item"> <img src={banner3} style={{width: '100%', height: '500px'}} alt="Third slide" />
              <div className="carousel-caption">
                <h1>BIG CORP<br /> car </h1>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src={left} onmouseover="this.src ={left}" onmouseout="this.src ={left}" alt="left" /></a>
          <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img src ={right} onmouseover="this.src = {right}" onmouseout="this.src = {right}" alt="left" /></a>
        </div>
        <div className="clearfix"/>
      </div>

    )
}
export default Slide