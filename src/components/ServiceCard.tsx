import { Activity, ArrowUpRight, Battery, BatteryCharging, KeyRound, Wrench } from "lucide-react";
import type { Service, ServiceIcon } from "@/config/business";
import { whatsappUrl } from "@/lib/contact";

/** Pneu em traço linear, no mesmo estilo dos ícones Lucide. */
function TireIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v6M12 15.5v6M2.5 12h6M15.5 12h6" />
    </svg>
  );
}

const icons: Record<ServiceIcon, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "battery-charging": BatteryCharging,
  battery: Battery,
  activity: Activity,
  key: KeyRound,
  tire: TireIcon,
  wrench: Wrench,
};

/** Linha de serviço: ícone, título, descrição e link, em lista (não em grade de cartões). */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const url = whatsappUrl(service.message);
  const linkClass = "mt-4 inline-flex items-center gap-1.5 text-[0.95rem] font-bold";

  return (
    <article className="group flex h-full gap-5 border-t-2 border-ink py-8 sm:gap-6">
      <span className="flex size-14 shrink-0 items-center justify-center bg-ink text-brand transition-colors group-hover:bg-brand group-hover:text-ink">
        <Icon className="size-7" strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-xl font-extrabold leading-tight tracking-tight sm:text-[1.4rem]">{service.title}</h3>
        <p className="mt-2 max-w-md text-[1rem] leading-relaxed text-ink/75">{service.description}</p>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className={`${linkClass} underline decoration-brand decoration-2 underline-offset-4 hover:decoration-4`}>
            Consultar atendimento
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">: {service.title} (abre o WhatsApp em nova aba)</span>
          </a>
        ) : (
          <span aria-disabled="true" className={`${linkClass} cursor-not-allowed text-ink/40`}>
            Consultar atendimento
          </span>
        )}
      </div>
    </article>
  );
}
