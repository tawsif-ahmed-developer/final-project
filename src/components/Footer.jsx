import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import {  FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="bg-[#F5F5F3]">
                <Container>
                    <div className="flex py-16">
                        <div className="w-1/7 cursor-pointer">
                            <ul className='text-[14px] font-dm font-[400] text-[#6D6D6D]'>
                                <li className='pb-3 text-[16px] font-dm font-[700] text-[#262626]'>MENU</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Home</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Shop</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>About</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Contact</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Journal</li>
                            </ul>
                            <div className="flex pt-4 gap-2">
                                <FaFacebookF className='hover:text-[#e83d26]'/>
                                <FaLinkedinIn className='hover:text-[#e83d26]'/>
                                <FaInstagram className='hover:text-[#e83d26]'/>
                            </div>
                        </div>
                        <div className="w-1/7 cursor-pointer">
                            <ul className='text-[14px] font-dm font-[400] text-[#6D6D6D]'>
                                <li className='pb-3  text-[16px] font-dm font-[700] text-[#262626]'>SHOP</li>
                                <li className='pb-2  hover:text-[#e83d26] hover:underline'>Category 1</li>
                                <li className='pb-2  hover:text-[#e83d26] hover:underline'>Category 2</li>
                                <li className='pb-2  hover:text-[#e83d26] hover:underline'>Category 3</li>
                                <li className='pb-2  hover:text-[#e83d26] hover:underline'>Category 4</li>
                                <li className='pb-2  hover:text-[#e83d26] hover:underline'>Category 5</li>
                            </ul>
                        </div>
                        <div className="w-1/7 cursor-pointer">
                            <ul className='text-[14px] font-dm font-[400] text-[#6D6D6D]'>
                                <li className='pb-3 text-[16px] font-dm font-[700] text-[#262626]'>HELP</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Privacy Policy</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Terms & Conditions</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Special E-shop</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Shipping</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Secure Payments</li>
                            </ul>
                        </div>
                        <div className="w-2/7 cursor-pointer">
                            <div className="text-[16px] font-dm font-bold text-[#262626]">
                                <h3>(052) 611-5711</h3>
                            <p>company@domain.com</p>
                            </div>
                        </div>
                        <div className="w-2/7 cursor-pointer">
                        <div className="">
                            <img src={logo} alt="" />
                            <p className='text-[13px] pt-34 font-dm font-[400] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                        </div>
                        </div>
                    </div>
                </Container>


            </div>

        </>
    )
}

export default Footer