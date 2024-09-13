/** @format */

import FromTable from "../components/fromTable"
import {mondayData} from "../mocData/mocData"

export default function MondayPage() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-xl">วัน จันทร์ : อกและท้อง</p>
      </div>

      <FromTable
        data={mondayData}
        dayKey="Monday"
      />
    </div>
  )
}
