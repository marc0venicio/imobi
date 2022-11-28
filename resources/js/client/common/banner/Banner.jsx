import React from 'react'

import banner from '../../assets/banner-predios.jpg';

import './banner.scss';

function Banner() {
  return (
    <div class="banner pt-5">
      <div class="container">
        <div class="row">
            <div class="col-sm-5">
                <h1>Imobiliaria pika</h1>
                <p>You don't need to read this. Now that you hav decided to read it anyways, its just some random dummy text to fill up the space for Bootstrap banner or hero section.</p>
                <button class="btn btn-success">Learn More</button>
            </div>
            <div class="col-sm-7">
                <img class="img-fluid img-person" src={banner} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner