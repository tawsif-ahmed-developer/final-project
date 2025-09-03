import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Apidata } from '../components/ContextApi'
import { GoHeartFill } from 'react-icons/go'
import { FaShoppingCart, FaSyncAlt } from 'react-icons/fa'
import { MdGridView, MdViewList } from 'react-icons/md'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

const Shop = () => {
  const data = useContext(Apidata)

const [perpage, setPerpage] = useState(6)
const [currentpage, setCurrentpage] = useState(1)
const lastpage = perpage * currentpage;
const firstpage = lastpage - perpage
const allpage = data.slice(firstpage, lastpage)

const pagenamber = []
for (let i = 1; i <= Math.ceil(data.length / perpage); i++) {
  pagenamber.push(i);
}

const paginet = (index)=>{
  setCurrentpage(index + 1)  
}




  const [show1, setShow1] = useState(false)

  return (
    <div className="py-10 px-2 xl:px-0">
      <Container>
        <div className="pb-15">
          <h2 className="font-bold font-dm xl:text-[49px] lg:text-3xl text-2xl text-[#262626]">
            Products
          </h2>
          <span className="font-[400] font-dm xl:text-[12px] lg:text-[10px] text-[9px] text-[#767676] hover:text-[#e83d26] hover:underline cursor-pointer">
            <Link to="/">Home {">"} Products</Link>
          </span>
        </div>

        <div className="flex gap-6">
          <div className="bg-white w-1/4">
            <div
              className="flex items-center justify-between pr-2 cursor-pointer"
              onClick={() => setShow1(!show1)}
            >
              <p className="font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]">
                Shop by Category
              </p>
              {show1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {show1 && (
              <ul className="mt-2">
                <li className="cursor-pointer pb-2">Category 1</li>
                <li className="cursor-pointer pb-2">Category 2</li>
                <li className="cursor-pointer pb-2">Category 3</li>
                <li className="cursor-pointer">Category 4</li>
              </ul>
            )}
          </div>

          <div className="bg-white w-3/4">

            <div className="pb-10 flex justify-between">
              <div className="flex gap-x-2">
                <MdGridView className='text-3xl border-[#262621]  border-1 rounded-sm' />
                <MdViewList className='text-3xl border-[#262621]  border-1 rounded-sm' />
              </div>
              <div className="">
                <div className="flex items-center gap-6 bg-white ">

                  <div className="flex items-center gap-2">
                    <label className="text-gray-600 font-medium">Sort by:</label>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#262626]">
                      <option value="default">Default</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pr-1">
                    <label className="text-gray-600 font-medium">Show:</label>
                    <select className="border border-gray-300 rounded-md px-6 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#262626]">
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="24">24</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Post allpage={allpage}/>
            </div>
            <div className="">
              <Pagination pagenamber={pagenamber} paginet={paginet}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop