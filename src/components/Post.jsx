import React, { useContext, useEffect, useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { FaShoppingCart, FaSyncAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { TfiReload } from 'react-icons/tfi';
import { GiSelfLove } from 'react-icons/gi';



const Post = ({ allpage, filtercategory, active }) => {
    const [allfilter, setAllfilter] = useState([])
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        const filtercate = filtercategory.slice(0, 6)
        setAllfilter(filtercate)
        setShowAll(true)
    }, [filtercategory])

    const handleshow = () => {
        setAllfilter(filtercategory)
        setShowAll(false)

    }
    const handleLess = () => {
        const filtercate = filtercategory.slice(0, 6)
        setAllfilter(filtercate)
        setShowAll(true)
    }

    return (
        <>
            <div>
                {allfilter.length > 0
                    ?
                    <>
                        {active
                            ?
                            <div className="">


                                {
                                    allfilter.map((item) => (
                                        <div className="py-5 h-[300px]" key={item.id}>
                                            <div className="relative h-full overflow-hidden shadow-md group flex items-center">
                                                <Link to={`/Shop/${item.id}`}>
                                                    <img
                                                        className="w-[80%] cursor-pointer object-cover "
                                                        src={item.thumbnail}
                                                        alt=""
                                                    />
                                                </Link>
                                                <div className="absolute top-4 left-3 z-5">
                                                    <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                                                        {item.discountPercentage}%
                                                    </p>
                                                </div>
                                                <div className="absolute right-0 bottom-0 py-4">
                                                    <div className="flex gap-4">

                                                        <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-pink-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                            <p className="text-sm font-medium text-gray-700 group-hover:text-pink-600">Add to Wish List</p>
                                                            <GiSelfLove className="text-gray-500 text-lg group-hover:text-pink-600 transition-colors duration-300" />
                                                        </div>


                                                        <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                            <TfiReload className="text-gray-500 text-lg group-hover:text-blue-600 transition-colors duration-300" />
                                                            <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Reload</p>
                                                        </div>


                                                        <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-green-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                            <p className="text-sm font-medium text-gray-700 group-hover:text-green-600">Add to Cart</p>
                                                            <FaShoppingCart className="text-gray-500 text-lg group-hover:text-green-600 transition-colors duration-300" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=" justify-between pl-[20px] pr-[20px]  ">
                                                    <div>
                                                        <p className="py-[10px] font-bold font-dm text-[16px] text-[#262626]">
                                                            {item.title}
                                                        </p>
                                                        <p className="py-[10px] font-bold font-dm text-[16px] text-[#8a8686]">
                                                            {item.category}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="py-[10px] font-dm text-[#767676]">${item.price} </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="mt-6">
                                    {showAll
                                        ?
                                        filtercategory.length > 6 &&
                                        <h2 onClick={handleshow} className='shadow-xl cursor-pointer w-30 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center font-dm font-bold capitalize duration-200 ease-in-out bg-black text-white'>Show All</h2>
                                        :
                                        <h2 onClick={handleLess} className='shadow-xl cursor-pointer w-30 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center font-dm font-bold capitalize duration-200 ease-in-out bg-black text-white'>Show less</h2>
                                    }
                                </div>
                            </div>
                            :
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

                                    {
                                        allfilter.map((item) => (

                                            <div
                                                key={item.id}
                                                className="h-100 relative shadow-md hover:shadow-xl duration-300 ease-in-out cursor-pointer group"
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
                                                    10%
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="mt-6">
                                    {showAll
                                        ?
                                        filtercategory.length > 6 &&
                                        <h2 onClick={handleshow} className='shadow-xl cursor-pointer w-30 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center font-dm font-bold capitalize duration-200 ease-in-out bg-black text-white'>Show All</h2>
                                        :
                                        
                                        <h2 onClick={handleLess} className='shadow-xl cursor-pointer w-30 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center font-dm font-bold capitalize duration-200 ease-in-out bg-black text-white'>Show less</h2>
                                    }
                                </div>
                            </div>
                        }

                    </>
                    :
                    <>
                        {active ?
                            <div className="">
                                {allpage.map((item) => (
                                    <div className="py-5 h-[300px]" key={item.id}>
                                        <div className="relative h-full overflow-hidden shadow-md group flex items-center">
                                            <Link to={`/Shop/${item.id}`}>
                                                <img
                                                    className="w-[80%] cursor-pointer object-cover "
                                                    src={item.thumbnail}
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="absolute top-4 left-3 z-5">
                                                <p className="py-[5px] px-[20px] border bg-black text-white font-bold text-[14px] font-dm">
                                                    {item.discountPercentage}%
                                                </p>
                                            </div>
                                            <div className="absolute right-0 bottom-0 py-4">
                                                <div className="flex gap-4">

                                                    <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-pink-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                        <p className="text-sm font-medium text-gray-700 group-hover:text-pink-600">Add to Wish List</p>
                                                        <GiSelfLove className="text-gray-500 text-lg group-hover:text-pink-600 transition-colors duration-300" />
                                                    </div>


                                                    <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                        <TfiReload className="text-gray-500 text-lg group-hover:text-blue-600 transition-colors duration-300" />
                                                        <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Reload</p>
                                                    </div>


                                                    <div className="w-[170px] flex items-center justify-end gap-2 py-3 px-4 rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-green-50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                                        <p className="text-sm font-medium text-gray-700 group-hover:text-green-600">Add to Cart</p>
                                                        <FaShoppingCart className="text-gray-500 text-lg group-hover:text-green-600 transition-colors duration-300" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className=" justify-between pl-[20px] pr-[20px]  ">
                                                <div>
                                                    <p className="py-[10px] font-bold font-dm text-[16px] text-[#262626]">
                                                        {item.title}
                                                    </p>
                                                    <p className="py-[10px] font-bold font-dm text-[16px] text-[#8a8686]">
                                                        {item.category}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="py-[10px] font-dm text-[#767676]">${item.price} </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :

                            <>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                                    {
                                        allpage.map((item) => (
                                            <div
                                                key={item.id}
                                                className="h-100 relative shadow-md hover:shadow-xl duration-300 ease-in-out cursor-pointer group"
                                            >
                                                <div className="relative">
                                                    <Link to={`/shop/${item.id}`}>
                                                        <img src={item.thumbnail} alt="" className="w-full" />
                                                    </Link>

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
                                                    10%
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>

                        }

                    </>
                }

            </div>
        </>
    )
}

export default Post