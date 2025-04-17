'use client';

import { proximityInsightsData } from '../data/mockData';

export default function ProximityInsights() {
  return (
    <div>
      <h2 className="font-semibold text-sm md:text-lg">Proximity Insights</h2>
      <p className="text-xs md:text-sm text-[#71717A] mb-4">
        Key proximity information around the selected property.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {proximityInsightsData.map((item) => (
          <div
            key={item.id}
           className="border-[1.5px] border-[#E4E4E7] rounded-lg shadow-md p-4 flex items-center space-x-4 transition duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50 hover:border-gray-300"
          >
            <div className="text-2xl">{item.icon}</div>
            <div>
              <p className="text-gray-500 text-xs md:text-sm">{item.label}</p>
              <p className="font-semibold text-sm md:text-[16px]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

