import React, { useState, useRef } from 'react';
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

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fouthRef = useRef<HTMLInputElement>(null);

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
        className="md:mx-10 md-0 mt-10 p-7 border-2 border-solid border-[#BEBEBE] rounded-md"
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
              ref={firstRef}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  return;
                }
                if (event.key < '0' || event.key > '9') {
                  return event.preventDefault();
                }
                if (firstRef.current?.value.length === 0) {
                  return;
                }
                if (firstRef.current?.value.length === 1) {
                  secondRef.current?.focus();
                }
              }}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  if (secondRef.current?.value.length === 0) {
                    firstRef.current?.focus();
                  }
                  return;
                }
                if (event.key < '0' || event.key > '9') {
                  return event.preventDefault();
                }
                if (secondRef.current?.value.length === 0) {
                  return;
                }
                if (secondRef.current?.value.length === 1) {
                  thirdRef.current?.focus();
                }
              }}
              ref={secondRef}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              ref={thirdRef}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  if (thirdRef.current?.value.length === 0) {
                    secondRef.current?.focus();
                  }
                  return;
                }
                if (event.key < '0' || event.key > '9') {
                  return event.preventDefault();
                }
                if (thirdRef.current?.value.length === 0) {
                  return;
                }
                if (thirdRef.current?.value.length === 1) {
                  fouthRef.current?.focus();
                }
              }}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              ref={fouthRef}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  if (fouthRef.current?.value.length === 0) {
                    thirdRef.current?.focus();
                  }
                  return;
                }
                if (event.key < '0' || event.key > '9') {
                  return event.preventDefault();
                }
                if (fouthRef.current?.value.length === 0) {
                  return;
                }
                if (fouthRef.current?.value.length === 1) {
                  event.preventDefault();
                }
              }}
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
