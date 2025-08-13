import React from 'react'
import Container from './Container'
import img from "../assets/Ads_2.png"

const Ads2 = () => {
  return (
    <>
    
    <div className="pt-5 pb-18">
        <Container>
            <div className="">
                <img src={img} alt="" className='w-full'/>
            </div>
        </Container>
    </div>
    
    </>
  )
}

export default Ads2