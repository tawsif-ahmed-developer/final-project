import React, { useContext } from 'react'
import Container from './Container'
import { FaShoppingCart, FaSyncAlt } from 'react-icons/fa'
import { GoHeartFill } from 'react-icons/go'
import { Apidata } from './ContextApi'
import "./NewArrivals.css"


const Bestsellers = () => {
    const data = useContext(Apidata)

    
    const filteredData = data.filter(item => [7, 28, 17, 18].includes(item.id))

    return (
        <div className='py-16'>
            <Container>
                <div className="flex gap-10">
                    {filteredData.map(item => (
                        <div key={item.id} className="w-[95%]  relative duration-300 ease-in-out shadow-md hover:shadow-xl cursor-pointer group">
                            <div className="relative">
                                <img src={item.thumbnail} alt="" className='w-full' />
                                <div className="absolute bottom-0 left-0 bg-white w-full hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <h3 className='flex items-center justify-end pt-2 pb-3 pr-2 duration-300 ease-in-out text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]'>
                                        Add to Wish List <span className='pl-4 text-[#262626]'><GoHeartFill /></span>
                                    </h3>
                                    <h4 className='flex items-center justify-end pb-3 pr-2'><FaSyncAlt /></h4>
                                    <h6 className='flex items-center justify-end pb-3 pr-2 duration-300 ease-in-out text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]'>
                                        Add to Cart <span className='pl-4'><FaShoppingCart className='text-[#262626]' /></span>
                                    </h6>
                                </div>
                            </div>
                            <div className="md:flex justify-between h-16">
                                <h3 className='text-[12px] md:text-[20px] font-dm text-[#262626] font-bold'>{item.title}</h3>
                                <h4 className='text-[16px] font-dm text-[#767676] font-[400] pt-1'>{item.price}</h4>
                            </div>
                            <div className="pb-2 md:pb-3">
                                <p>{item.availabilityStatus}</p>
                            </div>
                            <div className="absolute top-1 md:top-2 left-1 md:left-3 z-10 bg-[#262626] text-white px-3 py-0.2 text-[12px] md:text-[16px]">
                                {item.discountPercentage}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Bestsellers