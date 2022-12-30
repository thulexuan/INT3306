import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import car1 from '../images/car1.png'
import car2 from '../images/car2.png'
import car3 from '../images/car3.png'
import car4 from '../images/car4.png'



const GalleryHome =() => {
    return (
        <section className="gallery-block gallery-front">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="gallery-image">
                <img className="img-responsive" src={car1} />
                <div className="overlay">
                  <a
                    className="info pop example-image-link img-responsive"
                    href={car1}
                    data-lightbox="example-1"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                  <p>
                    <a href="https://www.lexus.com.vn/en/models/gx.html">Lexus</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="gallery-image">
                <img className="img-responsive" src={car2} />
                <div className="overlay">
                  <a
                    className="info pop example-image-link img-responsive"
                    href={car2}
                    data-lightbox="example-1"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                  <p>
                    <a href="https://www.mercedesviet.com/">Mercesdes</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="gallery-image">
                <img className="img-responsive" src={car3} />
                <div className="overlay">
                  <a
                    className="info pop example-image-link img-responsive"
                    href={car3}
                    data-lightbox="example-1"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                  <p>
                    <a href="https://www.rolls-roycemotorcars.com/en_GB/home.html">Roll Royce</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="gallery-image">
                <img className="img-responsive" src={car4} />
                <div className="overlay">
                  <a
                    className="info pop example-image-link img-responsive"
                    href={car4}
                    data-lightbox="example-1"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                  <p>
                    <a href="https://www.bmw.vn/en/index.html">BMW</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default GalleryHome