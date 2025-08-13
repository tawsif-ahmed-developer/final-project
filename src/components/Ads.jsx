import React from 'react'
import Container from './Container'
import ad1 from "../assets/Ad01.png"
import ad2 from "../assets/Ad02.png"
import ad3 from "../assets/Ad03.png"

const Ads = () => {
    return (
        <>
            <div className="py-12 bg-white">
                <Container>
                    <div className="flex justify-between">
                        <div className="w-[49%] ">
                            <img src={ad1} alt="" className='w-full'/>
                        </div>
                        <div className="w-[49%]">
                            <div className="">
                                <img src={ad2} alt="" className='w-full' />
                            </div>
                            <div className="pt-2 sm:pt-4 md:pt-8">
                                <img src={ad3} alt="" className='w-full'/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Ads