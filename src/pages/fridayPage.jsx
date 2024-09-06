/** @format */

import FromTable from "../components/fromTable"

export default function FridayPage() {
  const data = [
    {
      id: 1,
      title: "Barbell Curl",
      images: [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      ],
    },
    {id: 2, title: "Incline Dumbbell Curl"},
    {id: 3, title: "One-Arm Cable Curl"},
    {id: 4, title: "Tricep Cable Pushdown"},
    {id: 5, title: "Lying Tricep Extension"},
    {id: 6, title: "One-Arm Dumbbell Kickback"},
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
