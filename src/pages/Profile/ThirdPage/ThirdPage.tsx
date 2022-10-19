import React from 'react';

export default function ThirdPage() {
  return (
    <div>
      <input
        type="text"
        id="sign-in-phone-number"
        dir="auto"
        inputMode="tel"
        className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
      />
      <button className="w-full text-white bg-[#659DBD] block rounded-lg p-3 mt-3">
        Request verification
      </button>
      <div className="mx-10 mt-10 p-7 border-2 border-solid border-[#BEBEBE] rounded-md">
        <p className="text-[#659DBD] text-center">
          Enter the code received by sms
        </p>
        <div className="flex justify-center mt-5">
          <span className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3"></span>
          <span className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3"></span>
          <span className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3"></span>
          <span className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3"></span>
        </div>
        <button className="w-full text-white bg-[#659DBD] block rounded-lg p-3 mt-3">
          Enter
        </button>
      </div>
    </div>
  );
}
