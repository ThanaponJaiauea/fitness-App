/** @format */

import FromTable from "../components/fromTable"

export default function TuesdayPage() {
  const data = [
    {id: 1, title: "Wide-Grip Rear Pulldown"},
    {id: 2, title: "Pull-Up"},
    {id: 3, title: "T-Bar Row"},
    {id: 4, title: "Seated Cable Row"},
    {id: 5, title: "Face Pull"},
    {id: 6, title: "Dumbbell Shrug"},
  ]

  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วันที่ อังคาร :หลังและปีก (Back & Lats)
        </p>
      </div>

      <FromTable
        data={data}
        dayKey="Tuesday"
      />
    </div>
  )
}
