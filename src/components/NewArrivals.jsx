import React, { useContext } from 'react'
import "./NewArrivals.css"
import Container from './Container'

import { GoHeartFill } from "react-icons/go";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSyncAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Apidata } from './ContextApi'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
    > <FaLongArrowAltLeft className='bg-[#00000033] w-[40px] h-[30px] rounded-full text-white absolute top-[140px] left-2  z-3 cursor-pointer' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
    > <FaLongArrowAltRight className='bg-[#00000033] w-[40px] h-[30px] rounded-full text-white absolute top-[140px] right-2 z-3 cursor-pointer' /></div>
  );
}



const NewArrivals = () => {

  const data = useContext(Apidata)



  const settings1 = {
    dots: false,
    infinite: true,
    nfinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="">
        <Container>

          <>
            <div className="font-dm font-bold text-[16px] sm:text-[24px] lg:text-[39px] text-[#262626]">New Arrivals</div>
            <div className="py-15">
              <Slider {...settings1}>
                {data.map((alldata) => (
                  <>
                  
                      <div className="w-[90%] h-97 relative duration-300 ease-in-out shadow-md hover:shadow-xl  cursor-pointer group  ">
                        <div className="relative ">
                          <img src={alldata.thumbnail} alt="" className='w-full' />
                          <div className="absolute bottom-0 left-0 bg-white w-full hidden md:block  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <h3 className='flex items-center justify-end pt-2 pb-3 pr-2 duration-300 ease-in-out text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]'>Add to Wish List <span className='pl-4 text-[#262626]'><GoHeartFill /></span> </h3>
                            <h4 className='flex items-center justify-end pb-3 pr-2'><FaSyncAlt /></h4>
                            <h6 className='flex items-center justify-end pb-3 pr-2 duration-300 ease-in-out text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]'>Add to Cart  <span className='pl-4'><FaShoppingCart className='text-[#262626]' /></span></h6>
                          </div>
                        </div>
                        <div className="md:flex items-center justify-between h-16 ">
                          <h3 className='text-[12px] md:text-[20px] font-dm text-[#262626] font-bold'>{alldata.title}</h3>
                          <h4 className='text-[16px] font-dm text-[#767676] font-[400]'>{alldata.price}</h4>
                        </div>
                        <div className="pb-2 md:pb-3">
                          <p>{alldata.availabilityStatus}</p>
                        </div>
                        <div className=" absolute top-1 md:top-2 left-1 md:left-3 z-10 bg-[#262626] text-white px-3 py-0.2 text-[12px] md:text-[16px]">
                          {alldata.discountPercentage}%
                        </div>
                      </div>
                  
                  </>

                ))}

              </Slider>
            </div>

          </>





        </Container>
      </div>
    </>
  )
}

export default NewArrivals