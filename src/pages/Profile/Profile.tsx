import React from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

const pages = [
  <FirstPage />,
  <SecondPage />,
  <ThirdPage />,
  <FourthPage />,
  <FifthPage />,
  <SixthPage />,
];

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="pt-10 md:block hidden">
        <div className="banner mt-4 flex">
          <div className="text-8xl font-[400] text-white font-[Newake] w-7/12">
            PEOPLE ADVISOR
          </div>
          <div className="w-5/12"></div>
        </div>

        <div className="content flex mt-16">
          <div className="w-1/2">
            <FirstPage />
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
