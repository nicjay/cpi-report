'use client';

import { Data } from '@/types/types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function Chart(props: { historicalData: Data[] }) {
  const data = props.historicalData
    .map((i) => ({
      date: i.year + '-' + i.period.slice(-2),
      value: i.value
    }))
    .reverse();

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
