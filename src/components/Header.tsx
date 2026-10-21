"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { business, nav } from "@/config/business";
import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

/** Header claro: a logo oficial tem letras pretas e precisa de fundo claro para ficar legível. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white">
        <div className="container-x flex h-[4.25rem] items-center justify-between gap-6 lg:h-20">
          <a href="#inicio" aria-label={`${business.shortName} — ir para o início`} className="shrink-0">
            <Logo className="h-12 lg:h-14" priority />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="border-b-2 border-transparent py-1.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden min-[480px]:block">
              <CtaButton message={business.messages.general} icon="whatsapp" className="whitespace-nowrap">
                Falar pelo WhatsApp
              </CtaButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="inline-flex size-11 items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
            >
              <Menu aria-hidden className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
