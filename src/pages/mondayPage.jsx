/** @format */

import FromHeaderDay from "../components/fromHeaderDay"
import FromTable from "../components/fromTable"
import {mondayData} from "../mocData/mocData"

export default function MondayPage() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <FromHeaderDay
        bg="bg-yellow-200"
        title="วัน จันทร์ : อกและท้อง"
      />

      <FromTable
        data={mondayData}
        dayKey="Monday"
      />
    </div>
  )
}
