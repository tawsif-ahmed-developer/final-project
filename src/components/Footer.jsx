import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="bg-[#F5F5F3]">
                <Container className="py-16">
                    <div className="flex pb-4">
                        <div className="w-1/7 cursor-pointer">
                            <ul className='text-[14px] font-dm font-[400] text-[#6D6D6D]'>
                                <li className='pb-3 text-[16px] font-dm font-[700] text-[#262626]'>MENU</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'> <Link to="/">Home</Link></li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'> <Link to="/shop">Shop</Link></li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>About</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Contact</li>
                                <li className='pb-2 hover:text-[#e83d26] hover:underline'>Journal</li>
                            </ul>

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

                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-5/7">
                            <div className="flex  gap-2">
                                
                                <FaFacebookF className='cursor-pointer hover:text-[#e83d26]' />
                                <FaLinkedinIn className='cursor-pointer hover:text-[#e83d26]' />
                                <FaInstagram className='cursor-pointer hover:text-[#e83d26]' />
                            </div>
                        </div>
                        <div className="w-2/7">
                            <p className='text-[13px] font-dm font-[400] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                        </div>
                    </div>
                </Container>


            </div>

        </>
    )
}

export default Footer