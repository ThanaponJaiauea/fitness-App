/** @format */

import FromTable from "../components/fromTable"
import video1 from "../videos/Minecraft.mp4"
import {fridayData} from "../mocData/mocData"

export default function FridayPage() {
  console.log("fridayData:", fridayData)

  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน ศุกร์ : ต้นแขนด้านหน้าและด้านหลัง (Biceps & Triceps)
        </p>
      </div>

      <FromTable
        data={fridayData}
        dayKey="Friday"
      />
    </div>
  )
}
