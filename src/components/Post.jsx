import React, { useContext } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { FaShoppingCart, FaSyncAlt } from 'react-icons/fa'

const Post = ({allpage}) => {
   
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {allpage.map((item) => (
                    <div
                        key={item.id}
                        className="relative shadow-md hover:shadow-xl duration-300 ease-in-out cursor-pointer group"
                    >
                        <div className="relative">
                            <img src={item.thumbnail} alt="" className="w-full" />

                            <div className="absolute bottom-0 left-0 bg-white w-full hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h3 className="flex items-center justify-end pt-2 pb-3 pr-2 text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]">
                                    Add to Wish List{' '}
                                    <span className="pl-4 text-[#262626]">
                                        <GoHeartFill />
                                    </span>
                                </h3>
                                <h4 className="flex items-center justify-end pb-3 pr-2">
                                    <FaSyncAlt />
                                </h4>
                                <h6 className="flex items-center justify-end pb-3 pr-2 text-[16px] font-dm font-[400] text-[#767676] hover:font-bold hover:text-[#262626]">
                                    Add to Cart{' '}
                                    <span className="pl-4">
                                        <FaShoppingCart className="text-[#262626]" />
                                    </span>
                                </h6>
                            </div>
                        </div>

                        <div className="md:flex justify-between h-16 p-2">
                            <h3 className="text-[12px] md:text-[16px] font-dm text-[#262626] font-bold">
                                {item.title}
                            </h3>
                            <h4 className="text-[16px] font-dm text-[#767676] font-[400]">
                                ${item.price}
                            </h4>
                        </div>
                        <div className="pb-2 md:pb-3 px-2">
                            <p>{item.availabilityStatus}</p>
                        </div>
                        <div className="absolute top-2 left-2 z-10 bg-[#262626] text-white px-3 py-0.5 text-[12px] md:text-[16px]">
                            {item.discountPercentage}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Post