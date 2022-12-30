import React, { useRef } from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import banner from '../images/banner4.jpg'
import emailjs from '@emailjs/browser'




const Contact=() => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y7f5m1j','template_emtm7m4', form.current, '-30wRiBilFgYEhVgh').then((result) =>
    {
        console.log(result.text);
    }, (error) => {
        console.log(error.text)
    }
    );
    e.target.reset()
};
    
    return (
        <div>
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner +")" }}
            >
                <div className="inner-wrapper">
                <h1>Contact Us</h1>
                </div>
            </section>
            <div className="clearfix" />
            <section className="contact-block">
                <div className="container">
                <div className="col-md-6 contact-left-block">
                    <h3>
                    <span>Contact </span>Us
                    </h3>
                    <p className="text-left">
                    Nulla pharetra eleifend tellus in molestie. In vel neque sit amet urna
                    gravida blandit nec id massa. Phasellus eu aliquet augue. Quisque
                    fringilla urna quam.
                    </p>
                    <p className="text-right">
                    144 Xuân Thuỷ, Cầu Giấy, Hà Nội.{" "}
                    <i className="fa fa-map-marker fa-lg" />
                    </p>
                    <p className="text-right">
                    <a href="tel:">
                        {" "}
                        0367070428 <i className="fa fa-phone fa-lg" />
                    </a>
                    </p>
                    <p className="text-right">
                    <a href="mailto:minhanhnt.study@gmail.com">
                        {" "}
                        minhanhnt.study@gmail.com <i className="fa fa-envelope" />
                    </a>
                    </p>
                </div>
                <div className="col-md-6 contact-form">
                    <h3>
                    Send a <span>Message</span>
                    </h3>
                    <form action="#" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="form-control"
                        name="Name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                      
                       
                    />
                    <textarea
                        className="form-control"
                        name="Message"
                        placeholder="Message Here...."
                        required
                        defaultValue={""}
                        
                    />
                    <input type="submit" className="submit-btn" defaultValue="Submit" />
                    </form>
                </div>
                <div className="clearfix" />
                </div>
            </section>
            {/*-map-*/}
            <section className="offspace-70">
                <div className="map">
                <div className="container">
                    <iframe
                   src="https://maps.google.com/maps?width=600&height=400&hl=en&q=144 Xuân Thuỷ&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 400 }}
                    allowFullScreen
                    />
                </div>
                </div>
            </section>

            </div>
    )
}

export default Contact