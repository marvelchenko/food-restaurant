import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-6 py-1 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all rounded-full'>
        {props.title}
      </button>
    </div>
  )
}

export default Button
