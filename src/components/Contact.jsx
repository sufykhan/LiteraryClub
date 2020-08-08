  import React,{useEffect,useState} from 'react';
  import "./Event.css";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import 'bootstrap/dist/css/bootstrap.min.css';  
  import axios from "axios";
  
  function Contactus()
  {
      useEffect(() => {
          AOS.init();
          AOS.refresh();
        });
        const[formdata,setForm]=useState({name:"",email:"",subject:"",message:""});

        function HandleSubmit(event)
        {
           event.preventDefault();
           axios({
             method:"POST",
             url:"http://localhost:5000/send",
             data:formdata
           }).then((response)=>{
              if(response.data.status==="success")
              {
                alert("Message sent");
                setForm({name:"",email:"",subject:"",message:""});
              }
              else if(response.data.status==="fail")
              {
                alert("Failed to send,try one more time");
              }
           })
          
        }
        function Change(event)
        {
            setForm({...formdata,[event.target.name]:event.target.value
            });
        }
  
        return(
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us {formdata.name}</h2>
          <p>Contact us the get started</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="info">
              <div class="address">
                <i class="fa fa-map"></i>
                <h4>Location:</h4>
                <p>IIT Jammu, Jammu</p>
              </div>

              <div class="email">
                <i class="fa fa-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="fa fa-phone"></i>
                <h4>Call:</h4>
                <p>+919454846598</p>
              </div>

            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form id="form-1" method="POST" role="form" class="php-email-form" onSubmit={HandleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" value={formdata.name} onChange={Change} class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" value={formdata.email} onChange={Change} class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" value={formdata.subject} onChange={Change} class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea value={formdata.message} onChange={Change} class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>)
  }
  export default Contactus;