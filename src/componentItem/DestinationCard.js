import React from 'react'

const DestinationCard = (props) => {
    
  return (
    <>
    <div className="p-4 ">
          <div className="flex flex-wrap relative rounded-md h-40 sm:h-80 w-40 sm:w-80">
            <img alt="gallery" className=" rounded-md absolute inset-0 w-full h-full object-cover object-center"
              src={props.src} />
            <div className='relative w-full h-full opacity-0 ease-in duration-300 hover:opacity-100 p-4 flex flex-col justify-center align-middle bg-slate-200 bg-opacity-90 text-[#555555]'>
              <h2 className='text-2xl font-bold'>
                {props.title}
              </h2>
              <p className='text-sm font-bold'>
                {props.desc}
              </p>
              
            </div>
          </div>
        </div>
    </>
  )
}

DestinationCard.defaultProps = {title:"Destination Name"}
DestinationCard.defaultProps = {desc:"Destination about it"}

export default DestinationCard