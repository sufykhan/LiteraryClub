import React from 'react';
import {Button,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
function CardBlock(props) 
{
    // const [isHover,setHover]=useState(false);
    // const cardimg={
    //   transition:"",
    //   transform:""
    // };
    // if(isHover) {
    //   cardimg.transform="scale(1.3,1.3)";
    //   cardimg.transition="all 0.6s ease-out";
    // }
    // else
    // {
    //   cardimg.opacity='1'; 
    // }
    return(
    <Card  className="text-center" style={{margin:"0px 20px"}}>
    <Card.Img variant="top"  src={props.img} />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.subtitle}
      </Card.Text>

    </Card.Body>
    <Link to="/portfolio"><Button variant="outline-dark">Know me</Button></Link>
    </Card>
        );
      
  }
export default CardBlock;