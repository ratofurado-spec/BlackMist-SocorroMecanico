import Image from "next/image";
import type { ImageAsset } from "@/config/business";

interface MediaSlotProps {
  image: ImageAsset | null;
  /** Ilustração gráfica usada enquanto não houver fotografia configurada. */
  fallback: React.ReactNode;
  priority?: boolean;
  sizes: string;
  className?: string;
}

/** Mostra a fotografia configurada (com placeholder de carregamento) ou a ilustração de reserva. */
export function MediaSlot({ image, fallback, priority = false, sizes, className = "" }: MediaSlotProps) {
  return (
    <div className={`skeleton overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        fallback
      )}
    </div>
  );
}
