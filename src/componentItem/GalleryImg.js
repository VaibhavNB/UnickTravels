import React from 'react'
import pin from '../static/pin.png'

const GalleryImg = (props) => {
  return (
    <div className='w-1/5 h-1/5 m-3 transition-all ease-in duration-200 hover:origin-top-left rotate-2  hover:-rotate-0'>
        <img className='w-6 h-6 absolute left-[50%] top-3' src={pin} alt='pin'/>
        <img className='w-full' src={props.src} alt='Img'/>
    </div>
  )
}

export default GalleryImg