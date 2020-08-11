import React from 'react';
import {Button,Card} from 'react-bootstrap';

function CardBlock(props) 
{
    return(
    <Card  className="text-center" style={{margin:"0px 20px"}}>
    <Card.Img variant="top"  src={props.img} />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.subtitle}
      </Card.Text>

    </Card.Body>
    <a href={props.blog}><Button variant="outline-dark">My Blog</Button></a>
    </Card>
        );
      
  }
export default CardBlock;