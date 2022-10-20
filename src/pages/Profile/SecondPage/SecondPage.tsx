import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReactSelect, { OptionsOrGroups } from 'react-select';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { next } from '../../../store/profile_page';
import { setData as setSecondData } from '../../../store/secondData';

import roleOptionJson from '../../../assets/json/branch.json';

export default React.forwardRef(
  (props: any, ref: React.LegacyRef<HTMLFormElement>) => {
    const [t, i18n] = useTranslation('common');

    const [roleOptions, setRoleOptions] = useState<any>([]);
    const [workOptions, setWorkOptions] = useState<any>([]);

    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedWork, setSelectedWork] = useState(null);

    const roleSelRef = useRef(null);
    const workSelRef = useRef(null);

    // @ts-ignore
    const makeTreeOption = (jsonData: any, parentId: any) => {
      var temp_array = [];
      let langKey;
      if (i18n.language === 'en') langKey = 'LabelE';
      if (i18n.language === 'fr') langKey = 'LabelF';
      if (i18n.language === 'gm') langKey = 'LabelD';
      if (i18n.language === 'it') langKey = 'LabelI';
      for (const iterator of jsonData) {
        if (iterator.ParentId === parentId) {
          // @ts-ignore
          var children = jsonData.find((item) => {
            return item.ParentId === iterator.ParmPk;
          });
          if (children === undefined)
            temp_array.push({
              //@ts-ignore
              label: iterator[langKey],
              value: iterator.ParmPk,
              parent: parentId,
            });
          else {
            temp_array.push({
              //@ts-ignore
              label: iterator[langKey],
              value: iterator.ParmPk,
              parent: parentId,
              options: makeTreeOption(jsonData, iterator.ParmPk),
            });
          }
        }
      }
      return temp_array;
    };

    useEffect(() => {
      //@ts-ignore
      setRoleOptions(makeTreeOption(roleOptionJson, ''));

      if (roleSelRef.current !== undefined) {
        //@ts-ignore
        roleSelRef.current.clearValue();
        setSelectedRole(null);
      }
      if (workSelRef.current !== undefined) {
        //@ts-ignore
        workSelRef.current.clearValue();
        setSelectedWork(null);
      }
      return () => {};
    }, [i18n.language]);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const selecteRole = (selectedOption: any) => {
      if (selectedOption === null) return;

      setSelectedRole(selectedOption);

      if (workSelRef.current !== undefined)
        //@ts-ignore
        workSelRef.current.clearValue();

      const workOptionJson = require(`../../../assets/json/roles-${selectedOption.parent}.json`);

      setWorkOptions(makeTreeOption(workOptionJson, ''));

      return;
    };

    const selectWork = (selectedOption: any) => {
      setSelectedWork(selectedOption);
    };

    return (
      <form
        onSubmit={handleSubmit((data) => {
          if (selectedRole == null) return;
          if (selectedWork == null) return;
          dispatch(next());
          dispatch(setSecondData(data.salary));
        })}
        ref={ref}
      >
        <div>
          <label className="block">In which sector do you work?</label>
          <ReactSelect
            // @ts-ignore
            ref={roleSelRef}
            options={roleOptions}
            className="mt-4"
            onChange={selecteRole}
          ></ReactSelect>
        </div>
        <div className="mt-3">
          <label className="block">
            How would you define your most recent role?
          </label>
          <ReactSelect
            // @ts-ignore
            ref={workSelRef}
            options={workOptions}
            className="mt-4"
            onChange={selectWork}
          ></ReactSelect>
        </div>
        <div className="mt-3">
          <label className="block">
            How many years have you worked in this function?
          </label>
          <input
            type="number"
            placeholder="Write the number of years of experience"
            className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
            {...register('experience', { required: true })}
          />
          {errors.experience && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="mt-3">
          <label className="block">What is your current salary?</label>
          <input
            type="number"
            placeholder="Annual Salary in CHF"
            className="block w-full p-4 border-[#659DBD] mt-3 rounded-md border-2 border-solid outline-none focus:border-sky-500"
            {...register('salary', { required: true })}
          />
          {errors.salary && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <p className="text-[#659DBD] italic mt-2">
          Has no influence on your appraisal.
        </p>
      </form>
    );
  }
);
