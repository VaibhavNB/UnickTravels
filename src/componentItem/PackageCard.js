import React from "react";

const PackageCard = (props) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-white pb-6 p-2 shadow-lg">
        <div className="ease-in duration-300 w-full h-40 overflow-hidden origin-center mb-3">
          <img
            className="h-40 w-full object-cover object-center mb-6 hover:scale-150 ease-in duration-300"
            src={props.src}
            alt="content"
          />
        </div>
        <div className="mx-6 mb-6">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {props.cardTitle}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
           {props.cardDesc}
          </h2>
          <p className="leading-relaxed text-base">
            {props.cardCont}
          </p>
        </div>
      </div>
    </div>
  );
};

PackageCard.defautlProps  = {cardTitle:"Package Title"}
PackageCard.defautlProps  = {cardDesc:"Package Description"}
PackageCard.defautlProps  = {cardCont:"Package content comes here and this is the demo text"}
export default PackageCard;
