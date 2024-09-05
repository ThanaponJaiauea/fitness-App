/** @format */

import FromTable from "../components/fromTable"

export default function FridayPage() {
  const data = [
    {id: 1, title: "Seated Dumbbell Press"},
    {id: 2, title: "Side Lateral Raise"},
    {id: 3, title: "Bent-Over Lateral Raise"},
    {id: 4, title: "Rope Front Raise"},
    {id: 5, title: "Standing Calf Raise"},
    {id: 6, title: "Seated Calf Raise"},
  ]

  return (
    <div className="w-full h-screen bg-red-200 flex flex-col items-center gap-10">
      <div className="mt-10">
        <p className="font-bold text-lg">
          วัน ศุกร์ : ต้นแขนด้านหน้าและด้านหลัง (Biceps & Triceps)
        </p>
      </div>

      <FromTable
        data={data}
        dayKey="Friday"
      />
    </div>
  )
}
