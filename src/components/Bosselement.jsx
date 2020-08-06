import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
function Bossel()
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150">
        <div class="member">
        <img src="https://picsum.photos/200/300" class="img-fluid" alt=""/>
        <div class="member-info">
          <div class="member-info-content">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
          </div>
          <div class="social">
            <a href="https://www.google.com/"><i class="fa fa-twitter"></i></a>
            <a href="https://www.google.com/"><i class="fa fa-facebook"></i></a>
            <a href="https://www.google.com/"><i class="fa fa-instagram"></i></a>
            <a href="https://www.google.com/"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
       </div>
      </div>

    );  
}
export default Bossel;
