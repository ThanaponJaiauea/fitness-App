/** @format */

import FromTable from "../components/fromTable"
import {tuesdayData} from "../mocData/mocData"

export default function TuesdayPage() {
  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-xl">วัน อังคาร : หลังและปีก</p>
      </div>

      <FromTable
        data={tuesdayData}
        dayKey="Tuesday"
      />
    </div>
  )
}
