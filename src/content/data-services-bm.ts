import type { ImageMetadata } from "astro";

// Íconos de servicios
import iconPintura from "../assets/services/icon-pintura.webp";
import iconDrywall from "../assets/services/icon-drywall.webp";
import iconEstuco from "../assets/services/icon-estuco.webp";
import iconGasfiteria from "../assets/services/icon-gasfiteria.webp";
import iconMarmol from "../assets/services/icon-marmol-granito.webp";
import iconCarpinteria from "../assets/services/icon-carpinteria.webp";
import iconMayolica from "../assets/services/icon-mayolica-porcelanato.webp";
import iconPiso from "../assets/services/icon-piso-laminado-spc.webp";

// Imágenes de servicios
import service1 from "../assets/services/service-1.webp";
import service2 from "../assets/services/service-2.webp";
import service3 from "../assets/services/service-3.webp";
import service4 from "../assets/services/service-4.webp";
import service5 from "../assets/services/service-5.webp";
import service6 from "../assets/services/service-6.webp";
import service7 from "../assets/services/service-7.webp";
import service8 from "../assets/services/service-8.webp";

// Assets Pintura
import bgPintura from "../assets/services/pintura-general/background-pintura.webp";
import pintura1 from "../assets/services/pintura-general/pintura-1.webp";
import pintura2 from "../assets/services/pintura-general/pintura-2.webp";
import pintura3 from "../assets/services/pintura-general/pintura-3.webp";

// Assets Drywall
import bgDrywall from "../assets/services/drywall/background-drywall.webp";
import drywall1 from "../assets/services/drywall/drywall-1.webp";
import drywall2 from "../assets/services/drywall/drywall-2.webp";
import drywall3 from "../assets/services/drywall/drywall-3.webp";

// Assets Estuco
import bgEstuco from "../assets/services/estuco/background-estuco.webp";
import estuco1 from "../assets/services/estuco/estuco-1.webp";
import estuco2 from "../assets/services/estuco/estuco-2.webp";
import estuco3 from "../assets/services/estuco/estuco-3.webp";

// Assets Gasfiteria
import bgGasfiteria from "../assets/services/gasfiteria/background-gasfiteria.webp";
import gasfiteria1 from "../assets/services/gasfiteria/gasfiteria-1.webp";
import gasfiteria2 from "../assets/services/gasfiteria/gasfiteria-2.webp";
import gasfiteria3 from "../assets/services/gasfiteria/gasfiteria-3.webp";

// Assets Marmol y Granito
import bgMarmolGranito from "../assets/services/marmol-granito/background-marmol-granito.webp";
import marmolAndGranito1 from "../assets/services/marmol-granito/marmol-granito-1.webp";
import marmolAndGranito2 from "../assets/services/marmol-granito/marmol-granito-2.webp";
import marmolAndGranito3 from "../assets/services/marmol-granito/marmol-granito-3.webp";

// Assets Carpinteria
import bgCarpinteria from "../assets/services/carpinteria/background-carpinteria.webp";
import carpinteria1 from "../assets/services/carpinteria/carpinteria-1.webp";
import carpinteria2 from "../assets/services/carpinteria/carpinteria-2.webp";
import carpinteria3 from "../assets/services/carpinteria/carpinteria-3.webp";

// Assets Mayolica y Porcelanato
import bgMayolicaPorcelanato from "../assets/services/mayolica-porcelanato/background-mayolica-porcelanato.webp";
import mayolicaAndPorcelanato1 from "../assets/services/mayolica-porcelanato/mayolica-porcelanato-1.webp";
import mayolicaAndPorcelanato2 from "../assets/services/mayolica-porcelanato/mayolica-porcelanato-2.webp";
import mayolicaAndPorcelanato3 from "../assets/services/mayolica-porcelanato/mayolica-porcelanato-3.webp";

// Assets Piso Laminado y SPC
import bgLaminadoSPC from "../assets/services/piso-laminado-spc/background-laminado-spc.webp";
import laminadoAndSPC1 from "../assets/services/piso-laminado-spc/laminado-spc-1.webp";
import laminadoAndSPC2 from "../assets/services/piso-laminado-spc/laminado-spc-2.webp";
import laminadoAndSPC3 from "../assets/services/piso-laminado-spc/laminado-spc-3.webp";


export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: ImageMetadata;
  icon: ImageMetadata;
  description?: string;  
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
      "Ofrecemos pintura especializada para fierro, madera, y otras superficies utilizando materiales de calidad que aseguran durabilidad y un acabado impecable ya sea para proteger o embellecer tus espacios.\n\nEn BM Acabados ofrecemos un servicio integral de pintura tanto en interiores como en exteriores. Realizamos todo el proceso desde la restauración de grietas, hasta el pintado sólido.",  
    characteristics: [
      "Limpiamos y lijamos para asegurar una base adecuada para la pintura",
      "Rellenamos imperfecciones y grietas para lograr superficies lisas antes de pintar",
      "Tratamos superficies porosas para prevenir filtraciones y mejorar el acabado final",
      "Aplicamos una capa base para mejorar la adherencia y duración de la pintura",
      "Permite renovar y transformar ambientes de manera económica",
    ],
  },
  {
    slug: "sistema-drywall",
    title: "Sistema de Drywall",
    shortDescription:
      "Instalamos estructuras de drywall para crear espacios funcionales y modernos con acabados precisos.",
    image: service2,    
    icon: iconDrywall,
    backgroundImage: bgDrywall,
    detailImage: drywall1,
    gallery: [drywall2, drywall3],
    subtitle: "INTEGRA DIVISIONES, TECHOS Y MÁS CON DRYWALL",
    description:
      "En BM Acabados, ofrecemos la instalación profesional de sistemas de drywall para la construcción y remodelación de espacios. El drywall es una opción moderna y versátil para crear divisiones, cielos rasos, estructuras interiores y mucho más.",   
    characteristics: [
      "Desde superficies lisas hasta texturizadas, adaptándose a cualquier diseño interior",
      "Creación de cielos rasos  para mejorar la estética y ocultar instalaciones",
      "Nos encagarmos de todo el proceso de instalaciones generales y acabados finales",
      "Creación de estanterías decorativas integradas al diseño de las paredes",
      "El drywall se puede reparar rápidamente sin necesidad de grandes obras"      
    ]
  },
  {
    slug: "estuco-veneciano",
    title: "Estuco Veneciano",
    shortDescription:
      "Ofrecemos acabados elegantes y texturizados con estuco veneciano, un estilo único para tus espacios.",
    image: service3,
    icon: iconEstuco,
    backgroundImage: bgEstuco,
    detailImage: estuco1,
    gallery: [estuco2, estuco3],
    subtitle: "RENUEVA TUS ESPACIOS CON ESTUCO DANDOLE UN AMBIENTE SOFISTICADO",
    description:
      `Una técnica decorativa que transforma espacios con un acabado elegante, brillante y liso, inspirado en la arquitectura clásica italiana. Es una solución estética ideal para quienes buscan ambientes sofisticados y personalizados.\n
      El estuco veneciano es un acabado decorativo a base de cal, pigmentos naturales y aditivos, que se aplica en varias capas para lograr un efecto de profundidad y brillo.`,    
    characteristics: [
      "Personaliza tu propio acabado y tono según tus preferencias",
      "Resiste el paso del tiempo y se mantiene con un mínimo mantenimiento",
      "Permite que las paredes respiren, evitando problemas de humedad",
      "Es repelente al polvo y al agua, lo que facilita su mantenimiento",
      "Compatible con superficies de yeso, cemento y madera, entre otras",
    ]
  },
  {
    slug: "gasfiteria",
    title: "Gasfitería",
    shortDescription:
      "Brindamos instalación y reparación de tuberías, garantizando solidez para tu hogar o negocio.",
    image: service4,
    icon: iconGasfiteria,
    backgroundImage: bgGasfiteria,
    detailImage: gasfiteria1,
    gallery: [gasfiteria2, gasfiteria3],
    subtitle: "INSTALACIONES SEGURAS Y EFICIENTES",    
    description:
      `Realizamos instalaciones de tuberías, griferías y desagües con materiales de calidad y mano de obra especializada. Garantizamos un sistema funcional, libre de filtraciones, que cumple con las normas técnicas y se adapta a las necesidades de tu hogar o negocio.\n
      Brindamos atención oportuna frente a fugas de agua, filtraciones o problemas de presión. Nuestro equipo actúa con rapidez y precisión para evitar daños mayores, asegurando el buen estado de tus instalaciones sanitarias.`,   
    characteristics: [
      "Solucionamos filtraciones, cambios de grifería o desagües conflictivos",
      "Aseguramos una mayor vida útil y eficiencia en el sistema de agua o desagüe",
      "Contamos con técnicos que brindan un servicio eficiente y profesional en cada visita",
      "Corregir instalaciones mejora el consumo de agua y reduce gastos",
      "Aseguramos una instalación funcional para incrementar la seguridad de tus conexiones"
    ]
  },
  {
    slug: "marmol-granito",
    title: "Marmol y Granito",
    shortDescription:
      "Ofrecemos servicios de nivel en mármol y granito, como también el marmolizado para realizar cualquier espacio.",
    image: service5,
    icon: iconMarmol,
    backgroundImage: bgMarmolGranito,
    detailImage: marmolAndGranito1,
    gallery: [marmolAndGranito2, marmolAndGranito3],
    subtitle: "EMBELLECE TUS ESPACIOS CON MÁRMOL Y GRANITO",
    description:
      `Son piedras naturales muy utilizadas por su resistencia, duración y apariencia elegante. Ideales para pisos, paredes, encimeras, fachadas y más. El mármol y el granito ofrecen alta resistencia, durabilidad y una apariencia elegante. Se instalan sobre superficies firmes como concreto o muros sólidos, brindando un acabado de alta calidad tanto en interiores como exteriores.`,   
    characteristics: [
      "Tableros de cocina, baño, fachadas, suelos, escaleras, mesas de centro, y más",
      "Cada pieza de mármol es única, ya que se trata de un material natural y puro",
      "El mármol es una piedra que desarrolla una capa protectora con el tiempo",
      "Tienen ventajas estéticas y de durabilidad, son una inversión rentable",
      "Elegancia y pureza, juntos son ideales para acabados duraderos y sofisticados"
    ]
  },  
  {
    slug: "carpinteria",
    title: "Carpintería",
    shortDescription:
      "Ofrecemos trabajos de carpintería en madera con acabados precisos y funcionales.",
    image: service6,
    icon: iconCarpinteria,
    backgroundImage: bgCarpinteria,
    detailImage: carpinteria1,
    gallery: [carpinteria2, carpinteria3],
    subtitle: "DISEÑO, FABRICACIÓN Y ACABADOS EN MADERA",
    description:
      "Brindamos soluciones en carpintería para interiores y exteriores, fabricando e instalando muebles, puertas y estructuras a medida. Protegemos la madera de la humedad, el desgaste y los rayos UV, como también recuperamos su estado original utilizando productos de alta calidad y ecoamigables. Cada proyecto es único, adaptamos nuestro servicio a tus necesidades.",    
    characteristics: [
      "Acabados en madera, recuperando su belleza y resistencia natural",
      "Creamos acabados resistentes que realzan el valor de tu propiedad",
      "Mejoramos tus espacios con soluciones funcionales y personalizadas",
      "Utilizamos materiales de calidad para acabados duraderos y elegantes.",
      "Contamos con carpinteros de nivel para trabajos precisos y detallados."
    ]
  },
  {
    slug: "mayolica-porcelanato",
    title: "Mayólica y Porcelanato",
    shortDescription:
      "Colocamos mayólicas y porcelanato logrando superficies resistentes, estéticas y fácil de mantener.",
    image: service7,
    icon: iconMayolica,
    backgroundImage: bgMayolicaPorcelanato,
    detailImage: mayolicaAndPorcelanato1,
    gallery: [mayolicaAndPorcelanato2, mayolicaAndPorcelanato3],
    subtitle: "DALE VIDA Y PROTECCIÓN A TUS ESPACIOS ",
    description:
      "La mayólica y el porcelanato son acabados cerámicos ideales para zonas que requieren fácil limpieza y alta resistencia a la humedad. Este acabado es muy utilizado en baños, cocinas, lavanderías y muros expuestos, tanto en interiores como exteriores. Ofrecemos una instalación profesional con acabados limpios, nivelados y bien sellados.",                
    characteristics: [
      "Instalamos mayólica y porcelanato con acabados precisos y duraderos",
      "Fácil mantenimiento gracias a su acabado esmaltado que permite una limpieza rápida.",
      "Utilizamos materiales de calidad para una instalación resistente y elegante.",
      "Mejoramos tus espacios con diseños modernos y funcionales.",
      "Creamos superficies resistentes que realzan el valor de tu propiedad."
    ]
  },
  {
    slug: "piso-laminado-spc",
    title: "Piso Laminado y SPC",
    shortDescription:
      "Instalamos pisos laminados como también de SPC muy durables y de poco mantenimiento requerido.",
    image: service8,
    icon: iconPiso,
    backgroundImage: bgLaminadoSPC,
    detailImage: laminadoAndSPC1,
    gallery: [laminadoAndSPC2, laminadoAndSPC3],
    subtitle: "ESTILIZA TUS ESPACIOS CON PISO LAMINADO Y SPC",
    description:
      "El piso laminado y el SPC (Compuesto de Plástico de Piedra) son alternativas modernas y versátiles para ambientes interiores. Ambos ofrecen una estética tipo madera, fácil mantenimiento y gran durabilidad. Su instalación rápida y limpia los convierte en una excelente opción para hogares y oficinas.",    
    characteristics: [
      "Fáciles de limpiar y mantener, ideales para hogares activos.",
      "Ambos ofrecen estabilidad, absorción acústica y una larga vida útil.",
      "Imitación madera con acabados modernos, realistas y elegantes.",
      "El laminado destaca por su instalación rápida, confort y estética.",
      "El SPC es impermeable, antideslizante y resistente a cambios de temperatura."



    ]
  },
];
