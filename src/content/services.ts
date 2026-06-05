import type { ImageMetadata } from "astro";

// Imágenes de servicios
import service1 from "../assets/services/service-1.webp";
import service2 from "../assets/services/service-2.webp";
import service3 from "../assets/services/service-3.webp";
import service4 from "../assets/services/service-4.webp";
import service5 from "../assets/services/service-5.webp";
import service6 from "../assets/services/service-6.webp";
import service7 from "../assets/services/service-7.webp";
import service8 from "../assets/services/service-8.webp";

// Nuevos assets específicos para Pintura en General
import bgPintura from "../assets/services/pintura-general/background-pintura.webp";
import pintura1 from "../assets/services/pintura-general/pintura-1.webp";
import pintura2 from "../assets/services/pintura-general/pintura-2.webp";
import pintura3 from "../assets/services/pintura-general/pintura-3.webp";

// Íconos de servicios
import iconPintura from "../assets/services/icon-pintura.webp";
import iconDrywall from "../assets/services/icon-drywall.webp";
import iconEstuco from "../assets/services/icon-estuco.webp";
import iconGasfiteria from "../assets/services/icon-gasfiteria.webp";
import iconMarmol from "../assets/services/icon-marmol-granito.webp";
import iconCarpinteria from "../assets/services/icon-carpinteria.webp";
import iconMayolica from "../assets/services/icon-mayolica-porcelanato.webp";
import iconPiso from "../assets/services/icon-piso-laminado-spc.webp";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: ImageMetadata;
  icon: ImageMetadata;
  description?: string;
  features?: string[];  
  backgroundImage?: ImageMetadata;
  detailImage?: ImageMetadata;
  gallery?: ImageMetadata[];
  subtitle?: string;
  characteristics?: string[];
}

export const services: Service[] = [
  {
    slug: "pintura-general",
    title: "Pintura en General",
    shortDescription:
      "Aplicamos pintura de calidad para diversas superficies, garantizando acabados duraderos y estéticos.",
    image: service1,
    icon: iconPintura,
    backgroundImage: bgPintura,
    detailImage: pintura1,
    gallery: [pintura2, pintura3],
    subtitle: "VUELVE A DARLE COLOR A TU PROPIEDAD",
    description:
      "Ofrecemos pintura especializada para fierro, madera, y otras superficies utilizando materiales de calidad que aseguran durabilidad y un acabado impecable ya sea para proteger o embellecer tus espacios.\n\nEn BM Acabados ofrecemos un **servicio integral de pintura tanto en interiores como en exteriores. Realizamos todo el proceso desde la restauración de grietas, hasta el pintado sólido.",
    features: [
      "Pintura de interiores y exteriores",
      "Preparación y limpieza de superficies",
      "Aplicación de selladores y bases",
      "Garantía de trabajo terminado",
    ],
    characteristics: [
      "Limpiamos y lijamos para asegurar una base adecuada para la pintura.",
      "Rellenamos imperfecciones y grietas para lograr superficies lisas y perfectas antes de pintar.",
      "Tratamos superficies porosas para prevenir filtraciones y mejorar el acabado final.",
      "Aplicamos una capa base para mejorar la adherencia y duración de la pintura.",
      "Permite renovar y transformar ambientes de manera económica.",
    ],
  },
  {
    slug: "sistema-drywall",
    title: "Sistema de Drywall",
    shortDescription:
      "Instalamos estructuras de drywall para crear espacios funcionales y modernos con acabados precisos.",
    image: service2,
    icon: iconDrywall,
    description:
      "Construimos tabiques, cielos rasos y divisiones con sistema drywall. Soluciones rápidas, limpias y con excelente acabado para renovar o ampliar ambientes residenciales y comerciales.",
    features: [
      "Tabiques y divisiones interiores",
      "Cielos rasos y techos decorativos",
      "Instalación de perfiles y placas",
      "Acabado y pintura final",
    ],
  },
  {
    slug: "estuco-veneciano",
    title: "Estuco Veneciano",
    shortDescription:
      "Ofrecemos acabados elegantes y texturizados con estuco veneciano, un estilo único para tus espacios.",
    image: service3,
    icon: iconEstuco,
    description:
      "El estuco veneciano es una técnica artesanal que otorga un acabado lujoso y texturizado. Ideal para paredes de salones, lobbies y espacios que buscan distinción y elegancia.",
    features: [
      "Aplicación artesanal de estuco",
      "Texturizados y efectos marmolados",
      "Acabados brillantes y mate",
      "Personalización de colores",
    ],
  },
  {
    slug: "gasfiteria",
    title: "Gasfitería",
    shortDescription:
      "Brindamos instalación y reparación de tuberías, garantizando solidez para tu hogar o negocio.",
    image: service4,
    icon: iconGasfiteria,
    description:
      "Contamos con técnicos especializados en instalación, mantenimiento y reparación de tuberías, llaves de paso, desagües y sistemas de gas. Atendemos emergencias y trabajos programados.",
    features: [
      "Instalación de tuberías",
      "Reparación de filtraciones",
      "Mantenimiento preventivo",
      "Atención de emergencias",
    ],
  },
  {
    slug: "marmol-granito",
    title: "Marmol y Granito",
    shortDescription:
      "Ofrecemos servicios de nivel en mármol y granito, como también el marmolizado para realizar cualquier espacio.",
    image: service5,
    icon: iconMarmol,
    description:
      "Instalamos y pulimos superficies de mármol y granito para cocinas, baños y pisos. También realizamos técnicas de marmolizado que replican la elegancia de la piedra natural a menor costo.",
    features: [
      "Instalación de mármol y granito",
      "Pulido y sellado de superficies",
      "Marmolizado decorativo",
      "Encimeras y revestimientos",
    ],
  },
  {
    slug: "carpinteria",
    title: "Carpintería",
    shortDescription:
      "Ofrecemos trabajos de carpintería en madera con acabados precisos y funcionales.",
    image: service6,
    icon: iconCarpinteria,
    description:
      "Fabricamos e instalamos muebles, puertas, closets y revestimientos en madera. Cada proyecto es diseñado a medida para adaptarse al estilo y necesidades del cliente.",
    features: [
      "Muebles a medida",
      "Puertas y ventanas de madera",
      "Closets y vestidores",
      "Revestimientos en madera",
    ],
  },
  {
    slug: "mayolica-porcelanato",
    title: "Mayólica y Porcelanato",
    shortDescription:
      "Colocamos mayólicas y porcelanato logrando superficies resistentes, estéticas y fácil de mantener.",
    image: service7,
    icon: iconMayolica,
    description:
      "Instalamos mayólicas y porcelanato en baños, cocinas, pisos y fachadas. Garantizamos un acabado uniforme, juntas perfectas y materiales de primera calidad.",
    features: [
      "Colocación de mayólica y porcelanato",
      "Nivelación y preparación de superficies",
      "Cortes especiales y diseños",
      "Fragüe y sellado profesional",
    ],
  },
  {
    slug: "piso-laminado-spc",
    title: "Piso Laminado y SPC",
    shortDescription:
      "Instalamos pisos laminados como también de SPC muy durables y de poco mantenimiento requerido.",
    image: service8,
    icon: iconPiso,
    description:
      "Instalamos pisos laminados y SPC (Stone Plastic Composite), ideales por su resistencia al agua, durabilidad y fácil mantenimiento. Perfectos para hogares, oficinas y locales comerciales.",
    features: [
      "Instalación de piso laminado",
      "Instalación de piso SPC",
      "Preparación de subsuelo",
      "Zócalos y terminaciones",
    ],
  },
];
