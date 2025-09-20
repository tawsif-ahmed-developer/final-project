import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let sopRef = useRef()

    const [show, setShow] = useState(false);
    const [accshow, setAccShow] = useState(false);
    const [sop, setsop] = useState(false);


    useEffect(() => {
        document.addEventListener("click", (e) => {

            if (cateRef.current.contains(e.target) == true) {
                setShow(!show)
            } else {
                setShow(false)
            }
            if (accRef.current.contains(e.target) == true) {
                setAccShow(!accshow)
            } else {
                setAccShow(false)
            }
            if (sopRef.current.contains(e.target) == true) {
                setsop(!sop)
            } else {
                setsop(false)
            }
        },)
    }, [show, accshow, sop])

    return (
        <>
            <div className="bg-[#F5F5F3] py-4 ">
                <Container>
                    <div className="flex items-center px-2 2xl:px-0">
                        <div className="w-1/4 sm:w-1/3 relative pl-2 lg:pl-0">
                            <div ref={cateRef} className="flex items-center gap-2">
                                <FaBarsStaggered className='text-[14px] font-[400] text-[#262626]' />
                                <span className='text-[14px] font-[400] text-[#262626]'>Shop by Category</span>
                            </div>
                            {/* show */}
                            {show &&
                                <div className="bg-[#262626] w-[263px] z-10 cursor-pointer absolute left-0 top-11">
                                    <ul className='relative text-[#FFFFFFB2]'>
                                        <li className='group pt-3 pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Accesories <LuChevronRight className='mr-2' />
                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Accesories</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two bou</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Accesories</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Accesories</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three bou</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Accesories</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className=' group pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Furniture <LuChevronRight className='mr-2' />

                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Furniture</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Furniture</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Furniture</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Furniture</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className=' group pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Electronics <LuChevronRight className='mr-2' />
                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Phones</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Phone 7</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Computers</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Computer 7</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Smart watches</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Smart watches 7</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Cameras</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='group pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Clothes<LuChevronRight className='mr-2' />
                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Clothes</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Clothes</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Clothes</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Clothes</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='group pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Bags <LuChevronRight className='mr-2' />
                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Bags</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Bags</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Bags</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>Bags</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className='group pb-[19px] text-[14px] font-[400] pl-[24px] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Home appliances <LuChevronRight className='mr-2' />
                                            <div className=" gap-7 absolute top-0 left-66 w-[475px] bg-[#FFFFFF] p-4 hidden group-hover:flex">
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>appliances</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>appliances</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>two</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>appliances</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>three</li>
                                                </ul>
                                                <ul className='text-[#767676] text-[14px] font-normal '>
                                                    <li className='pb-1 text-[16px] text-[#262626] font-dm font-bold'>appliances</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 1</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 2</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 3</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 4</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 5</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 6</li>
                                                    <li className='pb-[2px] duration-300 ease-in-out hover:text-[#262626] hover:font-bold'>Camera 7</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            }

                        </div>
                        <div className="w-2/4 sm:w-1/3">
                            <div className="relative text-[14px] font-[400] text-[#262626]">
                                <input type="text" placeholder='Search Products' className='w-full py-2 bg-[#FFFFFF] pl-4 pr-7 rounded-[5px] outline-0' />
                                <div className="absolute right-2 top-[13px]">
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 sm:w-1/3  lg:pr-0 relative">
                            <div className="flex items-center justify-end gap-3 sm:gap-8">
                                <div ref={accRef} className="flex">
                                    <FaUser />
                                    <FaSortDown />
                                </div>
                                <div ref={sopRef} className="">
                                    <FaShoppingCart />
                                </div>
                                {/* one */}

                                {sop &&
                                    <div className="z-20 absolute  right-0 top-10 bg-[#FFFFFF] shadow-lg w-[360px] border-[1px] border-[#F0F0F0]">
                                        <div className="p-4 flex pl-3 bg-[#F5F5F3]">
                                            <div className="w-2/7 bg-[#D8D8D8] h-[80px] rounded-[5px]">

                                            </div>
                                            <div className="w-5/7 pl-3 flex items-center justify-between">
                                                <div className=" text-[14px] text-[#262626] font-dm font-[700]">
                                                    <h3>Black Smart Watch</h3>
                                                    <h4 className='pt-2'>$44.00</h4>
                                                </div>
                                                <div className="">
                                                    <RxCross2 />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className=" text-[#767676] font-dm font-[700] text-[16px] pb-3">
                                                <h2>Subtotal: <span className='text-[#262626]'>$44.00</span> </h2>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-1/2 bg-[#FFFFFF] duration-300 ease-in-out text-[14px] font-bold font-dm text-center py-3 border-[1px] border-[#2B2B2B] hover:bg-black hover:text-[#FFFFFF]">View Cart</div>
                                                <div className="w-1/2 bg-[#FFFFFF] duration-300 ease-in-out text-[14px] font-bold font-dm text-center py-3 border-[1px] border-[#2B2B2B] hover:bg-black hover:text-[#FFFFFF]">Checkout </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* one end */}
                                {/* accshow */}
                                {accshow &&
                                    <div className="cursor-pointer bg-[#262626] z-20 absolute  right-12 top-10">
                                        <ul className='bg-[#FFFFFF] shadow-lg'>
                                            <li className='w-[160px] duration-300 ease-in-out py-3 text-center text-[14px] hover:text-white hover:font-[700] hover:bg-[#2B2B2B]'>My Account</li>
                                            <li className='w-[160px] duration-300 ease-in-out py-3 text-center text-[14px] hover:text-white hover:font-[700] hover:bg-[#2B2B2B]'>Log Out</li>
                                        </ul>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar



// import React, { useEffect, useRef, useState } from 'react'
// import Container from './Container'
// import { FaBarsStaggered } from "react-icons/fa6";
// import { LuChevronRight } from "react-icons/lu";
// import { IoSearchSharp } from "react-icons/io5";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { FaSortDown } from "react-icons/fa";

// const Navbar = () => {
//     const cateRef = useRef();
//     const accRef = useRef();

//     const [show, setShow] = useState(false);
//     const [accshow, setAccShow] = useState(false);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (cateRef.current && !cateRef.current.contains(e.target)) {
//                 setShow(false);
//             }

//             if (accRef.current && !accRef.current.contains(e.target)) {
//                 setAccShow(false);
//             }
//         };

//         document.addEventListener("click", handleClickOutside);

//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             <div className="bg-[#F5F5F3] py-4 ">
//                 <Container>
//                     <div className="flex items-center">

//                         <div className="w-1/3 relative pl-2 lg:pl-0">
//                             <div ref={cateRef} onClick={() => setShow(prev => !prev)} className="flex items-center gap-2 cursor-pointer">
//                                 <FaBarsStaggered className='text-[14px] font-[400] text-[#262626]' />
//                                 <span className='text-[14px] font-[400] text-[#262626]'>Shop by Category</span>
//                             </div>
//                             {show &&
//                                 <div className="bg-[#262626] w-[70%] cursor-pointer absolute left-0 top-7 z-10">
//                                     <ul className='text-[#FFFFFFB2]'>
//                                         {["Accessories", "Furniture", "Electronics", "Clothes", "Bags", "Home appliances"].map((item, idx) => (
//                                             <li key={idx} className='pt-2 pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>
//                                                 {item} <LuChevronRight className='mr-2' />
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             }
//                         </div>


//                         <div className="w-1/3">
//                             <div className="relative text-[14px] font-[400] text-[#262626]">
//                                 <input type="text" placeholder='Search Products' className='w-full py-2 bg-[#FFFFFF] pl-4 pr-7 rounded-[5px] outline-0' />
//                                 <div className="absolute right-2 top-[13px]">
//                                     <IoSearchSharp />
//                                 </div>
//                             </div>
//                         </div>


//                         <div className="w-1/3 pr-5 lg:pr-0 relative">
//                             <div className="flex items-center justify-end gap-8">
//                                 {/* Account Dropdown */}
//                                 <div ref={accRef} onClick={() => setAccShow(prev => !prev)} className="flex items-center gap-1 cursor-pointer">
//                                     <FaUser />
//                                     <FaSortDown />
//                                 </div>


//                                 <div className="cursor-pointer">
//                                     <FaShoppingCart />
//                                 </div>


//                                 {accshow &&
//                                     <div className="cursor-pointer bg-[#262626] absolute right-12 top-10 z-10">
//                                         <ul className='bg-[#FFFFFF] shadow-lg'>
//                                             <li className='duration-300 ease-in-out py-2 px-7 text-[14px] hover:text-[#FFFFFF] hover:font-[700] hover:bg-[#2B2B2B]'>My Account</li>
//                                             <li className='duration-300 ease-in-out py-2 px-7 text-[14px] hover:text-[#FFFFFF] hover:font-[700] hover:bg-[#2B2B2B]'>Log Out</li>
//                                         </ul>
//                                     </div>
//                                 }

//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         </>
//     );
// };

// export default Navbar;




