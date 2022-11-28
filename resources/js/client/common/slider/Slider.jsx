import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner from '../../assets/banner-predios.jpg';
import CardImg1 from '../../assets/card-img-1.jpg';
function Slider() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={banner}
        alt="First slide"
        style={{objectFit: "cover", height:"60vh"}}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={banner}
        alt="Second slide"
        style={{objectFit: "cover", height:"60vh"}}
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={CardImg1}
        alt="Third slide"
        style={{objectFit: "cover", height:"60vh"}}
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider