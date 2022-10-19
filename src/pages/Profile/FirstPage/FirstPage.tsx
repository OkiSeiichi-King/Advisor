import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../../../store/profile_page';

import InputControl from '../../../components/InputControl';

export default React.forwardRef(
  (props: any, ref: React.LegacyRef<HTMLFormElement>) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    return (
      <>
        <form
          onSubmit={handleSubmit((data) => {
            dispatch(next());
          })}
          ref={ref}
        >
          <div className="">
            <label className="block">FirstName</label>
            <input
              type="text"
              placeholder="Write your first name."
              className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mt-2">
            <label className="block">LastName</label>
            <input
              type="text"
              placeholder="Write your last name."
              className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mt-2">
            <label className="block">What is your gender</label>
            {errors.gender && (
              <span className="text-red-600">This field is required</span>
            )}
            <div className="flex justify-start items-center mt-3">
              <div className="flex items-center pl-4">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  {...register('gender')}
                  value="male"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
                  defaultChecked
                />
                <label htmlFor="bordered-radio-1" className=" ml-2 w-full ">
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
                <label htmlFor="bordered-radio-2" className=" ml-2 w-full ">
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
                <label htmlFor="bordered-radio-3" className=" ml-2 w-full ">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label className="block">How old are you?</label>
            {errors.age && (
              <span className="text-red-600">This field is required</span>
            )}
            <input
              type="number"
              placeholder="Write your age."
              className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
              min={1}
              max={200}
              {...register('age', { min: 0, max: 200, required: true })}
            />
          </div>
          <div className="mt-2">
            <label className="block">What is your work location?</label>
            {errors.location && (
              <span className="text-red-600">This field is required</span>
            )}
            <div className="grid grid-cols-4 grid-rows-3 mt-3">
              <div className="flex items-center pl-3 mb-2">
                <input
                  type="checkbox"
                  id="Geneva"
                  className="w-4 h-4"
                  value="Geneva"
                  {...register('location', { required: true })}
                />
                <label htmlFor="Geneva" className="ml-5">
                  Geneva
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Fribourg"
                  className="w-4 h-4"
                  value="Fribourg"
                  {...register('location')}
                />
                <label htmlFor="Fribourg" className="ml-5">
                  Fribourg
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Lucern"
                  value="Lucern"
                  className="w-4 h-4"
                  {...register('location')}
                />
                <label htmlFor="Lucern" className="ml-5">
                  Lucern
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Bale"
                  value="Bale"
                  className="w-4 h-4"
                  {...register('location')}
                />
                <label htmlFor="Bale" className="ml-5">
                  Bale
                </label>
              </div>
              <div className="flex items-center pl-3 mb-2">
                <input
                  type="checkbox"
                  id="Vaud"
                  className="w-4 h-4"
                  value="Vaud"
                  {...register('location')}
                />
                <label htmlFor="Vaud" className="ml-5">
                  Vaud
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Neuchatel"
                  className="w-4 h-4"
                  value="Neuchatel"
                  {...register('location')}
                />
                <label htmlFor="Neuchatel" className="ml-5">
                  Neuchatel
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Ticino"
                  value="Ticino"
                  className="w-4 h-4"
                  {...register('location')}
                />
                <label htmlFor="Ticino" className="ml-5">
                  Ticino
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Bern"
                  value="Bern"
                  className="w-4 h-4"
                  {...register('location')}
                />
                <label htmlFor="Bern" className="ml-5">
                  Bern
                </label>
              </div>
              <div className="flex items-center pl-3 mb-2">
                <input
                  type="checkbox"
                  id="Jura"
                  className="w-4 h-4"
                  value="Jura"
                  {...register('location')}
                />
                <label htmlFor="Jura" className="ml-5">
                  Jura
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Valais"
                  className="w-4 h-4"
                  value="Valais"
                  {...register('location')}
                />
                <label htmlFor="Valais" className="ml-5">
                  Valais
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Zurich"
                  className="w-4 h-4"
                  {...register('location')}
                  value="Zurich"
                />
                <label htmlFor="Zurich" className="ml-5">
                  Zurich
                </label>
              </div>
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  id="Zug"
                  className="w-4 h-4"
                  {...register('location')}
                  value="Zug"
                />
                <label htmlFor="Zug" className="ml-5">
                  Zug
                </label>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
);
