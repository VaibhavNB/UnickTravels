import React from 'react'

const Footer = () => {
  return (
    <div className='px-36 py-10 bg-cyan-50'>
        <div className='flex flex-start flex-col'>
            <ul className='flex justify-start flex-col'>
                <li className='mx-3 my-2 text-start'><a href='#Home'>Home</a></li>
                <li className='mx-3 my-2 text-start'><a href='#Packages'>Packages</a></li>
                <li className='mx-3 my-2 text-start'><a href='#Destinations'>Destinations</a></li>
                <li className='mx-3 my-2 text-start'><a href='#Vehicles'>Vehicles</a></li>
                <li className='mx-3 my-2 text-start'><a href='#Gallery'>Gallery</a></li>
                <li className='mx-3 my-2 text-start'><a href='#Booking'>Booking</a></li>
            </ul>
        <p>&#169;All Rights are Reserved || 2023</p>
        </div>

    </div>
  )
}

export default Footer