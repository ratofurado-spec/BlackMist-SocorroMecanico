import { Clock, MapPin, Phone } from "lucide-react";
import { business } from "@/config/business";
import { formatPhone, phoneUrl } from "@/lib/contact";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const phone = phoneUrl();

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-brand py-20 text-ink lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <Reveal>
          <h2 id="contato-title" className="section-title">
            Precisa de assistência automotiva?
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed">
            Entre em contato com a BlackMist, informe o que aconteceu e consulte a disponibilidade de atendimento para sua localização.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton message={business.messages.general} icon="whatsapp" size="lg" variant="dark" fullWidthMobile>
              Falar com a BlackMist no WhatsApp
            </CtaButton>
            {phone && (
              <CtaButton href={phone} icon="phone" size="lg" variant="outline-dark" fullWidthMobile>
                Ligar {formatPhone(business.contact.phone)}
              </CtaButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="divide-y divide-ink/25 border-y-2 border-ink">
            <li className="flex gap-4 py-6">
              <Clock aria-hidden className="mt-1 size-6 shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider">Atendimento</p>
                <p className="mt-1 text-lg font-semibold">{business.hours}</p>
              </div>
            </li>
            <li className="flex gap-4 py-6">
              <MapPin aria-hidden className="mt-1 size-6 shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider">Endereço da empresa</p>
                <address className="mt-1 text-lg font-semibold not-italic">{business.address.full}</address>
                <a
                  href={business.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-bold underline underline-offset-4"
                >
                  Abrir no Google Maps<span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </li>
            {phone && (
              <li className="flex gap-4 py-6">
                <Phone aria-hidden className="mt-1 size-6 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Telefone e WhatsApp</p>
                  <a href={phone} className="mt-1 inline-block text-lg font-semibold underline underline-offset-4">
                    {formatPhone(business.contact.phone)}
                  </a>
                </div>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
