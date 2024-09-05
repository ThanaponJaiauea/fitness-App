/** @format */

import FromTable from "../components/fromTable"

export default function MondayPage() {
  const data = [
    {id: 1, title: "Barbell Bench Press"},
    {id: 2, title: "Incline Dumbbell Press"},
    {id: 3, title: "Dip"},
    {id: 4, title: "Cable Crossover"},
    {id: 5, title: "Lying Leg Raise"},
    {id: 6, title: "Crunch"},
  ]

  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน จันทร์ : อกและท้อง (Chest & Abdominals)
        </p>
      </div>

      <FromTable
        data={data}
        dayKey="Monday"
      />
    </div>
  )
}
