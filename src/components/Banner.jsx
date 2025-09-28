import React from 'react'
import banone from "../assets/banner01.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Container from './Container'
import { IoIosRefresh } from "react-icons/io";
import { Fa2 } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import "./banner.css"
import { useSelector } from 'react-redux';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        ><FaChevronRight className='bg-[#262626] w-[30px] h-[30px] rounded-full text-white absolute top-1/2 right-[20px] -translate-y-1/2 z-3 cursor-pointer' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, } = props;
    return (
        <div
            onClick={onClick}
        ><FaChevronLeft className='bg-[#262626] w-[30px] h-[30px] rounded-full text-white absolute top-1/2 left-[20px] -translate-y-1/2 z-3 cursor-pointer' /></div>
    );
}

const Banner = () => {
    var settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                }
            },
        ],
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "transparent",
                    borderRight: "2px solid white",
                    padding: "8px 0",
                }}
            >
                0{i + 1}
            </div>
        )
    };

    

//    const data = useSelector((state)=>state.product.products)
//    console.log(data);
   

    return (
        <>
            <div className="relative overflow-hidden">
                <Slider {...settings}>
                    <div className="w-full">
                        <img className="w-full" src={banone} alt="banner" />
                    </div>
                    <div>
                        <img className="w-full" src={banone} alt="banner" />
                    </div>
                    <div>
                        <img className="w-full" src={banone} alt="banner" />
                    </div>
                    <div>
                        <img className="w-full" src={banone} alt="banner" />
                    </div>
                </Slider>
            </div>
            <div className="bg-[#ffff] border-b-[1px] border-[#F0F0F0] py-2 md:py-3">
                <Container className="justify-between flex">
                    <div className="pl-2 2xl:pl-0 flex items-center"><Fa2 className="text-[13px] md:text-[20px]" /> <span className='pl-1 md:pl-2 font-dm text-[10px] md:text-[16px] font-normal text-[#6D6D6D]'>Two years warranty</span></div>
                    <div className="flex items-center"><FaTruck className="text-[13px] md:text-[20px]" /><span className='pl-1 md:pl-2 font-dm text-[10px] md:text-[16px] font-normal text-[#6D6D6D]'>Free shipping</span></div>
                    <div className="pr-2 2xl:pr-0 flex items-center"><IoIosRefresh className="text-[13px] md:text-[20px]" /> <span className='pl-1 md:pl-2 font-dm text-[10px] md:text-[16px] font-normal text-[#6D6D6D]'>Return policy in 30 days</span></div>
                </Container>
            </div>
        </>

    )
}

export default Banner