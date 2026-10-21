import { business } from "@/config/business";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const items = [
  { value: `${business.experienceYears}`, unit: "anos", label: "de experiência em assistência automotiva" },
  { value: capitalize(business.insurers), unit: "seguradoras", label: "Experiência no atendimento ao mercado segurador" },
  { value: "24h", unit: "por dia", label: "de atendimento informado, todos os dias" },
];

export function TrustBar() {
  return (
    <section aria-label="Dados institucionais" className="bg-brand text-ink">
      <ul className="container-x grid divide-y divide-ink/20 md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map(({ value, unit, label }) => (
          <li key={label} className="min-w-0 py-7 md:px-8 md:py-9 md:first:pl-0 md:last:pr-0">
            <p className="font-display font-extrabold leading-none tracking-tight">
              <span className="block text-5xl sm:text-6xl md:text-[2.3rem] lg:text-5xl xl:text-6xl">{value}</span>
              <span className="mt-1.5 block text-xl tracking-normal sm:text-2xl">{unit}</span>
            </p>
            <p className="mt-3 text-[0.95rem] font-medium">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
