import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { Apidata } from '../components/ContextApi'
import { MdGridView, MdViewList } from 'react-icons/md'
import Post from '../components/Post'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Shop = () => {

  const data = useContext(Apidata)

  const [perpage, setPerpage] = useState(6)
  const [currentpage, setCurrentpage] = useState(1)
  const lastpage = perpage * currentpage;
  const firstpage = lastpage - perpage
  const allpage = data.slice(firstpage, lastpage)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [active, setActive] = useState("")
  const [category, setCategory] = useState([])
  const [filtercategory, setFiltercategory] = useState([])
  const [brand, setBrand] = useState([])
  const [low, setLow] = useState()
  const [high, setHigh] = useState()

  const pagenamber = []

  for (let i = 1; i <= Math.ceil(data.length / perpage); i++) {
    pagenamber.push(i);
  }

  const paginet = (index) => {
    setCurrentpage(index + 1)
  }

  const next = () => {
    if (currentpage < pagenamber.length) {

      setCurrentpage(currentpage + 1)
    }

  }
  const previous = () => {
    if (currentpage > 1) {

      setCurrentpage(currentpage - 1)
    }
  }
  const handlePageNumber = (e) => {
    setPerpage(e.target.value);

  }
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))])
    setBrand([...new Set(data.map((item) => item.brand))])
  }, [data])

  const handelcategory = (citem) => {
    const filteritem = (data.filter((filteritem) => filteritem.category == citem))
    setFiltercategory(filteritem);
  }
  const handelbrand = (citem) => {
    const filteritem = (data.filter((filteritem) => filteritem.brand == citem))
    setFiltercategory(filteritem);
  }
  const handelAllproduct = () => {
    setFiltercategory("")
  }
  const handleActive = () => {
    setActive("active");

  }
  const handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    const filterprice = data.filter((item) => item.price > value.low && item.price < value.high)
    setFiltercategory(filterprice);

  }


  return (
    <div className="py-10 px-2 xl:px-0">
      <Container>
        <div className="pb-15">
          <h2 className="font-bold font-dm xl:text-[49px] lg:text-3xl text-2xl text-[#262626]">
            Products
          </h2>
          <span className="font-[400] font-dm xl:text-[12px] lg:text-[10px] text-[9px] text-[#767676] hover:text-[#e83d26] hover:underline cursor-pointer">
            <Link to="/"> Home {">"} Products</Link>
          </span>
        </div>

        <div className="flex gap-6">
          <div className="bg-white w-1/4">
            <div className="mb-2">
              <div
                className="flex items-center justify-between pr-2 cursor-pointer"
                onClick={() => setShow1(!show1)}
              >
                <p className={`${show1 ? "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]  pb-2" : "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]"}`}>
                  Shop by Category
                </p>
                {show1 ? <IoIosArrowForward /> : <IoIosArrowDown />}
              </div>
              {!show1 && (
                <>
                  <ul className="mt-2">
                    {category.map((item) => (
                      <>
                        <li onClick={() => handelcategory(item)} className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold">{item}</li>
                      </>
                    ))}
                    {filtercategory.length > 0 ?

                      <li onClick={handelAllproduct} className='cursor-pointer mt-4 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center  text-[#262621]  font-dm font-bold capitalize duration-200 ease-in-out hover:bg-black hover:text-white'>All product</li>
                      : ""
                    }
                  </ul>
                </>

              )}
            </div>
            <div className="mb-2">
              <div
                className="flex items-center justify-between pr-2 cursor-pointer"
                onClick={() => setShow2(!show2)}
              >
                <p className={`${show2 ? "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]  pb-2" : "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]"}`}>
                  Shop by Brand
                </p>
                {show2 ? <IoIosArrowForward /> : <IoIosArrowDown />}
              </div>
              {!show2 && (
                <>
                  <ul className="mt-2">
                    {brand.map((item) => (
                      <>
                        <li onClick={() => handelbrand(item)} className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold">{item}</li>
                      </>
                    ))}
                    {filtercategory.length > 0 ?

                      <li onClick={handelAllproduct} className='cursor-pointer mt-4 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center  text-[#262621]  font-dm font-bold capitalize duration-200 ease-in-out hover:bg-black hover:text-white'>All product</li>
                      : ""
                    }
                  </ul>
                </>

              )}
            </div>
            <div className="mb-2">
              <div
                className="flex items-center justify-between pr-2 cursor-pointer"
                onClick={() => setShow3(!show3)}
              >
                <p className={`${show3 ? "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]  pb-2" : "font-dm font-bold text-[#262626] text-[12px] md:text-[16px] lg:text-[20px]"}`}>
                  Shop by Price
                </p>
                {show3 ? <IoIosArrowForward /> : <IoIosArrowDown />}
              </div>
              {!show3 && (
                <>
                  <ul className="mt-2">
                    <li className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold" onClick={() => handlePrice({ low: 0, high: 10 })}>$0  -  $10</li>
                    <li className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold" onClick={() => handlePrice({ low: 11, high: 20 })}>$10 - $20</li>
                    <li className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold" onClick={() => handlePrice({ low: 21, high: 30 })}>$21 - $30</li>
                    <li className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold" onClick={() => handlePrice({ low: 31, high: 40 })}>$31 - $40</li>
                    <li className="cursor-pointer pb-2 text-1xl text-[#262621]  font-dm font-medium capitalize duration-200 ease-in-out hover:font-bold" onClick={() => handlePrice({ low: 41, high: 50 })}>$41 - $50</li>
                    {filtercategory.length > 0 ?

                      <li onClick={handelAllproduct} className='cursor-pointer mt-4 pb-2 pt-2 text-[18px] border-1 border-[#262626] text-center items-center  text-[#262621]  font-dm font-bold capitalize duration-200 ease-in-out hover:bg-black hover:text-white'>All product</li>
                      : ""
                    }
                  </ul>
                </>

              )}
            </div>
          </div>

          <div className="bg-white w-3/4">

            <div className="pb-10 flex justify-between">
              <div className="flex gap-x-2">
                <MdGridView onClick={() => setActive("")} className={`${active == "active" ? "text-3xl border-[#262621]  border-1 rounded-sm" : "text-3xl border-[#db7474] text-white bg-black  border-1 rounded-sm"}`} />
                <MdViewList onClick={handleActive} className={`${active == "active" ? "text-3xl border-[#db7474] text-white bg-black  border-1 rounded-sm" : "text-3xl border-[#262621]  border-1 rounded-sm"}`} />
              </div>
              <div className="">
                <div className="flex items-center gap-6 bg-white ">

                  <div className="flex items-center gap-2">
                    <label className="text-gray-600 font-bold font-dm">Sort by:</label>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#262626]">
                      <option value="default">Default</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                  {filtercategory.length ? "" :
                    <div className="flex items-center gap-2 pr-1">
                      <label className="text-gray-600 font-bold font-dm">Show:</label>
                      <select onChange={handlePageNumber} className="border border-gray-300 rounded-md px-6 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#262626]">
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                      </select>
                    </div>
                  }

                </div>
              </div>
            </div>
            <div className="">
              <Post allpage={allpage} filtercategory={filtercategory} active={active} />
            </div>
            <div className="">
              <Pagination pagenamber={pagenamber} paginet={paginet} next={next} previous={previous} currentpage={currentpage} filtercategory={filtercategory} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop