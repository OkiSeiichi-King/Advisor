import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import type { RootState } from '../../../store';
import Charts from '../../../components/Charts';
import { next } from '../../../store/profile_page';

export default React.forwardRef(
  (props: any, ref: React.LegacyRef<HTMLFormElement>) => {
    const dispatch = useDispatch();
    const salary = useSelector((state: RootState) => state.secondData.salary);

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
                  message: 'Please select your opinion',
                });
                return;
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
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
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
                />
                <label htmlFor="bordered-radio-10" className="ml-2 w-full">
                  No
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
