import React from 'react'
import GalleryImg from '../componentItem/GalleryImg'
import img1 from "../static/pexels-gabriel-hohol-3593923.jpg"

const Gallery = () => {
  return (
    <div id='Gallery' className='text-gray-600 body-font px-4 sm:px-36 flex flex-col justify-evenly'>
      <div className="container flex flex-col py-24">
          <div className="flex flex-col justify-center text-center">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-8">
              Gallery
            </h1>
          </div>
      </div>
     

        <div className='flex justify-around pb-10 flex-wrap '>

        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        <GalleryImg src={img1}/>
        </div>
        
      
    </div>
  )
}

export default Gallery