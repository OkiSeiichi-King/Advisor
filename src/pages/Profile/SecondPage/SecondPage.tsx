import React from 'react';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function SecondPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // dispatch(next());
      })}
      // ref={ref}
    >
      <div>
        <label className="block">
          How would you define your most recent role?
        </label>
        <ReactSelect options={options} className="mt-4"></ReactSelect>
      </div>
      <div className="mt-3">
        <label className="block">
          How many years have you worked in this function?
        </label>
        <input
          type="text"
          placeholder="Write the number of years of experience"
          className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <div className="mt-3">
        <label className="block">In which sector do you work?</label>
        <ReactSelect options={options} className="mt-4"></ReactSelect>
      </div>
      <div className="mt-3">
        <label className="block">
          How many years have you worked in this function?
        </label>
        <input
          type="text"
          placeholder="Write the number of years of experience"
          className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-600">This field is required</span>
        )}
      </div>
      <p className="text-[#659DBD] italic mt-2">
        Has no influence on your appraisal.
      </p>
    </form>
  );
}
