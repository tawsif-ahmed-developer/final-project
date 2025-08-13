import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import NewArrivals from '../components/NewArrivals'
import Bestsellers from '../components/Bestsellers'
import Ads2 from '../components/Ads2'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Ads/>
    <NewArrivals/>
    <Bestsellers/>
    <Ads2/>
    <SpecialOffers/>
    <Footer/>
    
    </>
  )
}

export default Home