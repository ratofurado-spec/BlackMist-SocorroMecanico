/**
 * Fonte única dos dados comerciais da BlackMist.
 * Tudo que for contato, endereço, serviços e links externos deve ser alterado SOMENTE aqui
 * (ou nas variáveis de ambiente indicadas em .env.example).
 */

/** Apenas dígitos, com DDI. Ex.: "5511999999999". Vazio = não configurado. */
const digits = (value: string | undefined) => (value ?? "").replace(/\D/g, "");

export type ServiceIcon =
  | "battery-charging"
  | "battery"
  | "activity"
  | "key"
  | "tire"
  | "wrench";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  /** Mensagem pré-preenchida enviada no WhatsApp. */
  message: string;
}

export const business = {
  name: "BlackMist Socorro Mecânico",
  shortName: "BlackMist",
  tagline: "Seu imprevisto não precisa parar o seu dia.",
  description:
    "Assistência automotiva móvel em Embu das Artes e região: troca de bateria no local, pneus, abertura de veículos e testes do sistema de partida. Atendimento 24 horas, todos os dias.",

  experienceYears: 11,
  /** Texto livre (antes era o número 70). Ex.: "diversas". */
  insurers: "diversas",
  hours: "Todos os dias, 24 horas",

  address: {
    street: "Rua Mairiporã, 36",
    district: "Parque das Chácaras",
    city: "Embu das Artes",
    state: "SP",
    country: "BR",
    get full() {
      return `${this.street}, ${this.district}, ${this.city} — ${this.state}`;
    },
  },

  contact: {
    /** Número informado pela empresa (11 93333-2718). Pode ser sobrescrito por NEXT_PUBLIC_WHATSAPP_NUMBER. */
    whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) || "5511933332718",
    /** Telefone informado pela empresa. Pode ser sobrescrito por NEXT_PUBLIC_PHONE_NUMBER. */
    phone: digits(process.env.NEXT_PUBLIC_PHONE_NUMBER) || "5511933332718",
    defaultMessage: "Olá! Acessei o site da BlackMist e gostaria de informações sobre assistência automotiva.",
  },

  /** PENDENTE: domínio definitivo (NEXT_PUBLIC_SITE_URL). */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),

  /** PENDENTE: adicione apenas links reais. Ícones só aparecem no rodapé quando preenchidos. */
  social: {
    instagram: "",
    facebook: "",
  } as Record<string, string>,

  links: {
    /** Link do perfil da empresa no Google, informado pelo cliente. */
    googleMaps: "https://share.google/zoEGG6o9Z08BFTM9t",
    googleMapsEmbed:
      "https://www.google.com/maps?output=embed&q=" +
      encodeURIComponent("Rua Mairiporã, 36, Parque das Chácaras, Embu das Artes - SP"),
  },

  /**
   * Fotografias. Nenhuma foto oficial foi fornecida até agora: enquanto estiver `null`,
   * o site usa ilustrações gráficas. Para usar fotos reais, coloque os arquivos em /public/images
   * e informe aqui, ex.: { src: "/images/hero.jpg", alt: "Técnico da BlackMist ...", width: 1920, height: 1080 }.
   */
  images: {
    // Foto ilustrativa (não é registro da equipe da BlackMist). Unsplash, Iyan Ryan: https://unsplash.com/photos/nkdv9cqz9VE
    // Licença Unsplash: uso comercial livre, atribuição opcional.
    hero: {
      src: "/images/hero-assistencia.webp",
      alt: "Profissional de luvas e uniforme laranja trabalhando no compartimento do motor de um carro",
      width: 1800,
      height: 1008,
      credit: "Foto ilustrativa: Iyan Ryan / Unsplash",
    } as ImageAsset | null,
    mobile: null as ImageAsset | null,
    about: null as ImageAsset | null,
  },

  services: [
    {
      id: "troca-de-bateria",
      title: "Troca de bateria no local",
      description:
        "Assistência para substituição de bateria automotiva, com praticidade para quem precisa resolver problemas de partida.",
      icon: "battery-charging",
      message: "Olá! Preciso de informações sobre troca de bateria automotiva no local.",
    },
    {
      id: "baterias",
      title: "Baterias automotivas",
      description:
        "Variedade de baterias para diferentes veículos e necessidades. Consulte as opções compatíveis com seu carro.",
      icon: "battery",
      message: "Olá! Gostaria de consultar as baterias disponíveis para o meu veículo.",
    },
    {
      id: "alternador-partida",
      title: "Testes básicos de alternador e motor de partida",
      description:
        "Testes básicos para ajudar a identificar possíveis falhas relacionadas ao alternador e ao sistema de partida.",
      icon: "activity",
      message: "Olá! Preciso de ajuda com a partida do meu veículo. Gostaria de um teste de alternador e motor de partida.",
    },
    {
      id: "abertura-de-veiculos",
      title: "Abertura básica de veículos",
      description:
        "Assistência para situações em que você precisa recuperar o acesso ao seu veículo.",
      icon: "key",
      message: "Olá! Preciso de ajuda para abrir o meu veículo.",
    },
    {
      id: "troca-de-pneus",
      title: "Troca de pneus",
      description:
        "Ajuda para lidar com imprevistos envolvendo a troca de pneus no local.",
      icon: "tire",
      message: "Olá! Gostaria de consultar a disponibilidade para troca de pneu.",
    },
    {
      id: "reparo-de-pneus",
      title: "Reparos rápidos de pneus",
      description:
        "Assistência para avaliação e reparos rápidos de pneus, conforme as condições do dano.",
      icon: "wrench",
      message: "Olá! Gostaria de consultar a disponibilidade para reparo de pneu.",
    },
  ] satisfies Service[],

  /** Localidades informadas pela empresa. */
  coverage: [
    "Embu das Artes",
    "Taboão da Serra",
    "Itapecerica da Serra",
    "Cotia",
    "Osasco",
    "Campo Limpo",
    "Butantã",
    "Morumbi",
  ],
  coverageExtra: "São Paulo e região, mediante consulta",

  messages: {
    general: "Olá! Acessei o site da BlackMist e gostaria de informações sobre assistência automotiva.",
    region: "Olá! Gostaria de consultar a disponibilidade de atendimento na minha região.",
    starting: "Olá! Preciso de ajuda com a partida do meu veículo.",
    battery: "Olá! Preciso de informações sobre troca de bateria automotiva.",
    tire: "Olá! Gostaria de consultar a disponibilidade para troca de pneu.",
  },
} as const;

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Crédito exibido no rodapé (fotos ilustrativas de banco de imagens). */
  credit?: string;
}

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Área de Atendimento" },
  { href: "#contato", label: "Contato" },
] as const;
