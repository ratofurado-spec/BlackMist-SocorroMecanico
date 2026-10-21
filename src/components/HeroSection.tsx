import { Check } from "lucide-react";
import { business } from "@/config/business";
import { CtaButton } from "./CtaButton";
import { MediaSlot } from "./MediaSlot";

const quickFacts = [
  "Atendimento 24 horas, todos os dias",
  `${business.experienceYears} anos de experiência`,
  `Relação com ${business.insurers} seguradoras`,
];

/** Ilustração plana: estrada que remete ao símbolo da marca. Substituível por foto (business.images.hero). */
function HeroArt() {
  return (
    <svg aria-hidden viewBox="0 0 640 760" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full">
      <rect width="640" height="760" fill="#0e0e0e" />
      <path d="M0 330 H640" stroke="#202020" strokeWidth="2" />
      {/* faixa laranja do acostamento, como o traço do símbolo */}
      <path d="M-40 760 C120 600 250 420 372 250 L404 250 C330 430 250 600 250 760 Z" fill="#ff5a00" />
      {/* pista */}
      <path d="M250 760 C250 600 330 430 404 250 L430 250 C470 420 600 620 760 760 Z" fill="#1c1c1c" />
      <path
        className="road-flow"
        d="M430 760 C430 600 424 430 417 252"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeDasharray="54 66"
      />
      <path d="M430 760 C470 600 520 440 417 252" fill="none" stroke="#2a2a2a" strokeWidth="2" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink pt-[4.25rem] lg:pt-20">
      <MediaSlot
        image={business.images.hero}
        priority
        sizes="40vw"
        className="absolute inset-y-0 right-0 hidden w-[44%] lg:block"
        fallback={<HeroArt />}
      />
      {business.images.hero && (
        <MediaSlot
          image={business.images.hero}
          priority
          sizes="100vw"
          className="relative h-52 w-full sm:h-72 lg:hidden"
          fallback={null}
        />
      )}
      <div className="container-x relative flex min-h-[calc(100svh-4.25rem)] items-center py-12 lg:min-h-[calc(100svh-5rem)] lg:py-20">
        <div className="relative z-10 lg:max-w-[52%]">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">Socorro mecânico em Embu das Artes</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.75rem,7.2vw,6.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.035em]">
            Seu carro parou. A <span className="text-brand">BlackMist</span> pode ajudar.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
            Assistência automotiva para imprevistos com bateria, pneus, abertura de veículos e outros serviços disponíveis.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton message={business.messages.general} icon="whatsapp" size="lg" fullWidthMobile>
              Falar pelo WhatsApp
            </CtaButton>
            <CtaButton href="#servicos" variant="outline" size="lg" fullWidthMobile>
              Conhecer os serviços
            </CtaButton>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-[0.95rem] font-medium text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-2.5">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={3} />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
