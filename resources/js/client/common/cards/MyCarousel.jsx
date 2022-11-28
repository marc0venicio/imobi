import React, { Component, useState } from "react";
import Slider from "react-slick";
import ImobiCards from "./ImobiCards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mycarousel.scss";
import { Button } from "react-bootstrap";

function MyCarousel() {

    const [slides, setSlides] = useState([
      {
        img: "https://dummyimage.com/600x400/000/7CFC00"
      },
      {
        img: "https://dummyimage.com/600x400/000/ccccc"
      },
      {
        img: "https://dummyimage.com/600x400/000/dddddd"
      },
      {
        img: "https://dummyimage.com/600x400/000/fff"
      },
      {
        img: "https://dummyimage.com/600x400/000/B22222"
      },
      {
        img: "https://dummyimage.com/600x400/000/7CFC00"
      },
      {
        img: "https://dummyimage.com/600x400/000/ccccc"
      },
      {
        img: "https://dummyimage.com/600x400/000/dddddd"
      },
      {
        img: "https://dummyimage.com/600x400/000/B22222"
      },
      {
        img: "https://dummyimage.com/600x400/000/7CFC00"
      }
    ])

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        }
      ]}
    return (
      <>
        <h2 className="title__body my-5"> Responsive Imobi Carousel</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                <ImobiCards imgSrc={slide.img} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>

        <div className="title__body my-5"><Button className="button__imobi">Mais imobiliárias</Button></div>
      </>
    );
  }

export default MyCarousel;