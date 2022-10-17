import React from 'react';

import image from '../../assets/images/banner-handphone.png';

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-[#659DBD] via-[#FFFFFF] to-[#C7BB31] ">
      <div className="container mx-auto">
        <div className="pt-10">
          <div className="banner mt-4">
            <div className="text-7xl font-bold text-white">PEOPLE ADVISOR</div>
            <div className="flex">
              <div className="w-1/4 text-white pt-10">
                <span className=" text-5xl">Calculate your market value</span>
                <a className="text-center bg-yellow-400 inline-block cursor-pointer px-10 py-2 rounded-lg shadow-lg shadow-black-500/40 text-1xl mt-10">
                  TRY FOR FREE
                </a>
              </div>
              <div className="w-1/4"></div>
              <div className="w-1/2">
                <img
                  src={image}
                  alt="banner-image"
                  className="block mx-auto mt-[-40px]"
                />
              </div>
            </div>
          </div>

          <div className="video"></div>
        </div>
      </div>
    </div>
  );
}
