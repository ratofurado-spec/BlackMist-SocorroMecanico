import { business } from "@/config/business";
import { Reveal } from "./Reveal";

const areas = [
  ["Baterias", "Troca no local e variedade de baterias automotivas."],
  ["Pneus", "Troca e reparos rápidos."],
  ["Abertura de veículos", "Assistência básica para recuperar o acesso."],
  ["Sistema de partida", "Testes básicos de alternador e motor de partida."],
];

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-paper py-20 text-ink lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <Reveal>
          <h2 id="sobre-title" className="section-title">
            Experiência que faz a diferença.
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/80">
            Com {business.experienceYears} anos de experiência, a BlackMist Socorro Mecânico atua com assistência automotiva para ajudar
            motoristas a enfrentar imprevistos com mais praticidade e tranquilidade. Com atendimento 24 horas e relacionamento com{" "}
            {business.insurers} seguradoras, a empresa oferece serviços relacionados a baterias, pneus, abertura de veículos e sistema de
            partida.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-xl font-extrabold">Onde a BlackMist atua</h3>
          <dl className="mt-5 border-t-2 border-ink">
            {areas.map(([term, text]) => (
              <div key={term} className="border-b border-ink/20 py-5">
                <dt className="font-display text-lg font-extrabold">{term}</dt>
                <dd className="mt-1 text-ink/75">{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
