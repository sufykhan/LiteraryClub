import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';  

function Whatwedo(props)
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

      return(
<section id="services" className="services section-bg" style={{background:props.color,borderBottom:props.border}}>
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Our Club</h2>
          <p>Let’s know more about our Club!</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title">History</h4>
              <p className="description">Our Club started in 2018.<br/>Coordinator<br/> 
Salman Raza : 2018-2019<br/>
Shaivya Yadav :2019-2020<br/>
 Faculty Coordinator <br/>
Dr. Queleen Kaur Bijral:2018-2019 Dec<br/>
Dr. Suchishmita Roy: 2019-2020<br/>
</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title">Goal</h4>
              <p className="description">We aim at building an Amatuer literary lover to a mature literatus.<br/>Writing, speaking and presentation are professional life mantras; we aim at enhancing these skills.
</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title">Our Way of Working</h4>
              <p className="description">We participate in various inter and intra college literary events, giving immense opportunities for all budding writers and artists to showcase their work.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title">What can one gain through our Club</h4>
              <p className="description">Our club provides an opportunity to all the inquisitive people over there to explore and express their creativities.</p>
            </div>
          </div>

        </div>

      </div>
    </section>);
}
export default Whatwedo;