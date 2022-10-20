import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../../store/threeData';
//@ts-ignore
import validator from 'validator';

export default function ThirdPage() {
  const [phoneValue, setPhoneNum] = useState('');

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  // console.log(show ? 'none' : '');

  return (
    <div>
      {/* <input
        type="text"
        id="sign-in-phone-number"
        dir="auto"
        inputMode="tel"
        className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
      /> */}
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneValue}
        onChange={setPhoneNum}
        containerClass="w-full"
        inputClass="w-full-import h-12 text-[1.2rem]"
        country="us"
        dropdownClass="w-8"
      />
      <button
        className="w-full text-white bg-[#659DBD] block rounded-lg p-3 mt-3"
        onClick={() => {
          // console.log(phoneValue);
          setShow(validator.isMobilePhone(phoneValue));
        }}
      >
        Request verification
      </button>
      <div
        className="mx-10 mt-10 p-7 border-2 border-solid border-[#BEBEBE] rounded-md"
        style={{ display: !show ? 'none' : 'block' }}
      >
        <p className="text-[#659DBD] text-center">
          Enter the code received by sms
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setData({ isOk: true }));
          }}
        >
          <div className="flex justify-center mt-5">
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              max={9}
              min={0}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              max={9}
              min={0}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              max={9}
              min={0}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              max={9}
              min={0}
            ></input>
          </div>
          <button
            className="w-full text-white bg-[#659DBD] block rounded-lg p-3 mt-3"
            type="submit"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
