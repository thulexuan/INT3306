import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import car1 from '../images/LexusCT.png'
import car2 from '../images/LexusUX.png'
import car3 from '../images/MaybackS.png'
import car4 from '../images/MerAMG.png'



const Cars =() => {
    return (
        <>
        <section className="gallery-block gallery-front">
          <div className="container">
            <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
              <ul className="list-unstyled nav1 cl-effect-10">
              <li>
                  <a data-hover="All" href="/cars" className="active">
                    <span>ALL</span>
                  </a>
                </li>
                
              </ul>
            </div>
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
                      <a href="https://www.lexus.com.vn/en/models/nx.html">LexusCT</a>
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
                      <a href="https://www.lexus.com.vn/en/models/gx.html">LexusUX</a>
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
                      <a href="https://www.mercedesviet.com/dong-xe/mercedes-maybach/mercedesmaybach-s450.html">MaybackS</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="gallery-image">
                  <img className="img-responsive" src={car4}/>
                  <div className="overlay">
                    <a
                      className="info pop example-image-link img-responsive"
                      href={car4}
                      data-lightbox="example-1"
                    >
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                    <p>
                      <a href="https://www.mercedesviet.com/dong-xe/mercedes-benz-amg/mercedes-benz-amg-a35-4matic.html">MerAMG</a>
                    </p>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
      </>
      
    )
}
export default Cars