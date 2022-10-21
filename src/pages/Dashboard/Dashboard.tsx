import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import banner_image from '../../assets/images/banner-handphone.png';
import increase_image from '../../assets/images/increase.png';
import privacy_image from '../../assets/images/privacy.png';
import tech_image from '../../assets/images/tech.png';
import mobile_banner_image from '../../assets/images/mobile_banner.png';
import play_btn_image from '../../assets/images/play_btn.png';
import privacy_image2 from '../../assets/images/privacy2.png';
import increase_image2 from '../../assets/images/increase2.png';

export default function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [t, i18n] = useTranslation('common');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const handle = useFullScreenHandle();

  const playVideo = () => {
    // videoRef.current?.requestFullscreen();
    setIsPlay(true);
    handle.enter();
    // setShowVideo(true);
  };

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    if (videoRef.current !== null)
      // @ts-ignore
      videoRef.current.onfullscreenchange = (element, event) => {
        console.log(element, event);

        setIsPlay(!isPlay);
      };
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <>
      {showVideo ? (
        <>
          <div className="">
            <video
              className="block mx-auto w-full border-4 border-yellow-400 border-solid mt-10"
              autoPlay
              loop
              controls
              muted
              ref={videoRef}
            >
              <source
                src={
                  'https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4'
                }
                type="video/mp4"
              />
            </video>
          </div>
        </>
      ) : (
        <div className="container mx-auto">
          <div className="pt-10 md:block hidden">
            <div className="banner mt-4">
              <div className="text-8xl font-[400] text-white font-[Newake]">
                <Link to="/">{t('dashboard.title')}</Link>
              </div>
              <div className="flex">
                <div className="w-1/4 text-white pt-16">
                  <span className="inline-block text-7xl font-medium font-[inter]">
                    Calculate <br></br>your <br></br>market<br></br> value
                  </span>
                  <Link
                    to={'/profile'}
                    className="font-[inter] text-center bg-yellow-400 inline-block cursor-pointer px-10 py-2 rounded-lg shadow-lg shadow-black-500/40 text-2xl mt-[6rem]"
                  >
                    TRY FOR FREE
                  </Link>
                </div>
                <div className="w-3/4 lg:pl-[14rem]">
                  <img
                    src={banner_image}
                    alt="banner-image"
                    className="block mx-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="video w-full mt-[120px]"
            style={{
              display: windowWidth < 768 && !isPlay ? 'none' : 'block',
            }}
          >
            <FullScreen handle={handle}>
              <video
                className="block mx-auto w-[65vw!important] border-4 border-yellow-400 border-solid mt-10"
                autoPlay
                loop
                controls
                muted
                ref={videoRef}
              >
                <source
                  src={
                    'https://link.us1.storjshare.io/raw/14WhrdmBRutvM6jDQYH5bVbVVuwygv16P9QpfSxoA5cF1vdizK6WLBKFygeBU3LugzqmZXdGYmdJR9VnyPynEtLBXfdbBvHP18ayLGge6XdEFGYnuW2F1ajxC6SfxWz3bhqTMApvB8jXr452TnLEnGV7MdkY7us5o8zMUCaHpXTkAKy4PPftg6isxBp1UEFfqhcmtNorYNaoHKCpGWZbVY1pHrpqcbZqzTRJw1RWj9Vj1zy7PBMt4UUTx8aen9MwVsWvpkHQCsGrbM2eMt6nFUhfHQ5TWHQkSoMcPzyNazdeRYtKCW7nJYShb7y/entre-dev/videos/bd6f7295093247efac2449eff01128df.mp4'
                  }
                  type="video/mp4"
                />
              </video>
              <div className="flex p-8 justify-center">
                <button
                  style={{
                    display: windowWidth < 768 && isPlay ? 'block' : 'none',
                  }}
                  onClick={() => {
                    setIsPlay(false);
                    handle.exit();
                  }}
                  className="bg-green-500 text-white py-2 px-6 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </FullScreen>
            <div className="w-full  justify-center mt-[90px] md:flex hidden">
              <a
                href=""
                className="font-[inter] text-center inline-block px-10 py-3 bg-[#659DBD] text-white rounded-lg cursor-pointer shadow-2xl shadow-black-500/40 text-3xl mx-auto"
              >
                CALCULATE
              </a>
            </div>
          </div>
          <div className="md:hidden block relative bg-[rgba(0,0,0,.6)] w-full">
            <img src={mobile_banner_image} className="w-full" />

            <div className="absolute w-full top-0 left-0 h-full z-0">
              <h1 className="text-5xl text-center font-[Newake] text-white pt-12 mx-auto mt-10">
                <Link to="/">{t('dashboard.title')}</Link>
              </h1>
              <p className="text-center font-[inter] text-4xl mt-16 font-medium text-white">
                Calculate <br></br>your <br></br>salary<br></br> now
              </p>
              <div className="my-16">
                <div className="flex justify-center">
                  <img
                    src={play_btn_image}
                    className="cursor-pointer"
                    alt="button"
                    onClick={playVideo}
                  />
                </div>
                <span className="text-center text-white font-[inter] text-sm block">
                  Watch how it works
                </span>
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  to="/profile"
                  className="rounded-xl text-white bg-[#C7BB31] text-center font-[inter] font-bold text-3xl inline-block mx-auto px-10 py-3"
                >
                  Start Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:mt-14 flex pb-16 md:flex-row flex-col bg-gradient-to-b from-[#659DBD] via-[#FFFFFF] to-[#C7BB31] sm:bg-none">
            <div className="md:w-1/3 w-full px-16 text-center text-[1.3rem] font-[inter]  mb-8 mt-8 md:mt-0">
              <img
                className="mx-auto"
                src={windowWidth > 768 ? increase_image : increase_image2}
                alt="increase"
              />
              <p className="">
                <strong>Increase your value</strong>
              </p>
              <p className="">
                Negociate your salary internally or during job interviews to
                optimize your value on the market.
              </p>
            </div>
            <div className="md:w-1/3  w-full px-16 text-center text-[1.3rem] font-[inter] mb-8">
              <img
                className="mx-auto"
                src={windowWidth > 768 ? privacy_image : privacy_image2}
                alt="increase"
              />
              <p className="">
                <strong>Privacy</strong>
              </p>
              <p className="">
                People advisor is based in Switzerland. This means all user data
                is protected by strict Swiss privacy laws. We will never share
                your details without your consent.
              </p>
            </div>
            <div className="md:w-1/3 w-full px-16 text-center text-[1.3rem] font-[inter]  mb-8">
              <img className="mx-auto" src={tech_image} alt="increase" />
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
      )}
    </>
  );
}
