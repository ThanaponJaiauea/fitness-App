/** @format */

import FromHeaderDay from "../components/fromHeaderDay"
import FromTable from "../components/fromTable"
import {fridayData} from "../mocData/mocData"

export default function FridayPage() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <FromHeaderDay
        bg="bg-blue-200"
        title="วัน ศุกร์ : ต้นแขนด้านหน้าและด้านหลัง"
      />

      <FromTable
        data={fridayData}
        dayKey="Friday"
      />
    </div>
  )
}
