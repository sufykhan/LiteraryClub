import React from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function GetSt(props)
{
//   const [abt,setAbt]=useState(false);
//   const yes=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
//   <h1>About on Click</h1>
//   <h2>About us content not yet prepared ..</h2>
// </div>;
//   const yes2=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
//   <h1>Image sort of thing</h1>
//   <h2>About us content not yet prepared ..</h2>
// </div>;
//   function handleClick(event)
//   {
//     setAbt(true);
//     event.preventDefault();
//   }
return(
  <section id="hero" className="d-flex align-items-center" style={{background:props.color,top:"0px",paddingTop:"0px"}}>

    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1" style={{margin:"auto"}}>
          <h1>Literature can be a textually transmitted disease!!</h1>
          <h2> Our  club is a part of the student body where we build ourselves with unprecedented zeal, to explore our society and enjoy our college life under the same shed.</h2>
          <a href="#about" className="btn-get-started scrollto">Scroll to know more!</a>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="https://i.ibb.co/KhNMjZ6/Adobe-Post-20200805-0211140-5263287523153267-1.png" style={{borderRadius:"100%"}} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
  );
  }
  export default GetSt;

//<img src="https://i.ibb.co/KhNMjZ6/Adobe-Post-20200805-0211140-5263287523153267-1.png" alt="Adobe-Post-20200805-0211140-5263287523153267-1" border="0"></a>