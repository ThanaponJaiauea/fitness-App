/** @format */

import FromTable from "../components/fromTable"
import {wednesdayData} from "../mocData/mocData"

export default function Wednesday() {
  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน พุืธ : ต้นขาด้านหน้าและด้านหลัง (Quadriceps & Hamstrings)
        </p>
      </div>

      <FromTable
        data={wednesdayData}
        dayKey="Wednesday"
      />
    </div>
  )
}
