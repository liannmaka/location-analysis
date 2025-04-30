'use client';

import dynamic from "next/dynamic";
import { demographicTrendsData } from '../data/mockData';

const ChartWrapper = dynamic(() => import('@/components/ChartWrapper'), {
  ssr: false,
  loading: () => <p className="flex justify-center items-center h-[250px] text-md">Loading....</p>,
});

interface DemographicTrendsProps {
  className?: string;
}

export default function DemographicTrends({className}: DemographicTrendsProps) {
  return (
    <div className={`${className}space-y-4`}>
      <h2 className="font-semibold text-sm md:text-lg">Demographic Trends</h2>
      <p className="text-xs md:text-sm text-[#71717A] mb-4">
        This section shows historical trends in population and income growth.
      </p>
      <ChartWrapper data={demographicTrendsData} />
    </div>
  );
}