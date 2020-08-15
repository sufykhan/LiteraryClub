  import React,{useEffect,useState} from 'react';
  import "./Event.css";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import 'bootstrap/dist/css/bootstrap.min.css';  
  import axios from "axios";
  
  const PORT="https://iitjammuliteraryclub.herokuapp.com/";
  function Contactus(props)
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
             url:`${PORT}send`,
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
    <section id="contact" className="contact" style={{borderBottom:props.border}}>
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us {formdata.name}</h2>
          <p>Contact us and get started</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="fa fa-map"></i>
                <h4>Location:</h4>
                <p>IIT Jammu, Jammu</p>
              </div>

              <div className="email">
                <i className="fa fa-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="fa fa-phone"></i>
                <h4>Call:</h4>
                <p>+919454846598</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form id="form-1" method="POST" className="php-email-form" onSubmit={HandleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" value={formdata.name} onChange={Change} className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" value={formdata.email} onChange={Change} className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" value={formdata.subject} onChange={Change} className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea value={formdata.message} onChange={Change} className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>)
  }
  export default Contactus;