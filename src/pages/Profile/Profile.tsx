import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { next, prev } from '../../store/profile_page';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

import FirstImage from '../../assets/images/first.png';
import SecondImage from '../../assets/images/second.png';
import ThirdImage from '../../assets/images/third.png';
import FourthImage from '../../assets/images/fourth.png';

import leftGifImage from '../../assets/images/left_gif.gif';

const titles = [
  'Let’s get started! This should not take more than 2 minutes.First, we need to know a little bit more about you.',
  'Thanks FirstName! Let’s continue to discover your profile.',
  'FirstName, one final step to get your report! To prevent misuse of our salary estimation, we will send you a verification code by sms.',
];

const step_images = [FirstImage, SecondImage, ThirdImage, FourthImage];

export default function Profile() {
  const firstFormRef = useRef<HTMLFormElement>(null);
  const secondFormRef = useRef<HTMLFormElement>(null);
  const pages = [
    <FirstPage ref={firstFormRef} />,
    <SecondPage ref={secondFormRef} />,
    <ThirdPage />,
    <FourthPage />,
    <FifthPage />,
    <SixthPage />,
  ];

  const activePage = useSelector(
    (state: RootState) => state.active_profile_page.value
  );
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

      default:
        break;
    }
  };

  const prevHandler = () => {
    dispatch(prev(1));
  };

  // console.log((100 * activePage) / 6, 100 * activePage);

  return (
    <div className="container mx-auto">
      <div className="pt-10">
        <div className="banner mt-4 flex">
          <div className="text-8xl font-[400] text-white font-[Newake] md:w-7/12 text-center w-full">
            PEOPLE ADVISOR
          </div>
          <div className="w-5/12 justify-center items-center  md:flex hidden">
            <img className="" src={step_images[activePage]} alt="step" />
            <div className="w-full ml-3">
              <span className="text-white block text-4xl text-[inter]">
                {((100 * activePage) / 5).toFixed(0)}%
              </span>
              <div className="w-full h-3 rounded-lg border-2 border-white border-solid bg-transparent relative">
                <span
                  className="block absolute ml-[0.1rem] h-full bg-white"
                  style={{
                    width: ((100 * activePage) / 5).toFixed(0).toString() + '%',
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div className="content flex mt-16 pb-16 items-center md:flex-row flex-col-reverse ">
          <div className="md:w-1/2 w-full">
            <p className="text-2xl md:text-white text-black mt-16 text-center text-[inter] font-[400]">
              {titles[activePage]}
            </p>
            <div className="bg-white rounded-2xl p-8 mt-16">
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
                  <span
                    className={
                      'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                      (activePage === 4 ? ' bg-[#659DBD]' : '')
                    }
                  ></span>
                  <span
                    className={
                      'rounded-full w-4 h-4 border-solid border-[#659DBD] border-2 block' +
                      (activePage === 5 ? ' bg-[#659DBD]' : '')
                    }
                  ></span>
                </div>
                <div className="w-full">
                  <button
                    className={
                      'text-white py-2 px-4 bg-[#659DBD] rounded-md block mx-auto' +
                      (activePage === 5 ? ' hidden' : '')
                    }
                    onClick={nextHandler}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:ml-16 md:pl-16">
            <img src={leftGifImage} className="w-full" alt="gif" />
          </div>
        </div>
      </div>
    </div>
  );
}
