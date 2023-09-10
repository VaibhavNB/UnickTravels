import React from 'react'

const GalleryImg = (props) => {
  return (
    <div className='w-1/5 h-1/5 transition-all ease-in duration-200 hover:origin-center rotate-6  hover:-rotate-0'>
        <img className='w-full' src={props.src} alt='Img'/>
    </div>
  )
}

export default GalleryImg