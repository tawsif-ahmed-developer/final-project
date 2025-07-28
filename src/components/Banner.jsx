import React from 'react'
import banone from "../assets/banner01.png"
import Slider from 'react-slick';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Container from './Container'
import { IoIosRefresh } from "react-icons/io";
import { Fa2 } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        ><FaChevronRight className='right' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, } = props;
    return (
        <div
            onClick={onClick}
        ><FaChevronLeft className='left' /></div>
    );
}

const Banner = () => {
    var settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
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
                    borderRight: "2px #FFFFFFsolid",
                    padding: "8px 0",
                }}
            >
                0{i + 1}
            </div>
        )
    };

    return (
        <>
            <div className="">
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
            <div className="bg-[#ffff] border-b-[1px] border-[#F0F0F0] py-3">
                <Container className="justify-between flex">
                    <div className="pl-2 2xl:pl-0 flex items-center"><Fa2 /> <span className='pl-2 font-dm text-[16px] font-normal text-[#6D6D6D]'>Two years warranty</span></div>
                    <div className="flex items-center"><FaTruck /><span className='pl-2 font-dm text-[16px] font-normal text-[#6D6D6D]'>Free shipping</span></div>
                    <div className="pr-2 2xl:pr-0 flex items-center"><IoIosRefresh /> <span className='pl-2 font-dm text-[16px] font-normal text-[#6D6D6D]'>Return policy in 30 days</span></div>
                </Container>
            </div>
        </>

    )
}

export default Banner