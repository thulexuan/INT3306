import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'

const Footer =() => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 width-set-50">
              <div className="footer-details">
                <h4>Get in touch</h4>
                <ul className="list-unstyled footer-contact-list">
                  <li>
                    <i className="fa fa-map-marker fa-lg" />
                    <p>144 Xuân Thuỷ, Cầu Giấy, Hà Nội.</p>
                  </li>
                  <li>
                    <i className="fa fa-phone fa-lg" />
                    <p>
                      <a href="tel:+1-202-555-0100"> +1-202-555-0100</a>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o fa-lg" />
                    <p>
                      <a href="mailto:minhanhnt.study@gmail.com">minhanhnt.study@gmail.com</a>
                    </p>
                  </li>
                </ul>
                
               
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
              <div className="footer-details">
                <h4>explore</h4>
                <ul className="list-unstyled footer-links">
                  <li className="active">
                    <a>HOME</a>
                  </li>
                  <li>
                    <a href="/cars">CARS</a>
                  </li>
                  <li>
                    <a href="/store">STORE</a>
                  </li>
                  <li>
                    <a href="/warranty">WARRANTY</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/news">NEWS</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="footer-details">
                <h4>Now On Instagram</h4>
                <div className="row">
                  <div className="instagram-images">
                    <div id="instafeed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
      
    )
}
export default Footer