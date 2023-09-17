import React from 'react'
import DestinationCard from '../componentItem/DestinationCard'
import DestI1 from '../static/pexels-cottonbro-studio-5329529.jpg'
import DestI2 from '../static/pexels-cottonbro-studio-5329529.jpg'
import DestI3 from '../static/pexels-cottonbro-studio-5329529.jpg'
import DestI4 from '../static/pexels-cottonbro-studio-5329529.jpg'
import DestI5 from '../static/pexels-cottonbro-studio-5329529.jpg'
import DestI6 from '../static/pexels-cottonbro-studio-5329529.jpg'



const DestinationSec = () => {
  const title = "Destinations"
  return (
    <>
    <section id="Destinations" className="text-gray-600 body-font px-0 sm:px-36">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4">
          {title}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        
        <DestinationCard src={DestI1} title="Hubli"/>
        <DestinationCard src={DestI2} title="Dharwad"/>
        <DestinationCard src={DestI3} title="Kolar"/>
        <DestinationCard src={DestI4} title="Kelar"/>
        <DestinationCard src={DestI5} title="Amrithsar"/>
        <DestinationCard src={DestI6} title="Amrithsar"/>
        
        
      </div>
      </div>
      </section>
    </>
  )
}

export default DestinationSec