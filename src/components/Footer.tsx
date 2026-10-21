import { business, nav } from "@/config/business";
import { formatPhone, phoneUrl, whatsappUrl } from "@/lib/contact";
import { Logo } from "./Logo";

const headingClass = "font-display text-base font-extrabold";
const linkClass = "underline-offset-4 hover:underline hover:decoration-brand hover:decoration-2";

export function Footer() {
  const socials = Object.entries(business.social).filter(([, href]) => href);
  const phone = phoneUrl();
  const whatsapp = whatsappUrl(business.messages.general);

  return (
    <footer className="bg-white text-ink">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.1fr]">
        <div>
          <Logo className="h-16" />
          <p className="mt-4 font-display text-lg font-extrabold">{business.name}</p>
          <p className="mt-2 max-w-xs leading-relaxed text-ink/75">
            Assistência automotiva em Embu das Artes e região. Atendimento informado: todos os dias, 24 horas.
          </p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-4">
              {socials.map(([name, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={`capitalize ${linkClass}`}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Rodapé">
          <h2 className={headingClass}>Navegação</h2>
          <ul className="mt-4 space-y-2.5 text-ink/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className={linkClass}>
                Perguntas frequentes
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Serviços</h2>
          <ul className="mt-4 space-y-2.5 text-ink/80">
            {business.services.map((s) => (
              <li key={s.id}>
                <a href="#servicos" className={linkClass}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Contato</h2>
          <ul className="mt-4 space-y-2.5 text-ink/80">
            {phone && (
              <li>
                Telefone:{" "}
                <a href={phone} className={`font-semibold text-ink ${linkClass}`}>
                  {formatPhone(business.contact.phone)}
                </a>
              </li>
            )}
            {whatsapp && (
              <li>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`font-semibold text-ink ${linkClass}`}>
                  WhatsApp<span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            )}
            <li>
              <address className="not-italic leading-relaxed">
                {business.address.street}, {business.address.district}
                <br />
                {business.address.city} — {business.address.state}
              </address>
            </li>
            <li>{business.hours}</li>
            <li>
              <a href={business.links.googleMaps} target="_blank" rel="noopener noreferrer" className={`font-semibold text-ink ${linkClass}`}>
                Abrir no Google Maps<span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/15">
        <p className="container-x py-6 text-sm text-ink/70">
          © {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
          {business.images.hero?.credit && <span className="block sm:ml-4 sm:inline">{business.images.hero.credit}.</span>}
        </p>
      </div>
    </footer>
  );
}
