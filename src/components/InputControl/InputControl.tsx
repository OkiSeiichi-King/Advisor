import React from 'react';
import { useForm } from 'react-hook-form';

export default function InputControl({
  type,
  placeholder,
  label,
  ...rest
}: {
  type: string;
  placeholder: string;
  label: string;
}) {
  const { register, handleSubmit } = useForm();
  return (
    <div className="">
      <label className="block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
        {...register(label)}
      />
    </div>
  );
}
