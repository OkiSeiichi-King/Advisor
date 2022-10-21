import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../../../store/profile_page';
import { setData } from '../../../store/firstData';

import InputControl from '../../../components/InputControl';
import ReactSelect from 'react-select';

const locationOptions = [
  { label: 'Geneva', value: 'Geneva' },
  { label: 'Fribourg', value: 'Fribourg' },
  { label: 'Lucern', value: 'Lucern' },
  { label: 'Bale', value: 'Bale' },
  { label: 'Vaud', value: 'Vaud' },
  { label: 'Neuchatel', value: 'Neuchatel' },
  { label: 'Ticino', value: 'Ticino' },
  { label: 'Bern', value: 'Bern' },
  { label: 'Jura', value: 'Jura' },
  { label: 'Valais', value: 'Valais' },
  { label: 'Zurich', value: 'Zurich' },
  { label: 'Zug', value: 'Zug' },
];

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
            dispatch(
              // @ts-ignore
              setData({ firstName: data.firstName, lastName: data.lastName })
            );
          })}
          ref={ref}
        >
          <div className="">
            <label className="block">First Name</label>
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
            <label className="block">Last Name</label>
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
            <div className="">
              <ReactSelect
                name="filters"
                placeholder="Enter your desired locations"
                options={locationOptions}
                isMulti={true}
                className="mt-4"
              />
            </div>
          </div>
        </form>
      </>
    );
  }
);
