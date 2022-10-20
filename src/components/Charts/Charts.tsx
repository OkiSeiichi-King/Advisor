import React, { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  ReferenceLine,
  LabelList,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  YAxis,
} from 'recharts';

export default function Charts({
  salary,
  className,
}: {
  salary: number;
  className: string;
}) {
  salary = Number(salary);
  const salaryPerDay = Math.floor(salary / 100);

  const minSalary = (Math.abs(salary - 1000) + salary - 1000) / 2;
  const minSalaryPerDay = Math.floor(minSalary / 100);

  const maxSalary = salary + 1500;
  const maxSalaryPerDay = Math.floor(maxSalary / 100);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const graph_data = [
    {
      name: '',
      Total: 0,
      pv: 0,
      Day: 0,
    },
    {
      name: '25%',
      Total: minSalary,
      pv: 2,
      Day: 10,
    },
    {
      name: 'current',
      Total: salary,
      pv: 1,
      Day: minSalaryPerDay,
    },
    {
      name: '50%',
      Total: maxSalary,
      pv: 3,
      Day: maxSalaryPerDay,
    },
    {
      name: '75%',
      Total: salary + 100,
      pv: 1,
      Day: salaryPerDay,
    },
    {
      name: '',
      Total: 0,
      pv: 0,
      Day: 0,
    },
  ];

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    // setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {};
  }, []);

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={graph_data} margin={{ top: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0">
              <stop offset="50%" stopColor="#FBEEC1" stopOpacity={1} />
              <stop offset="50%" stopColor="#BC986A" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
            z={-1}
          >
            <LabelList
              className="TotalPrice"
              dataKey="Total"
              offset={22}
              position="top"
              content={(props) => (props.value ? `${props.value} €` : null)}
            />
            <LabelList
              className="DayPrice"
              dataKey="Day"
              offset={13}
              position="top"
              content={(props) => (props.value ? `${+props.value}€/day` : null)}
            />
          </Area>
          <XAxis dataKey="name" />
          {windowWidth > 768 && (
            <ReferenceLine
              x={1}
              stroke="#C7BB31"
              label={{
                value: graph_data[1].Total.toString() + 'CHF',
                position: 'insideTopRight',
              }}
              isFront={true}
              z={100}
              // writingMode
            />
          )}
          <ReferenceLine
            x={2}
            stroke="#FF0000"
            label={{
              value: graph_data[2].Total.toString() + 'CHF',
              position: 'insideTopRight',
            }}
            isFront={true}
          />
          {windowWidth > 768 && (
            <ReferenceLine
              x={3}
              stroke="#C7BB31"
              label={{
                value: graph_data[3].Total.toString() + 'CHF',
                position: 'insideTopRight',
              }}
            />
          )}
          {windowWidth > 768 && (
            <ReferenceLine
              x={4}
              stroke="#C7BB31"
              label={{
                value: graph_data[4].Total.toString() + 'CHF',
                position: 'insideTopRight',
              }}
              isFront={true}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-[#659DBD] text-center">YOUR SALARY ANALYSIS</p>
    </div>
  );
}
