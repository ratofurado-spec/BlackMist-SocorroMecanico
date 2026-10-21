import { business } from "@/config/business";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-paper py-20 text-ink lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 id="servicos-title" className="section-title">
            Como podemos ajudar?
          </h2>
          <p className="mt-5 text-lg text-ink/75">Conheça os serviços de assistência automotiva da BlackMist.</p>
        </Reveal>

        <ul className="mt-10 grid gap-x-14 lg:mt-14 lg:grid-cols-2">
          {business.services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={(i % 2) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 border-t-2 border-ink pt-5 text-[0.95rem] text-ink/75">
          A disponibilidade de cada serviço pode variar conforme a região, o veículo e a situação. Confirme diretamente com a equipe.
        </p>
      </div>
    </section>
  );
}
