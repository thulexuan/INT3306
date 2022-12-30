import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'




const BlogHome =() => {
    return (
        <section className="blog-block-slider">
  <div className="blog-block-slider-fix-image">
    <div id="myCarousel2" className="carousel slide" data-ride="carousel">
      <div className="container">
        {/* Wrapper for slides */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel2" data-slide-to={0} className="active" />
          <li data-target="#myCarousel2" data-slide-to={1} />
          <li data-target="#myCarousel2" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="blog-box">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                 
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Bond Jeams - CEO Alas Factory</h3>
                  <h5 className="blog-rev">A fatory of BigCorp</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="blog-box">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                 
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Jules Boutin - CEO Lamborghini Hanoi</h3>
                  <h5 className="blog-rev">Lamborghini branch in Hanoi</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="blog-box">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                  
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Attilio Marzi - Technical management</h3>
                  <h5 className="blog-rev">Work at Daisy Car.</h5>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
</section>

       
    )
}
export default BlogHome