import React from 'react';
import {Button,Card} from 'react-bootstrap';

function CardBlock(props) 
{
    return(
    <Card  className="text-center" style={{margin:"0px 20px"}}>
    <div style={{height:"320px"}}>
    <Card.Img  variant="top" style={{height:"100%",objectFit:"cover"}} src={props.img} />
    </div>
    <div style={{height:"130px"}}>
      <Card.Body style={{height:"100%"}}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.subtitle}
      </Card.Text>

    </Card.Body>
    </div>
    <a href={props.blog} target="_blank" rel="noopener noreferrer"><Button variant="outline-dark">My Blog</Button></a>
    </Card>
        );
      
  }
export default CardBlock;