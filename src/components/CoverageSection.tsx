import { ExternalLink } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";

export function CoverageSection() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="bg-ink py-20 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 id="atendimento-title" className="section-title">
            Atendimento em Embu das Artes e região.
          </h2>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 border-t border-white/20 text-lg font-semibold">
            {business.coverage.map((place) => (
              <li key={place} className="flex items-center gap-3 border-b border-white/20 py-3.5">
                <span aria-hidden className="size-2 shrink-0 bg-brand" />
                {place}
              </li>
            ))}
            <li className="col-span-2 flex items-center gap-3 border-b border-white/20 py-3.5">
              <span aria-hidden className="size-2 shrink-0 bg-brand" />
              {business.coverageExtra}
            </li>
          </ul>

          <div className="mt-9">
            <h3 className="text-base font-extrabold">Endereço informado da empresa</h3>
            <address className="mt-2 text-lg not-italic text-white">{business.address.full}</address>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-mist">
              Como o serviço é móvel, este é o endereço informado da empresa. A disponibilidade de atendimento deve ser confirmada
              conforme a sua localização.
            </p>
            <a
              href={business.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-bold text-white underline decoration-brand decoration-2 underline-offset-4 hover:decoration-4"
            >
              Abrir no Google Maps
              <ExternalLink aria-hidden className="size-4" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="relative min-h-[22rem] bg-coal lg:min-h-full">
          <iframe
            title={`Mapa: ${business.address.full}`}
            src={business.links.googleMapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.7)_brightness(0.9)_contrast(0.95)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
