import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaBed, FaHome } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
const ImobiCards = props => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>Price</Card.Subtitle>
          <Card.Text>
            <div><p className="price"> R$ 500.000 </p></div>
            <p><FaBed></FaBed> 3  Quartos <GiBathtub /> 5 banheiros <FaHome /> 550 M2</p>
          </Card.Text>
          
          <div className="product-actions align-middle">
            <Button variant="primary center align-middle">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImobiCards;
