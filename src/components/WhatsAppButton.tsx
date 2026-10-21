"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { whatsappUrl } from "@/lib/contact";

/** Botão flutuante. Some enquanto a seção de contato está visível, para não cobrir os dados de contato. */
export function WhatsAppButton() {
  const url = whatsappUrl(business.messages.general);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [document.getElementById("contato"), document.querySelector("footer")].filter(Boolean) as Element[];
    if (!targets.length || typeof IntersectionObserver === "undefined") return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  if (!url || hidden) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a BlackMist no WhatsApp (abre em nova aba)"
      className="fixed bottom-4 right-4 z-40 flex h-14 items-center gap-2.5 border-2 border-ink bg-brand px-4 font-display font-extrabold text-ink transition-colors hover:bg-brand-hover sm:bottom-6 sm:right-6 sm:px-5"
    >
      <MessageCircle aria-hidden className="size-6" strokeWidth={2.25} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
