import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch } from 'react-redux'
import { allproduct } from '../components/slice/productSlice'

const Contacts = () => {
    // const dispatch = useDispatch()
    // const [input, setInput] = useState("")

    // const handleInput = (e) => {
    //     setInput(e.target.value);
    // }
    // const handleSubmit = () => {
    //     dispatch(allproduct(input))
    // }
    const dispatch = useDispatch()

    const [input, setInput] = useState()
    const handleinput = (e) => {
        setInput(e.target.value);
    }
    const handlesubmit = () => {
        dispatch(allproduct(input));
        
    }



    return (
        <div className='py-30 '>
            <Container className="text-center">
                <input onChange={handleinput} className='border-2 border-amber-200' type="text" />
                <button onClick={handlesubmit} >submit</button>
            </Container>
        </div>
    )
}

export default Contacts