import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { IoAdd } from 'react-icons/io5'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import { Apidata } from '../components/ContextApi'
import { useDispatch } from 'react-redux'
import { allproduct } from '../components/slice/productSlice'

const ProductDitails = () => {
  const productid = useParams()
  const data = useContext(Apidata)
  const [singleProducts, setSingleproducts] = useState([])
  const dispatch = useDispatch()



  const singleproduct = () => {
    axios.get(`https://dummyjson.com/products/${productid.id}`).then((response) => {
      setSingleproducts(response.data);
    })
  }

  useEffect(() => {
    singleproduct()

  }, [])

  const clientRating = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      singleProducts.rating > index + 1 ? <IoIosStar /> : singleProducts.rating > number ? <IoIosStarHalf /> : <IoIosStarOutline />
    )
  })

  const handleAddtoCart = (item) => {
    // dispatch(allproduct({singleProducts}))
    dispatch(allproduct({...item, qun:1}))
  }

  return (

    <div className='pb-[10px]'>
      <Container>
        <div className="flex gap-5 py-3">
          <div className="">
            <div className="pb-15">
              <h2 className="font-bold font-dm xl:text-[49px] lg:text-3xl text-2xl text-[#262626]">
                Products
              </h2>
              <span className="font-[400] font-dm xl:text-[12px] lg:text-[10px] text-[9px] text-[#767676] hover:text-[#e83d26] hover:underline cursor-pointer">
                <button onClick={() => window.history.back()} >shop {">"} Products</button>

              </span>
            </div>
          </div>

          <div className="w-1/1 cursor-pointer">
            <img className='w-[30%] mx-auto' src={singleProducts.thumbnail} alt="" />
          </div>

        </div>
        

        <div className="w-6/12">
          <div className="flex gap-2 ">

            <div className="flex gap-1 text-amber-400">
              {clientRating}
            </div>
          </div>
          <div className="flex gap-6 items-center border-b-1 pb-[20px] border-[#F0F0F0] py-[20px]">
            <p className='text-[#767676] font-dm text-[16px] line-through'>${singleProducts.price} </p>
            <p className='text-[#262626] font-dm font-bold text-[20px]'>${(singleProducts.price - ((singleProducts.price / 100) * singleProducts.discountPercentage)).toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-5 h-[60px]">
            <p className='text-[#262626] font-dm font-bold'>COLOR:</p>
            <div className="w-[10px] p-[10px] hover:scale-150 bg-[#767676] rounded-full duration-300 cursor-pointer"></div>
            <div className="w-[10px] p-[10px] hover:scale-150 bg-[#FF8686] rounded-full duration-300 cursor-pointer"></div>
            <div className="w-[10px] p-[10px] hover:scale-150 bg-[#7ED321] rounded-full duration-300 cursor-pointer"></div>
            <div className="w-[10px] p-[10px] hover:scale-150 bg-[#B6B6B6] rounded-full duration-300 cursor-pointer"></div>
            <div className="w-[10px] p-[10px] hover:scale-150 bg-[#15CBA5] rounded-full duration-300 cursor-pointer"></div>
          </div>
          <div className="flex items-center py-[20px] gap-3">
            <p className='text-[#262626] font-dm font-bold'>SIZE :</p>
            <select className=' border-1 px-[30px]' name="" id="">
              <option className='text-[#262626] font-dm font-bold' value="S">S</option>
              <option className='text-[#262626] font-dm font-bold' value="xl">XL</option>
              <option className='text-[#262626] font-dm font-bold' value="xl">XXL</option>
            </select>
          </div>
          <div className="pb-4 border-b-[1px] border-[#F0F0F0]">
            <div className="flex items-center gap-3">
              <div className="flex">
                <p className='text-[#262626] font-dm font-bold'>QUANTITY:</p>
              </div>
              <div className="flex items-center border-[1px] border-[#F0F0F0] gap-3">
                <div className="text-[20px] w-[50px] text-center cursor-pointer" >-</div>
                <div className=" text-[20px] w-[50px] text-center ">1</div>
                <div className="text-[20px] w-[50px] px-[10px] cursor-pointer">+</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 py-5 border-b-[1px] border-[#F0F0F0]">
            <p className='font-dm font-bold text-[16px] text-[#262626]'>STATUS:</p>
            <p className='font-dm text-[16px] text-[#767676]'>{singleProducts.stock} In stock</p>
          </div>

          <div className="flex gap-5 py-[10px] border-b-[1px] border-[#F0F0F0]">
            <div className="w-[150px] text-center py-[10px] border-[1px] hover:bg-black hover:text-white duration-300 text-[#262626] font-dm font-bold cursor-pointer">
              <p>Add to Wish List</p>
            </div>
            <div onClick={()=> handleAddtoCart(singleProducts)} className="w-[150px] text-center py-[10px] border-[1px] hover:bg-black hover:text-white duration-300 text-[#262626] font-dm font-bold cursor-pointer">
              Add to Cart
            </div>
          </div>

          <div className="py-[10px] ">
            <div className="flex justify-between items-center gap-3 py-3 " >
              <p className='font-dm font-bold text-[#262626] text-[16px]'>FEATURES  & DETAILS</p>
              <IoAdd className='font-bold text-[#262626] text-[20px]' />
            </div>

            <div className="">
              <p>description</p>
            </div>

            <div className="border-b-[1px] border-[#F0F0F0] pb-3"></div>


            <div className="flex justify-between items-center gap-3 py-3" >
              <p className='font-dm font-bold text-[#262626] text-[16px]'>SHIPPING & RETURNS</p>
              <IoAdd className='font-bold text-[#262626] text-[20px]' />
            </div>

            <div className="">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="border-b-[1px] border-[#F0F0F0] pb-3"></div>
          </div>
          <div className="flex gap-5">
            <p className='font-dm  text-[20px] text-[#767676]'>Description---</p>
            <p className='font-dm font-bold text-[20px] text-[#262626]'>Reviews (1)</p>


          </div>
        </div>

        <div className="w-full">
          <div className="py-[10px] border-b-[1px] border-[#F0F0F0] ">
            <p className='pt-[20px] font-dm text-[14px] text-[#767676]'>1 review for Product</p>
          </div>
          <div className="flex justify-between py-5">
            <div className="flex gap-10 items-center">
              <p className='font-dm text-[16px] text-[#262626]'>John Ford</p>
              <div className="flex items-center text-amber-200 text-[20px]">

              </div>
            </div>
            <div className="font-dm text-[16px] text-[#767676]">
              <p>6 months ago</p>
            </div>
          </div>
          <div className=" border-b-[1px] border-[#F0F0F0]">
            <p className='font-dm text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="w-6/12 py-[10px]">
          <div className="pt-[10px] pb-[30px]">
            <p className='font-dm font-bold text-[20px] text-[#262626]'>Add a Review</p>
          </div>
          <div className="">
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Name</p>
              <form action="">
                <input className='w-full border-b-[1px] border-[#F0F0F0] py-[10px] focus:outline-none ' type="text" placeholder='Your name here' />
              </form>
            </div>
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Email</p>
              <form action="">
                <input className='w-full border-b-[1px] border-[#F0F0F0] py-[10px] focus:outline-none ' type="text" placeholder='Your email here' />
              </form>
            </div>
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Review</p>
              <form action="">
                <input className='w-full  focus:outline-none  border-b-[1px] border-[#F0F0F0] pt-[10px] pb-[70px] pl-[5px] ' type="text" placeholder='Your review here' />
              </form>
            </div>
            <div className="py-[10px]">
              <div className="text-center w-[200px] py-[10px] bg-black text-white cursor-pointer">
                <p>Post</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDitails