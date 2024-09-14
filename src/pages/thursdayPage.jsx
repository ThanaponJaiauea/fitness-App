/** @format */

import FromHeaderDay from "../components/fromHeaderDay"
import FromTable from "../components/fromTable"
import {thursdayData} from "../mocData/mocData"

export default function ThursdayPage() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <FromHeaderDay
        bg="bg-orange-500"
        title="วัน พฤหัสบดี : ไหล่และน่อง"
      />

      <FromTable
        data={thursdayData}
        dayKey="Thursday"
      />
    </div>
  )
}
