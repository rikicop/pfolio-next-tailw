import React from 'react'

const Button = (props) => {
    return (
        <button className=' text-white font-[Poppins] py-2 px-6 rounded md:ml-8'>
            {props.children}
        </button>
    )
}

export default Button
