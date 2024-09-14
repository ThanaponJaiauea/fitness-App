/** @format */

import FromHeaderDay from "../components/fromHeaderDay"
import FromTable from "../components/fromTable"
import {wednesdayData} from "../mocData/mocData"

export default function Wednesday() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <FromHeaderDay
        bg="bg-green-200"
        title="วัน พุธ : ต้นขาด้านหน้าและด้านหลัง"
      />

      <FromTable
        data={wednesdayData}
        dayKey="Wednesday"
      />
    </div>
  )
}
