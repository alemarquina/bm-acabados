export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "general-painting",
    title: "Pintura General",
    shortDescription: "Aplicación profesional de pintura para interiores y exteriores.",
    description:
      "Ofrecemos servicios completos de pintura para todo tipo de superficies. Trabajamos con materiales de alta calidad garantizando acabados duraderos y estéticamente impecables, tanto en espacios residenciales como comerciales.",
    image: "/assets/services/general-painting.jpg",
    features: [
      "Pintura de interiores y exteriores",
      "Preparación y limpieza de superficies",
      "Aplicación de selladores y bases",
      "Garantía de trabajo terminado",
    ],
  },
  {
    slug: "plumbing",
    title: "Gasfitería",
    shortDescription: "Instalación y reparación de sistemas de agua y gas.",
    description:
      "Contamos con técnicos especializados en instalación, mantenimiento y reparación de tuberías, llaves de paso, desagües y sistemas de gas. Atendemos emergencias y trabajos programados.",
    image: "/assets/services/plumbing.jpg",
    features: [
      "Instalación de tuberías",
      "Reparación de filtraciones",
      "Mantenimiento preventivo",
      "Atención de emergencias",
    ],
  },
  {
    slug: "floor-installation",
    title: "Instalación de Pisos",
    shortDescription: "Colocación de cerámicos, porcelanato, madera y más.",
    description:
      "Instalamos todo tipo de revestimientos para pisos con precisión y cuidado. Desde cerámicos y porcelanato hasta pisos laminados y de madera, garantizamos un acabado uniforme y de larga duración.",
    image: "/assets/services/floor-installation.jpg",
    features: [
      "Cerámicos y porcelanato",
      "Pisos laminados y de madera",
      "Nivelación de superficies",
      "Sellado y terminaciones",
    ],
  },
];
