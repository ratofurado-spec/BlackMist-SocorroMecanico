import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

type Variant = "primary" | "dark" | "outline" | "outline-dark";

interface CtaButtonProps {
  children: React.ReactNode;
  /** Mensagem pré-preenchida do WhatsApp. Ignorado se `href` for informado. */
  message?: string;
  /** Link interno/âncora/externo. Se ausente, o botão aponta para o WhatsApp. */
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  icon?: "whatsapp" | "arrow" | "phone" | "none";
  className?: string;
  fullWidthMobile?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2.5 font-display font-extrabold transition-colors duration-200 select-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-hover",
  dark: "bg-ink text-white hover:bg-graphite",
  outline: "border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
  "outline-dark": "border-2 border-ink/80 text-ink hover:bg-ink hover:text-white",
};

const sizes = { md: "min-h-11 px-5 py-2 text-[0.95rem]", lg: "min-h-14 px-7 py-3 text-base" };

/**
 * Botão de chamada para ação. Se o WhatsApp não estiver configurado,
 * renderiza um botão desabilitado (nunca um link aparentemente funcional).
 */
export function CtaButton({
  children,
  message,
  href,
  variant = "primary",
  size = "md",
  icon = "none",
  className = "",
  fullWidthMobile = false,
}: CtaButtonProps) {
  const width = fullWidthMobile ? "w-full sm:w-auto" : "";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`;
  const Icon = icon === "whatsapp" ? MessageCircle : icon === "arrow" ? ArrowRight : icon === "phone" ? Phone : null;
  const content = (
    <>
      {Icon && <Icon aria-hidden className="size-[1.2em] shrink-0" strokeWidth={2.25} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
        {external && <span className="sr-only"> (abre em nova aba)</span>}
      </a>
    );
  }

  const url = whatsappUrl(message);
  if (!url) {
    return (
      <button
        type="button"
        disabled
        title="WhatsApp ainda não configurado (veja src/config/business.ts)"
        className={`${base} ${sizes[size]} ${width} cursor-not-allowed border-2 border-current opacity-40 ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  );
}
