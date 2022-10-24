import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { next, prev } from '../../store/profile_page';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';

import FirstImage from '../../assets/images/first.png';
import SecondImage from '../../assets/images/second.png';
import ThirdImage from '../../assets/images/third.png';
import FourthImage from '../../assets/images/fourth.png';
import SixImage from '../../assets/images/six.png';

import leftGifImage from '../../assets/images/left_gif.gif';
import leftMobileImage from '../../assets/images/mobile_top.png';

const step_images = [
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,

  SixImage,
];

export default function Profile() {
  const firstFormRef = useRef<HTMLFormElement>(null);
  const secondFormRef = useRef<HTMLFormElement>(null);
  const fourthFormRef = useRef<HTMLFormElement>(null);

  const [t, i18n] = useTranslation('common');

  const pages = [
    <FirstPage ref={firstFormRef} />,
    <SecondPage ref={secondFormRef} />,
    <ThirdPage />,
    <FourthPage ref={fourthFormRef} />,
  ];

  const activePage = useSelector(
    (state: RootState) => state.active_profile_page.value
  );

  const isFinish = useSelector(
    (state: RootState) => state.active_profile_page.isFinish
  );

  const threeData = useSelector((state: RootState) => {
    return state.threeData.isOk;
  });

  const FirstData = useSelector((state: RootState) => state.firstData);

  const titles = [
    'Let’s get started! This should not take more than 2 minutes.First, we need to know a little bit more about you.',
    `Thanks ${FirstData.firstName}! Let’s continue to discover your profile.`,
    `${FirstData.firstName}, one final step to get your report! To prevent misuse of our salary estimation, we will send you a verification code by sms.`,
    `Well done ${FirstData.firstName}! Please find below the results of our first analysis.`,
  ];

  const dispatch = useDispatch();

  const nextHandler = () => {
    switch (activePage) {
      case 0:
        firstFormRef.current?.dispatchEvent(
          new Event('submit', { cancelable: true, bubbles: true })
        );
        break;
      case 1:
        secondFormRef.current?.dispatchEvent(
          new Event('submit', { cancelable: true, bubbles: true })
        );
        break;
      case 2:
        dispatch(next());
        break;
      case 3:
        break;

      default:
        break;
    }
  };

  const finishHandle = () => {
    fourthFormRef.current?.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true })
    );
  };

  const prevHandler = () => {
    dispatch(prev(1));
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);

    return () => {};
  }, []);

  return (
    <div className="response-back">
      <div className="container mx-auto ">
        <div className="pt-10">
          <div className="banner mt-4 flex">
            <div className="md:text-8xl text-6xl md:mt-0 mt-8 font-[400] text-white font-[Newake] md:w-7/12 text-center w-full">
              <Link to="/">PEOPLE ADVISOR</Link>
            </div>
            <div className="w-5/12 justify-center items-center  md:flex hidden">
              <img
                className=""
                src={step_images[isFinish && activePage == 3 ? 4 : activePage]}
                alt="step"
                style={{
                  cursor: isFinish && activePage == 3 ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (isFinish && activePage == 3) {
                    alert('finish!!!!');
                  }
                }}
              />
              <div className="w-full ml-3">
                <span className="text-white block text-4xl text-[inter]">
                  {isFinish && activePage == 3
                    ? 100
                    : ((100 * activePage) / 5).toFixed(0)}
                  %
                </span>
                <div className="w-full h-3 rounded-lg border-2 border-white border-solid bg-transparent relative">
                  <span
                    className="block absolute ml-[0.01rem] h-full bg-white"
                    style={{
                      width:
                        isFinish && activePage == 3
                          ? '100%'
                          : ((100 * activePage) / 5).toFixed(0).toString() +
                            '%',
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div className="content flex mt-2 pb-16 items-center md:flex-row flex-col-reverse ">
            <div className="md:w-1/2 w-full">
              <p className="md:text-2xl text-[1.25rem] md:px-0 px-2 md:text-white text-black md:mt-16 text-center text-[inter] font-[400]">
                {titles[activePage]}
              </p>
              <div className="bg-white rounded-2xl md:p-8 py-6 px-3 mt-12 shadow-zinc-900 mx-2 md:mx-0">
                <div className="w-full justify-center items-center  md:hidden flex mb-9">
                  <img
                    className=""
                    src={
                      step_images[isFinish && activePage == 3 ? 4 : activePage]
                    }
                    alt="step"
                    style={{
                      cursor:
                        isFinish && activePage == 3 ? 'pointer' : 'default',
                    }}
                    onClick={() => {
                      if (isFinish && activePage == 3) {
                        alert('finish!!!!');
                      }
                    }}
                  />
                  <div className="w-full ml-3">
                    <span className="text-[#659DBD] block text-4xl text-[inter]">
                      {isFinish && activePage == 3
                        ? 100
                        : ((100 * activePage) / 5).toFixed(0)}
                      %
                    </span>
                    <div className="w-full h-3 rounded-lg border-2 border-[#659DBD] border-solid bg-transparent relative">
                      <span
                        className="block absolute ml-[0.01rem] h-full bg-[#659DBD]"
                        style={{
                          width:
                            isFinish && activePage == 3
                              ? '100%'
                              : ((100 * activePage) / 5).toFixed(0).toString() +
                                '%',
                        }}
                      ></span>
                    </div>
                  </div>
                </div>

                {pages.map((_item: any, _index: number) => {
                  return (
                    <div
                      key={_index}
                      className={
                        activePage === _index ? 'min-h-[500px]' : 'hidden'
                      }
                    >
                      {_item}
                    </div>
                  );
                })}
                <div className="mt-5 grid grid-cols-3 items-center justify-center">
                  <div className="w-full">
                    <button
                      className={
                        'text-white py-2 px-4 bg-[#C7BB31] rounded-md block mx-auto' +
                        (activePage === 0 ? ' hidden' : '')
                      }
                      onClick={prevHandler}
                    >
                      prev
                    </button>
                  </div>
                  <div className="items-center flex justify-around w-full">
                    <span
                      className={
                        'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                        (activePage === 0 ? ' bg-[#659DBD]' : '')
                      }
                    ></span>
                    <span
                      className={
                        'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                        (activePage === 1 ? ' bg-[#659DBD]' : '')
                      }
                    ></span>
                    <span
                      className={
                        'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                        (activePage === 2 ? ' bg-[#659DBD]' : '')
                      }
                    ></span>
                    <span
                      className={
                        'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                        (activePage === 3 ? ' bg-[#659DBD]' : '')
                      }
                    ></span>
                  </div>
                  <div className="w-full">
                    <button
                      className={
                        'text-white py-2 px-4 bg-[#659DBD] rounded-md block mx-auto disabled:cursor-not-allowed disabled:bg-gray-400' +
                        (activePage === 3 ? ' hidden' : '')
                      }
                      onClick={nextHandler}
                      disabled={activePage === 2 && !threeData}
                    >
                      next
                    </button>
                    <button
                      className={
                        'text-white py-2 px-4 bg-[#659DBD] rounded-md mx-auto disabled:cursor-not-allowed disabled:bg-gray-400 ' +
                        (activePage === 3 ? ' block' : 'hidden')
                      }
                      // onClick={nextHandler}
                      onClick={finishHandle}
                    >
                      finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:ml-16 md:pl-16 md:mt-[11rem]">
              <img
                src={windowWidth < 768 ? leftMobileImage : leftGifImage}
                className="w-full"
                alt="gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
