import { business } from "@/config/business";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const steps = [
  { title: "Entre em contato", text: "Chame a BlackMist pelo WhatsApp ou por telefone." },
  { title: "Conte o que aconteceu", text: "Informe o problema, o modelo do veículo e onde você está." },
  { title: "Confirme o atendimento", text: "A equipe confirma a disponibilidade para a sua localização." },
];

export function MobileAssistanceSection() {
  return (
    <section id="assistencia" aria-labelledby="assistencia-title" className="bg-ink py-20 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <h2 id="assistencia-title" className="section-title">
            Assistência automotiva onde você precisa.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            Imprevistos com o carro podem acontecer em diferentes momentos do dia. A BlackMist oferece assistência automotiva móvel
            para ajudar você a encontrar uma solução de acordo com a sua necessidade e localização.
          </p>
          <div className="mt-9">
            <CtaButton message={business.messages.region} icon="whatsapp" size="lg" fullWidthMobile>
              Consultar atendimento na minha região
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-xl font-extrabold">Como pedir ajuda</h3>
          <ol className="mt-6 divide-y divide-white/15 border-y border-white/15">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-6 py-6">
                <span aria-hidden className="w-10 shrink-0 font-display text-4xl font-extrabold leading-none text-brand">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold leading-tight">{step.title}</p>
                  <p className="mt-1.5 text-[1rem] leading-relaxed text-mist">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
