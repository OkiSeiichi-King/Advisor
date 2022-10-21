import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import type { RootState } from '../../../store';
import Charts from '../../../components/Charts';
import { next } from '../../../store/profile_page';

export default React.forwardRef(
  (props: any, ref: React.LegacyRef<HTMLFormElement>) => {
    const dispatch = useDispatch();
    const salary = useSelector((state: RootState) => state.secondData.salary);
    const firstName = useSelector(
      (state: RootState) => state.firstData.firstName
    );

    const [display, setDisplay] = useState(false);
    const [isDisable, setIsDisable] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
    } = useForm();

    return (
      <div>
        <Charts className="w-full" salary={salary} />

        <div className="mt-10">
          <label className="block">
            Are you satisfied with the results obtained?
          </label>
          {errors.YesOrNo && (
            <span className="text-red-600">
              {String(errors.YesOrNo.message)}
            </span>
          )}
          <form
            onSubmit={handleSubmit((data) => {
              if (data.YesOrNo === null) {
                setError('YesOrNo', {
                  type: 'custom',
                  message: 'Please select your opinion.',
                });
                return;
              }
              if (display && data.evalutionReason === '') {
                setError('evalutionReason', {
                  type: 'custom',
                  message: 'Please input your reason.',
                });
                return;
              }
              if (data.YesOrNo === 'no') {
                setIsDisable(true);
              }
              dispatch(next());
            })}
            ref={ref}
          >
            <div className="flex justify-start items-center mt-3">
              <div className="flex items-center pl-4">
                <input
                  id="bordered-radio-9"
                  type="radio"
                  {...register('YesOrNo')}
                  value="yes"
                  onClick={() => {
                    setDisplay(false);
                  }}
                  className=" w-6 h-6 text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700  focus:outline-none"
                />
                <label htmlFor="bordered-radio-9" className="ml-2 w-full">
                  Yes
                </label>
              </div>
              <div className="flex items-center pl-16">
                <input
                  id="bordered-radio-10"
                  type="radio"
                  {...register('YesOrNo')}
                  value="no"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
                  onChange={(e) => {
                    setDisplay(true);
                  }}
                />
                <label htmlFor="bordered-radio-10" className="ml-2 w-full">
                  No
                </label>
              </div>
            </div>
            <div
              className="mt-5"
              style={{ display: display ? 'block' : 'none' }}
            >
              <label className="block">Why did you do this evalutation?</label>
              <input
                type="text"
                placeholder="Write why you did this evaluation?"
                className="read-only:border-[grey] block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
                {...register('evalutionReason')}
                readOnly={isDisable}
              />
              {errors.evalutionReason && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="mt-10">
                <p className="text-center">
                  Thank you {firstName} for your time.
                </p>
                <p className="text-center">
                  We will try to improve the chatbot in the following weeks.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
