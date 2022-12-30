import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'

import lexusCt from '../images/LexusCT.png'
import lexusUx from '../images/LexusUX.png'
import merAMG from '../images/MerAMG.png'
import mayback from '../images/MaybackS.png'




const Review =() => {
    return (
        <section className="resort-overview-block">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
              <div className="side-A">
                <div className="product-thumb">
                  <div className="image">
                    <a>
                      <img
                        src={lexusCt}
                        className="img-responsive"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="side-B">
                <div className="product-desc-side">
                  <h3>
                    <a>Lexus CT</a>
                  </h3>
                  <p>
                  Ostensibly, it’s a rival for the Audi A3 and BMW 1-Series, though, unlike the dizzying array of engine and trim options available from the Germans, Lexus offers the CT in few specifications. 
                  </p>
                  <div className="links">
                    <a href="https://www.topgear.com/car-reviews/lexus/ct-200h">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />

          
            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
              <div className="side-A">
                <div className="product-thumb">
                  <div className="image">
                    <a>
                      <img
                        alt="image"
                        className="img-responsive"
                        src={lexusUx}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="side-B">
                <div className="product-desc-side">
                  <h3>
                    <a>Lexus UX</a>
                  </h3>
                  <p>
                  This is the entry level model in the Lexus range, assuming the position that was held until recently by the venerable CT200h hatchback. 
                  </p>
                  <div className="links">
                    <a href="https://www.topgear.com/car-reviews/lexus/ux">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          
            </div>
            <div className="clear" />
            <div className="row">  
            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
              <div className="side-A">
                <div className="product-desc-side">
                  <h3>
                    <a>Mercesdes Benz AMG</a>
                  </h3>
                  <p>
                  Welcome to AMG’s diffusion line. We’ve seen it before: CLS53, C43 and so on, each one rung down from the full house machine. 
                  </p>
                  <div className="links">
                    <a href="https://www.topgear.com/car-reviews/mercedes-benz/amg-a35">Read more</a>
                  </div>
                </div>
              </div>
              <div className="side-B">
                <div className="product-thumb">
                  <div className="image txt-rgt">
                    <a className="arrow-left">
                      <img
                        src={merAMG}
                        className="img-responsive"
                        alt="imaga"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
            
            <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-left">
              <div className="side-A">
                <div className="product-desc-side">
                  <h3>
                    <a>Mercesdes Mayback S</a>
                  </h3>
                  <p>
                  It’s impossible not to think of the previous six generations of Mercedes S-Class as you approach this seventh iteration. 
                  </p>
                  <div className="links">
                    <a href="https://www.topgear.com/car-reviews/mercedes-benz/s-class">Read more</a>
                  </div>
                </div>
              </div>
              <div className="side-B">
                <div className="product-thumb txt-rgt">
                  <div className="image">
                    <a className="arrow-left">
                      <img
                        src={mayback}
                        className="img-responsive"
                        alt="imaga"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            </div> 
          </div>
        
      </section>
      
      
    )
}
export default Review