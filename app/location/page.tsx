// app/location/page.tsx

import SupplyPipeline from "./components/SupplyPipeline";
import LandSaleComparables from "./components/LandSaleComparables";
import DemographicTrends from "./components/DemographicTrends";
import ProximityInsights from "./components/ProximityInsights";
import ZoningOverlays from "./components/ZoningOverlays";

import { Header } from "@/components";

export default function LocationAnalysisPage() {
  return (
    <div className="px-8">
      <Header />
      <hr className="mt-4 border-[#E4E4E7] border-[1px]" />
      {/* <div className="bg-black">
      Download as PDF
      </div> */}
      <div className="lg:px-10 py-8 space-y-8">
        <ProximityInsights />
      </div>

      <hr className="border-[#E4E4E7] border-[1px]" />
      <div className="lg:px-10 py-8 space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-8 lg:auto-rows-auto gap-4">
          <div className="lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-3 border-[1.5px] border-[#E4E4E7] rounded-lg shadow-md p-4">
            <DemographicTrends />
          </div>
          <div className="lg:col-start-6 lg:col-span-3 lg:row-start-1 lg:row-end-2 border-[1.5px] border-[#E4E4E7] rounded-lg shadow-md p-4">
            <SupplyPipeline />
          </div>
          <div className="lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-4 border-[1.5px] border-[#E4E4E7] rounded-lg shadow-md p-4">
          <LandSaleComparables />
          </div>
          <div className="lg:col-start-6 lg:col-span-3 border-[1.5px] border-[#E4E4E7] rounded-lg shadow-md p-4 lg:row-start-2 lg:row-end-4">
          <ZoningOverlays />
          </div>
        </section>
      </div>
    </div>
  );
}
