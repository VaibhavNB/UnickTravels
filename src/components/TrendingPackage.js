import React from "react";
import PackageCard from "../componentItem/PackageCard.js";
import Trend1 from '../static/pexels-cottonbro-studio-5329529.jpg'
import Trend2 from '../static/pexels-cottonbro-studio-5329529.jpg'
import Trend3 from '../static/pexels-cottonbro-studio-5329529.jpg'
import Trend4 from '../static/pexels-cottonbro-studio-5329529.jpg'







const TrendingPackage = (props) => {

  
    
  return (
    <section id="Packages" className="text-gray-600 body-font px-2 py-4 sm:px-36 sm:py-10 flex flex-col justify-center">
      <div className="text-3xl font-bold flex justify-center">
        <h2>{props.title}</h2>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-2xl text-start text-xl font-medium title-font mb-2 text-gray-900">
              {props.subTitle}
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
    
          <PackageCard src={Trend1} cardTitle = "Hubli" cardDesc="Hubli Tour with famous places" cardCont="This package includes the famous places like siddarud math, nruptunga betta and etc"/>
          <PackageCard src={Trend2} cardTitle = "Hubli" cardDesc="Hubli Tour with famous places" cardCont="This package includes the famous places like siddarud math, nruptunga betta and etc"/>
          <PackageCard src={Trend3} cardTitle = "Hubli" cardDesc="Hubli Tour with famous places" cardCont="This package includes the famous places like siddarud math, nruptunga betta and etc"/>
          <PackageCard src={Trend4} cardTitle = "Hubli" cardDesc="Hubli Tour with famous places" cardCont="This package includes the famous places like siddarud math, nruptunga betta and etc"/>
          
        
        
        </div>
      </div>
    </section>
  );
};

export default TrendingPackage;
