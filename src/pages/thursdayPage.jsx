/** @format */

import FromTable from "../components/fromTable"
import {thursdayData} from "../mocData/mocData"

export default function ThursdayPage() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-xl">วัน พฤหัสบดี : ไหล่และน่อง</p>
      </div>

      <FromTable
        data={thursdayData}
        dayKey="Thursday"
      />
    </div>
  )
}
