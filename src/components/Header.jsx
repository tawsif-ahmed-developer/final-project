import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="bg-[#FFFFFF] py-5">
                <Container>
                    <div className="lg:flex items-center">
                        <div className="lg:w-4/12 pl-2 2xl:pl-0">
                            <img src={logo} alt="" />
                        </div>
                        <div className="lg:w-4/12 w-full">
                            <ul className={`lg:flex font-[400] text-[14px] gap-6 justify-center font-dm text-[#767676] duration-300 ease-in-ou text-center cursor-pointer  ${menu == true ? "bg-[#9ff0c1] lg:bg-[#FFFFFF] mt-0" : " mt-[-150px] lg:mt-0"}`}>
                                <li className='duration-300 ease-in-out hover:text-[#262626] hover:font-[500]'>Home</li>
                                <li className='duration-300 ease-in-out hover:text-[#262626] hover:font-[500]'>Shop</li>
                                <li className='duration-300 ease-in-out hover:text-[#262626] hover:font-[500]'>About</li>
                                <li className='duration-300 ease-in-out hover:text-[#262626] hover:font-[500]'>Contacts</li>
                                <li className='duration-300 ease-in-out hover:text-[#262626] hover:font-[500]'>Journal</li>
                            </ul>
                        </div>
                        <div className="lg:hidden absolute top-3 right-2 text-[20px]" onClick={()=>setMenu(!menu)}>
                            {menu ? <RxCross2 /> :  <FaBars />}
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Header