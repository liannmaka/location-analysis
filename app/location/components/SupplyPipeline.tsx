// import { mockSupplyPipeline } from "../data/mockData";

// interface SupplyPipelineProps {
//   className?: string;
// }

// export default function SupplyPipeline({ className }: SupplyPipelineProps) {
//   return (
//     <div className={className}>
//       <h2 className="font-semibold text-lg mb-4 text-gray-800">Supply Pipeline</h2>
//       <div className="divide-y divide-gray-200 border rounded-lg overflow-hidden">
//         {mockSupplyPipeline.map((item, index) => (
//           <div key={index} className="flex justify-between px-4 py-3 bg-white odd:bg-[#F4F4F5] text-sm">
//             <span className="font-medium text-gray-800">{item.name}</span>
//             <span className="text-gray-600">{item.timeline}</span>
//             <span className="text-gray-600">{item.type}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { mockSupplyPipeline } from "../data/mockData";

interface SupplyPipelineProps {
  className?: string;
}

export default function SupplyPipeline({ className }: SupplyPipelineProps) {
  return (
    <div className={className}>
      <h2 className="font-semibold text-sm md:text-lg mb-4 text-gray-800">Supply Pipeline</h2>
      <div className="divide-y divide-gray-200 border border-[#E4E4E7] shadow-sm rounded-lg overflow-hidden">
        {/* Header Row (optional) */}
        <div className="grid grid-cols-3 px-4 py-2 text-xs md:text-sm font-semibold">
          <span>Name</span>
          <span>Timeline</span>
          <span>Type</span>
        </div>

        {mockSupplyPipeline.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 px-4 py-3 bg-white even:bg-[#F4F4F5] text-xs md:text-sm"
          >
            <span className="text-gray-800 min-w-0 truncate">{item.name}</span>
            <span className="text-gray-600 min-w-0 truncate">{item.timeline}</span>
            <span className="text-gray-600 min-w-0 truncate">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

