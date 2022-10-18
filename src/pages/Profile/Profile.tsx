import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { prev } from '../../store/profile_page';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

const titles = [
  'Let’s get started! This should not take more than 2 minutes.First, we need to know a little bit more about you.',
  'Thanks FirstName! Let’s continue to discover your profile.',
];

export default function Profile() {
  const firstFormRef = useRef<HTMLFormElement>(null);
  const pages = [
    <FirstPage ref={firstFormRef} />,
    <SecondPage />,
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
    if (activePage === 0)
      firstFormRef.current?.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
  };

  const prevHandler = () => {
    dispatch(prev(1));
  };

  return (
    <div className="container mx-auto">
      <div className="pt-10 md:block hidden">
        <div className="banner mt-4 flex">
          <div className="text-8xl font-[400] text-white font-[Newake] w-7/12">
            PEOPLE ADVISOR
          </div>
          <div className="w-5/12"></div>
        </div>

        <div className="content flex mt-16 pb-16">
          <div className="w-1/2">
            <p className="text-2xl text-white text-[inter] font-[400]">
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
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
