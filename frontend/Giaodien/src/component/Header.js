import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'



const Header = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('place_code');
  console.log('sdshgd', id)
  return (
    <div>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/*                            <a href="#"> </a>
                                                        <div class="info-block"><i class="fa fa-map"></i>701 Old York Drive Richmond USA.</div>*/}
            </div>
            <div className="col-md-6">
              <div className="social-grid">
                <ul className="list-unstyled text-right">
                  <li><a><i className="fa fa-facebook" /></a></li>
                  <li><a><i className="fa fa-twitter" /></a></li>
                  <li><a><i className="fa fa-linkedin" /></a></li>
                  <li><a><i className="fa fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header-*/}
      <header className="header-container">
        <div className="container">
          <div className="top-row">
            <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-6">
                <div id="logo">
                  {/*<a href="index.html"><img src="images/logo.png" alt="logo"></a>*/}
                  <a href="/"><span>BIG</span>CORP</a>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12 remove-padd">
                <nav className="navbar navbar-default">
                  <div className="navbar-header page-scroll">
                    <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                    <ul className="list-unstyled nav1 cl-effect-10">
                      <li><a data-hover="HOME" href="/" className="active"><span>HOME</span></a></li>
                      <li><a data-hover="CARS" href="/cars"><span>CARS</span></a></li>
                      <li><a data-hover="STORE" href="/store"><span>STORE</span></a></li>
                      <li><a data-hover="WARRANTY" href="/warranty"><span>WARRANTY</span></a></li>
                      <li><a data-hover="NEWS" href="/news"><span>NEWS</span></a></li>
                      <li><a data-hover="CONTACT" href="/contact"><span>CONTACT</span></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-md-2  col-sm-4 col-xs-12 hidden-sm">
                {!id ? (
                  <div className="text-right"><button type="button" className="book-now-btn" onClick={() =>
                    navigate('/login')
                  }>LOGIN</button></div>
                ) : (
                  <div className="text-right"><button type="button" className="book-now-btn" onClick={() => {
                    navigate('/login');
                    localStorage.removeItem('place_code')
                  }
                  }>Logout</button></div>)
                }

              </div>

            </div>
          </div>
        </div>
      </header>
    </div>

  )
}
export default Header