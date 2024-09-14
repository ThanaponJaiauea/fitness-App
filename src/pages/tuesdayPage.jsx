/** @format */

import FromHeaderDay from "../components/fromHeaderDay"
import FromTable from "../components/fromTable"
import {tuesdayData} from "../mocData/mocData"

export default function TuesdayPage() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <FromHeaderDay
        bg="bg-yellow-200"
        title="วัน อังคาร : หลังและปีก"
      />

      <FromTable
        data={tuesdayData}
        dayKey="Tuesday"
      />
    </div>
  )
}
