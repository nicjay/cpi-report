'use client';

import { Data } from '@/types/types';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts';

var months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.'
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-700 p-4 text-sm text-white opacity-95">
        <p className="font-bold">All items</p>
        <p>
          {`${label} : `}
          {payload[0].value}%
        </p>
      </div>
    );
  }

  return null;
};

export default function Chart(props: { historicalData: Data[] }) {
  const data = props.historicalData
    .map((i) => ({
      date: `${months[+i.period.slice(-2) - 1]} ${i.year}`,
      value: i.calculations.pct_changes[12]
    }))
    .reverse();

  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#3B8292" dot={false} strokeWidth={3} />
        <XAxis dataKey="date" minTickGap={16} />
        <YAxis>
          <Label value="Percent" angle={-90} position={'left'} offset={-10}></Label>
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid vertical={false} strokeDasharray="2 4" />
      </LineChart>
    </ResponsiveContainer>
  );
}
