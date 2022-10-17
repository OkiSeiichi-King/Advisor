import React, { useRef } from 'react';

import banner_image from '../../assets/images/banner-handphone.png';
import increase_image from '../../assets/images/increase.png';
import privacy_image from '../../assets/images/privacy.png';
import tech_image from '../../assets/images/tech.png';

import VideoPlayer from '../../components/VideoPlayer';

export default function Dashboard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="pt-10">
          <div className="banner mt-4">
            <div className="text-8xl font-[400] text-white font-[Newake]">
              PEOPLE ADVISOR
            </div>
            <div className="flex">
              <div className="w-1/4 text-white pt-16">
                <span className="inline-block text-7xl font-medium font-[inter]">
                  Calculate <br></br>your <br></br>market<br></br> value
                </span>
                <a className="font-[inter] text-center bg-yellow-400 inline-block cursor-pointer px-10 py-2 rounded-lg shadow-lg shadow-black-500/40 text-2xl mt-[6rem]">
                  TRY FOR FREE
                </a>
              </div>
              <div className="w-3/4 pl-[14rem]">
                <img
                  src={banner_image}
                  alt="banner-image"
                  className="block mx-auto mt-[-60px] w-full"
                />
              </div>
            </div>
          </div>

          <div className="video w-full mt-[150px]">
            <VideoPlayer
              source="https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4"
              className="block mx-auto w-[65vw!important] "
            />
            <div className="w-full flex justify-center mt-[120px]">
              <a
                href=""
                className="font-[inter] text-center inline-block px-10 py-3 bg-[#659DBD] text-white rounded-lg cursor-pointer shadow-2xl shadow-black-500/40 text-3xl mx-auto"
              >
                CALCULATE
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mt-14 flex">
          <div className="w-1/3 px-16 text-center text-[1.3rem] font-[inter]">
            <img className="mx-auto" src={increase_image} alt="increase" />
            <p className="">
              <strong>Increase your value</strong>
            </p>
            <p className="">
              Negociate your salary internally or during job interviews to
              optimize your value on the market.
            </p>
          </div>
          <div className="w-1/3 px-16 text-center text-[1.3rem] font-[inter]">
            <img className="mx-auto" src={privacy_image} alt="increase" />
            <p className="">
              <strong>Privacy</strong>
            </p>
            <p className="">
              People advisor is based in Switzerland. This means all user data
              is protected by strict Swiss privacy laws. We will never share
              your details without your consent.
            </p>
          </div>
          <div className="w-1/3 px-16 text-center text-[1.3rem] font-[inter]">
            <img className="" src={tech_image} alt="increase" />
            <p className="">
              <strong>Technology</strong>
            </p>
            <p className="">
              Our graphical database allows us to compare each profile with
              market standards and thus to predict the salary you could earn.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
