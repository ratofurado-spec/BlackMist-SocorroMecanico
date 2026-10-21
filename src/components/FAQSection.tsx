"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Quais serviços a BlackMist oferece?",
    a: "Troca de bateria no local, variedade de baterias automotivas, abertura básica de veículos, troca de pneus, reparos rápidos de pneus e testes básicos de alternador e motor de partida. A disponibilidade pode variar conforme a região e a situação: confirme diretamente com a equipe.",
  },
  {
    q: "Quais regiões são atendidas?",
    a: `A atuação informada inclui ${business.coverage.join(", ")}, além de São Paulo e região, conforme disponibilidade. Como o atendimento é móvel, confirme com a equipe se há cobertura no local onde você está.`,
  },
  {
    q: "O atendimento funciona 24 horas?",
    a: "Sim, o horário informado pela empresa é todos os dias, 24 horas. Para saber a disponibilidade no seu endereço e no momento em que você precisa, fale diretamente com a equipe.",
  },
  {
    q: "Como solicitar assistência?",
    a: "Use o botão “Falar pelo WhatsApp” ou ligue para (11) 93333-2718. Conte o que aconteceu, informe o modelo do veículo e a sua localização para que a equipe confirme o atendimento.",
  },
  {
    q: "Como saber qual serviço é adequado ao meu veículo?",
    a: "Descreva o problema para a equipe: por exemplo, se o carro não liga, se há um pneu danificado ou se você não consegue abrir o veículo. A equipe orienta sobre o serviço adequado e sobre as opções compatíveis com o seu carro.",
  },
  {
    q: "A BlackMist realiza troca de bateria no local?",
    a: "Sim, a troca de bateria automotiva no local faz parte dos serviços. Informe o modelo do veículo e a sua localização para confirmar as opções de bateria e a disponibilidade. Valores devem ser confirmados diretamente com a empresa.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper py-20 text-ink lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <h2 id="faq-title" className="section-title">
            Perguntas frequentes
          </h2>
          <p className="mt-5 max-w-sm text-lg text-ink/75">Respostas rápidas sobre o atendimento da BlackMist.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-ink/20 border-y-2 border-ink">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      id={`${uid}-btn-${i}`}
                      aria-expanded={open}
                      aria-controls={`${uid}-panel-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-bold leading-snug transition-colors hover:text-ink/70 sm:text-xl"
                    >
                      {item.q}
                      <Plus aria-hidden className={`size-6 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                    </button>
                  </h3>
                  <div
                    id={`${uid}-panel-${i}`}
                    role="region"
                    aria-hidden={!open}
                    aria-labelledby={`${uid}-btn-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[1.05rem] leading-relaxed text-ink/80">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
