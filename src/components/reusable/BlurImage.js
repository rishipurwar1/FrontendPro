import { useState } from "react"
import Image from "next/image"

const BlurImage = ({ imageSrc, imageAlt }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="relative aspect-[4/3]">
      <Image
        alt={imageAlt}
        src={imageSrc}
        fill
        style={{ objectFit: "contain" }}
        className={cn(
          "duration-700 ease-in-out group-hover:scale-105",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default BlurImage

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
