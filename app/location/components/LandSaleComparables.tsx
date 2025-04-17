"use client";

import { landSaleComparablesData } from "../data/mockData";

export default function LandSaleComparables() {
  return (
    <div >
      <h2 className="font-semibold text-sm md:text-lg">Land Sale Comparables</h2>
      <p className="text-xs md:text-sm text-gray-600 mb-2">
        Recent land sales in the surrounding area with comparable zoning and
        property sizes.
      </p>
      <div className="overflow-x-auto">
      <table className="min-w-full border border-[#E4E4E7] text-xs md:text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border border-[#E4E4E7] px-4 py-2 text-left">Price PSF</th>
            <th className="border border-[#E4E4E7] px-4 py-2 text-left">Zoning</th>
            <th className="border border-[#E4E4E7] px-4 py-2 text-left">Size</th>
          </tr>
        </thead>
        <tbody>
          {landSaleComparablesData.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-[#F4F4F5]">
              <td className="border border-[#E4E4E7] px-4 py-2">{item.pricePSF}</td>
              <td className="border border-[#E4E4E7] px-4 py-2">{item.zoning}</td>
              <td className="border border-[#E4E4E7] px-4 py-2">{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
