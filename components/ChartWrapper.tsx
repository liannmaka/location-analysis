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
import React from "react";

interface DemographicTrends {
  year: string;
  population: number;
  income: number;
}

interface ChartWrapperProps {
  data: DemographicTrends[];
}

interface LineData {
  dataKey: string;
  stroke: string;
}

const lineData: LineData[] = [
  {
    dataKey: "population",
    stroke: "#0a2472",
  },
  {
    dataKey: "income",
    stroke: "#0e6ba8",
  },
];

const ChartWrapper: React.FC<ChartWrapperProps> = ({ data }) => {
  return (
    <div className="w-full h-[350px] text-xs md:text-sm">
      <ResponsiveContainer width="100%" height="100%">
        {!data || data.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-md">No data Available</p>
          </div>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {lineData.map((line) => (
              <Line
                type="monotone"
                key={line.dataKey}
                dataKey={line.dataKey}
                stroke={line.stroke}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

const areEqual = (prev: ChartWrapperProps, next: ChartWrapperProps) =>
  JSON.stringify(prev.data) === JSON.stringify(next.data);

ChartWrapper.displayName = "ChartWrapper";

export default React.memo(ChartWrapper, areEqual);
