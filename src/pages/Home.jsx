import React from 'react'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import NewArrivals from '../components/NewArrivals'
import Bestsellers from '../components/Bestsellers'
import Ads2 from '../components/Ads2'
import SpecialOffers from '../components/SpecialOffers'

const Home = () => {
  return (
    <>
      <Banner />
      <Ads />
      <NewArrivals />
      <Bestsellers />
      <Ads2 />
      <SpecialOffers />
    </>
  )
}

export default Home