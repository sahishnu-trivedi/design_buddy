import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Software from '../components/software/Software'
import About from '../components/aboutHome/About'
import ServiceSlider from '../components/serviceSlider/ServiceSlider'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Software />
      <About />
      <ServiceSlider />
    </>
  )
}

export default Home