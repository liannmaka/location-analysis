'use client';

import React from 'react';
import { zoningOverlaysData } from '../data/mockData';

interface ZoningOverlays {
  id: string | number
  zone: string
  description: string
  source: string
}

interface ZoningOverlaysProps {
  data: ZoningOverlays[]
}

const ZoningOverlays: React.FC<ZoningOverlaysProps> = () => {
  return (
    <div>
      <h2 className="font-semibold text-sm md:text-lg">Zoning Overlays</h2>
      <p className="text-xs md:text-sm text-gray-600 mb-4">
        View zoning classifications and direct municipal reference links.
      </p>
      <div className="space-y-4">
        {zoningOverlaysData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#E4E4E7] rounded-lg shadow-sm p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xs md:text-sm font-medium mb-1 text-[#0a2472]">
                  Zoning Code: {item.zone}
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">{item.description}</p>
              </div>
              <a
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#223e92] underline text-xs self-center ease-in-out transition-transform hover:scale-[1.02]"
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZoningOverlays
