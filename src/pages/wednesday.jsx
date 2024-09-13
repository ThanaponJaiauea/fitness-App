/** @format */

import FromTable from "../components/fromTable"
import {wednesdayData} from "../mocData/mocData"

export default function Wednesday() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-xl">วัน พุธ : ต้นขาด้านหน้าและด้านหลัง</p>
      </div>

      <FromTable
        data={wednesdayData}
        dayKey="Wednesday"
      />
    </div>
  )
}
