"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { business, nav } from "@/config/business";
import { formatPhone, phoneUrl } from "@/lib/contact";
import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const phone = phoneUrl();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-0 z-50 flex h-dvh flex-col bg-white text-ink lg:hidden"
    >
      <div className="container-x flex h-[4.25rem] items-center justify-between border-b border-ink/10">
        <Logo className="h-12" />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="inline-flex size-11 items-center justify-center border-2 border-ink transition-colors hover:bg-ink hover:text-white"
        >
          <X aria-hidden className="size-5" />
        </button>
      </div>

      <nav aria-label="Menu mobile" className="container-x flex-1 overflow-y-auto pt-4">
        <ul className="divide-y divide-ink/10">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="block py-4 font-display text-2xl font-extrabold tracking-tight transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x space-y-3 pb-8 pt-4">
        <CtaButton message={business.messages.general} icon="whatsapp" size="lg" className="w-full">
          Falar pelo WhatsApp
        </CtaButton>
        {phone && (
          <CtaButton href={phone} icon="phone" size="lg" variant="outline-dark" className="w-full">
            {formatPhone(business.contact.phone)}
          </CtaButton>
        )}
      </div>
    </div>
  );
}
