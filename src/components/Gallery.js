import React from 'react'
import GalleryImg from '../componentItem/GalleryImg'
import img1 from "../static/pexels-gabriel-hohol-3593923.jpg"

const Gallery = () => {
  return (
    <div className='text-gray-600 body-font px-4 sm:px-36 flex flex-col justify-evenly'>
      <div class="container flex flex-col py-24">
          <div class="flex flex-col justify-center text-center">
            <h1 class="sm:text-3xl text-3xl font-bold title-font mb-8">
              Gallery
            </h1>
          </div>
      </div>
     

        <div className='flex justify-around pb-10'>

        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        </div>
        
      
    </div>
  )
}

export default Gallery