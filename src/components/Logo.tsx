import Image from "next/image";

/**
 * Logo oficial (logo-removebg-preview.png) com transparência original, apenas com as margens
 * transparentes aparadas (public/logo-blackmist.webp). As letras "BLACK" e parte do símbolo são
 * pretas: use somente sobre fundos claros (header, menu mobile e rodapé claros).
 */
export function Logo({ className = "h-11", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo-blackmist.webp"
      alt="BlackMist Socorro Mecânico"
      width={460}
      height={230}
      priority={priority}
      className={`w-auto ${className}`}
    />
  );
}
