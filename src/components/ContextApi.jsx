import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const Apidata = createContext()



const ContextApi = ({children}) => {

const [info, setInfo] = useState([])
const getdata =()=>{
    axios.get('https://dummyjson.com/products').then((respons)=>{
setInfo(respons.data.products)
    })
}

useEffect(()=>{
    getdata()
},[])

  return (
    <Apidata.Provider value={info}>{children}</Apidata.Provider>
  )
}

export {ContextApi, Apidata} 