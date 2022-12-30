import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import storeIcon from "../images/icons/store.png"
import warrantyIcon from "../images/icons/warranty.png"
import factoryIcon from "../images/icons/carcheck.png"
import userIcon from "../images/icons/user.png"
import right from "../images/icons/right-arrow.png"



const ServiceHome =() => {
    return (
        <div>
         <section className="service-block">
        <div className="container">
          <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
              <div className="service-details text-center">
                <div className="service-image">
                  <img alt="image" className="img-responsive" src={factoryIcon} style={{height: '30px', width: '30px'}} />
                </div>
                <h4><a>Fatory</a></h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6 width-50">
              <div className="service-details text-center">
                <div className="service-image">
                  <img alt="image" className="img-responsive" src={storeIcon} style={{height: '30px', width: '30px'}} />
                </div>
                <h4><a>Store</a></h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6 width-50">
              <div className="service-details text-center">
                <div className="service-image">
                  <img alt="image" className="img-responsive" src={warrantyIcon} style={{height: '30px', width: '30px'}} />
                </div>
                <h4><a>Warranty</a></h4>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
              <div className="service-details text-center">
                <div className="service-image">
                  <img alt="image" className="img-responsive" src={userIcon}  style={{height: '30px', width: '30px'}} />
                </div>
                <h4><a>Customer support</a></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>

    )
}
export default ServiceHome