/** @format */

import FromTable from "../components/fromTable"
import {mondayData} from "../mocData/mocData"

export default function MondayPage() {
  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน จันทร์ : อกและท้อง (Chest & Abdominals)
        </p>
      </div>

      <FromTable
        data={mondayData}
        dayKey="Monday"
      />
    </div>
  )
}
