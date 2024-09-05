/** @format */

import FromTable from "../components/fromTable"

export default function Wednesday() {
  const data = [
    {id: 1, title: "Barbell Squat"},
    {id: 2, title: "Leg Press"},
    {id: 3, title: "Leg Extension"},
    {id: 4, title: "Lying Leg Curl"},
    {id: 5, title: "Barbell Deadlift"},
    {id: 6, title: "Glute Bridge"},
  ]
  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน พุืธ : ต้นขาด้านหน้าและด้านหลัง (Quadriceps & Hamstrings)
        </p>
      </div>

      <FromTable
        data={data}
        dayKey="Wednesday"
      />
    </div>
  )
}
