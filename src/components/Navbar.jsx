import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";

const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()

    const [show, setShow] = useState(false);
    const [accshow, setAccShow] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            console.log(cateRef.current.contains(e.target) == true);
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
        },)
    }, [show])

    return (
        <>
            <div className="bg-[#F5F5F3] py-4 ">
                <Container>
                    <div className="flex items-center">
                        <div className="w-1/3 relative pl-2 lg:pl-0">
                            <div ref={cateRef} className="flex items-center gap-2">
                                <FaBarsStaggered className='text-[14px] font-[400] text-[#262626]' />
                                <span className='text-[14px] font-[400] text-[#262626]'>Shop by Category</span>
                            </div>
                            {show &&
                                <div className="bg-[#262626] w-[70%] cursor-pointer absolute left-0 top-7">
                                    <ul className='text-[#FFFFFFB2]'>
                                        <li className='pt-2 pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Accesories <LuChevronRight className='mr-2' /></li>
                                        <li className=' pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Furniture <LuChevronRight className='mr-2' /></li>
                                        <li className=' pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Electronics <LuChevronRight className='mr-2' /></li>
                                        <li className=' pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Clothes <LuChevronRight className='mr-2' /></li>
                                        <li className=' pb-3 text-[14px] font-[400] pl-[24px] border-b-[1px] border-[#2D2D2D] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Bags <LuChevronRight className='mr-2' /></li>
                                        <li className=' pb-2 text-[14px] font-[400] pl-[24px] duration-300 ease-in-out hover:pl-[30px] hover:text-[#FFFFFF] hover:font-[700] flex items-center justify-between'>Home appliances <LuChevronRight className='mr-2' /></li>
                                    </ul>
                                </div>
                            }

                        </div>
                        <div className="w-1/3">
                            <div className="relative text-[14px] font-[400] text-[#262626]">
                                <input type="text" placeholder='Search Products' className='w-full py-2 bg-[#FFFFFF] pl-4 pr-7 rounded-[5px] outline-0' />
                                <div className="absolute right-2 top-[13px]">
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 pr-5 lg:pr-0 relative">
                            <div className="flex items-center justify-end gap-8">
                                <div ref={accRef} className="flex">
                                    <FaUser />
                                    <FaSortDown />
                                </div>
                                <div className=""><FaShoppingCart />
                                </div>

                                {accshow &&
                                <div className="cursor-pointer bg-[#262626] absolute  right-12 top-10">
                                    <ul className='bg-[#FFFFFF] shadow-lg'>
                                        <li className='duration-300 ease-in-out py-2 px-7 text-[14px] hover:text-[#FFFFFF] hover:font-[700] hover:bg-[#2B2B2B]'>My Account</li>
                                        <li  className='duration-300 ease-in-out py-2 px-7 text-[14px] hover:text-[#FFFFFF] hover:font-[700] hover:bg-[#2B2B2B]'>Log Out</li>
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