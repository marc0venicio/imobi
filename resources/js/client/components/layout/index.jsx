import React from 'react'
import About from '../../common/about/About'
import Banner from '../../common/banner/Banner'
import MyCarousel from '../../common/cards/MyCarousel'
import Faixa from '../../common/faixa/Faixa'
import Slider from '../../common/slider/Slider'
import Body from '../body/Body'
import ContentCard from '../contentCard/ContentCard'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function LayoutHomePage() {
  return (
    <>
    <Header />
    <Slider />
    <MyCarousel />
    <Faixa />
    <ContentCard />
    <About />
    <Footer />
    </>
  )
}

export default LayoutHomePage