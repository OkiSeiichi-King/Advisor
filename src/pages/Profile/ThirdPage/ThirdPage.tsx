import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../../store/threeData';
//@ts-ignore
import validator from 'validator';
import { next } from '../../../store/profile_page';

export default function ThirdPage() {
  const [phoneValue, setPhoneNum] = useState('');

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fouthRef = useRef<HTMLInputElement>(null);

  const checkValide = () => {
    if (
      (firstRef.current?.value as string).length !== 0 &&
      (secondRef.current?.value as string).length !== 0 &&
      (thirdRef.current?.value as string).length !== 0 &&
      (fouthRef.current?.value as string).length !== 0
    ) {
      return setIsDisable(false);
    }
    setIsDisable(true);
  };

  // console.log(show ? 'none' : '');

  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneValue}
        onChange={setPhoneNum}
        containerClass="w-full"
        inputClass="h-12 text-[1.2rem] w-full"
        country="us"
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
        className="md:mx-10 md-0 mt-10 py-7 px-3 border-2 border-solid border-[#BEBEBE] rounded-md"
        style={{ display: !show ? 'none' : 'block' }}
      >
        <p className="text-[#659DBD] text-center">
          Enter the code received by sms
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setData({ isOk: true }));
            dispatch(next());
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
                if (
                  event.key < '0' ||
                  event.key > '9' ||
                  (firstRef.current?.value as string).length > 0
                ) {
                  return event.preventDefault();
                }
              }}
              onKeyUp={(event) => {
                checkValide();
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
                if (
                  event.key < '0' ||
                  event.key > '9' ||
                  (secondRef.current?.value as string).length > 0
                ) {
                  return event.preventDefault();
                }
              }}
              onKeyUp={(event) => {
                checkValide();
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
              onKeyUp={(event) => {
                checkValide();
                if (thirdRef.current?.value.length === 0) {
                  return;
                }
                if (thirdRef.current?.value.length === 1) {
                  fouthRef.current?.focus();
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  if (thirdRef.current?.value.length === 0) {
                    secondRef.current?.focus();
                  }
                  return;
                }
                if (
                  event.key < '0' ||
                  event.key > '9' ||
                  (thirdRef.current?.value as string).length > 0
                ) {
                  return event.preventDefault();
                }
              }}
            ></input>
            <input
              className="w-14 h-14 rounded-sm border-2 border-solid border-[#BEBEBE] mx-3 focus:outline-none text-center"
              type="text"
              ref={fouthRef}
              onKeyUp={(event) => {
                checkValide();
                if (fouthRef.current?.value.length === 0) {
                  return;
                }
                if (fouthRef.current?.value.length === 1) {
                  event.preventDefault();
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  if (fouthRef.current?.value.length === 0) {
                    thirdRef.current?.focus();
                  }
                  return;
                }
                if (
                  event.key < '0' ||
                  event.key > '9' ||
                  (fouthRef.current?.value as string).length > 0
                ) {
                  return event.preventDefault();
                }

                // setIsDisable(false);
              }}
            ></input>
          </div>
          <button
            className="w-full text-white bg-[#659DBD] block rounded-lg p-3 mt-3 disabled:cursor-not-allowed disabled:bg-gray-400"
            type="submit"
            disabled={isDisable}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
