import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'

const Blog =() => {
    return (
        <section className="blog-block">
        <div className="container">
          <div className="row offspace-45">
            <div className="view-set-block">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="event-blog-image">
                  <img
                    alt="image"
                    className="img-responsive"
                    src={blog1}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                <div className="event-blog-details">
                  <h4>
                    <a href="https://www.lexus.com.vn/vn.html">Welcome to Lexus Viet Nam</a>
                  </h4>
                  <h5>
                    Post By Admin{" "}
                   
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    lorem nulla, ornare eu felis quis, efficitur posuere nulla.
                    Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis
                    neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu
                    odio, scelerisque a vehicula vitae, auctor sit amet lectus.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    lorem nulla, ornare eu felis quis, efficitur posuere nulla.
                    Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit
                    tortor vulputate id. Vestibulum mauris nibh, luctus non maximus
                    vitae, porttitor eget neque. Donec tristique nunc facilisis,
                    dapibus libero ac
                  </p>
                  <a className="btn btn-default" href="https://www.lexus.com.vn/vn.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row offspace-45">
            <div className="view-set-block">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="event-blog-image">
                  <img
                    alt="image"
                    className="img-responsive"
                    src={blog2}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                <div className="event-blog-details">
                  <h4>
                    <a href="https://www.mercedesviet.com/">
                      Mercesdes is honored to be your companion
                    </a>
                  </h4>
                  <h5>
                    Post By Admin{" "}
                    
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    lorem nulla, ornare eu felis quis, efficitur posuere nulla.
                    Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis
                    neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu
                    odio, scelerisque a vehicula vitae, auctor sit amet lectus.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    lorem nulla, ornare eu felis quis, efficitur posuere nulla.
                    Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit
                    tortor vulputate id. Vestibulum mauris nibh, luctus non maximus
                    vitae, porttitor eget neque. Donec tristique nunc facilisis,
                    dapibus libero ac
                  </p>
                  <a className="btn btn-default" href="https://www.mercedesviet.com/">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    )
}
export default Blog