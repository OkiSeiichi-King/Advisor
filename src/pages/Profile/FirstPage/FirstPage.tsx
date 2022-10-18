import React from 'react';
import { useForm } from 'react-hook-form';

import InputControl from '../../../components/InputControl';

export default function FirstPage() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <p className="text-2xl text-white text-[inter] font-[400]">
        Let’s get started! This should not take more than 2 minutes.First, we
        need to know a little bit more about you.
      </p>
      <form
        className="bg-white rounded-2xl p-8 mt-16"
        onSubmit={handleSubmit((data) => {
          console.log(JSON.stringify(data));
        })}
      >
        <InputControl
          label="FirstName"
          type="text"
          placeholder="Write your first name."
          {...register('first')}
        />

        <div className="mt-2">
          <label className="block">LastName</label>
          <input
            type="text"
            placeholder="Write your last name."
            className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
            {...register('lastName')}
          />
        </div>
        <div className="mt-2">
          <label className="block">What is your gender</label>
          <div className="flex justify-start items-center mt-3">
            <div className="flex items-center pl-4">
              <input
                id="bordered-radio-1"
                type="radio"
                {...register('gender')}
                value="male"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
              />
              <label
                htmlFor="bordered-radio-1"
                className=" ml-2 w-full text-sm font-medium "
              >
                Male
              </label>
            </div>
            <div className="flex items-center pl-4">
              <input
                id="bordered-radio-2"
                type="radio"
                {...register('gender')}
                value="female"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
              />
              <label
                htmlFor="bordered-radio-2"
                className=" ml-2 w-full text-sm font-medium "
              >
                Female
              </label>
            </div>
            <div className="flex items-center pl-4">
              <input
                id="bordered-radio-3"
                type="radio"
                {...register('gender')}
                value="other"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
              />
              <label
                htmlFor="bordered-radio-3"
                className=" ml-2 w-full text-sm font-medium "
              >
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block">How old are you?</label>
          <input
            type="number"
            placeholder="Write your age."
            className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
            {...register('age')}
          />
        </div>
        <div className="mt-2">
          <label className="block">What is your work location?</label>
          <div className="grid grid-cols-4 grid-rows-3">
            <div className="">
              <input type="checkbox" id="Geneva" />
            </div>
          </div>
        </div>
        <input type="submit" value="op" />
      </form>
    </>
  );
}
