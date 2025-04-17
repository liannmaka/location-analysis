"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface demographicTrends {
  year: string;
  population: number;
  income: number;
}

interface ChartWrapperProps {
  data: demographicTrends[];
}

export default function ChartWrapper({ data }: ChartWrapperProps) {
  return (
    <div className="w-full h-[350px] text-xs md:text-sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#0a2472"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#0e6ba8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
