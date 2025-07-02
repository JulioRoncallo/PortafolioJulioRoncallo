import imgPortafolio from "../assets/portafolio.png";
import imgCanchasColombia from "../assets/canchascolombia.png";
import imgRediseñoWeb from "../assets/redisenoweb.jpg";
import imgMonitoreoIndustrial from "../assets/monitoreoindustrial.jpg";
import imgSistemaInventario from "../assets/sistemainventario.jpg";
import imgProximamente from "../assets/picture-2008484_640.png";

const projectsData = [
    {
        name: "Sistema de Inventario IT",
        description:
            "Aplicación web interna para la gestión de inventario de equipos en el área de soporte técnico. Incluye control de activos, accesibilidad remota y visualización en tiempo real.",
        image: imgSistemaInventario,
        technologies: ["React", "Node.js", "Express", "JavaScript", "SQL", "Git", "Scrum"],
        github: "https://github.com/JulioRoncallo",
        demo: null,
    },
    {
        name: "Rediseño Web Corporativo",
        description:
        "Optimización y rediseño de sitios web empresariales para clientes externos. Mejora del rendimiento, accesibilidad y experiencia de usuario.",
        image: imgRediseñoWeb,
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GitHub", "Scrum"],
        github: "https://github.com/JulioRoncallo",
        demo: null,
    },
    {
        name: "Sistema de Monitoreo Industrial",
        description:
        "Sistema automatizado de monitoreo de instalaciones industriales con backend en Node.js, frontend intuitivo y base de datos SQL Server. Mejora operativa del 25%.",
        image: imgMonitoreoIndustrial,
        technologies: ["Node.js", "React", "JavaScript", "SQL Server", "Express", "UX"],
        github: "https://github.com/JulioRoncallo",
        demo: null,
    },
    {
        name: "Sistema Web de Reservas de Canchas",
        description:
        "Aplicación para visualizar y gestionar la reserva de canchas deportivas. Incluye galería de imágenes, detalles del lugar y navegación dinámica.",
        image: imgCanchasColombia,
        technologies: ["React", "JavaScript", "CSS", "Node.js", "Git", "React Router"],
        github: null,
        demo: null,
    },
    {
        name: "Portafolio Profesional",
        description:
        "Sitio web personal para mostrar experiencia, proyectos y contacto. Desarrollado con Next.js, animaciones con Framer Motion y diseño responsivo.",
        image: imgPortafolio,
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "EmailJS"],
        github: "https://github.com/julio-roncallo/portfolio",
        demo: "https://julio-roncallo-portfolio.vercel.app",
    },
    {
        name: "Proyecto en curso",
        description:
        "Proyecto en desarrollo que se encuentra en fase de planificación y diseño. Se anunciará más información pronto.",
        image: imgProximamente,
        technologies: ["HTML5", "CSS", "Tailwindcss", "TypeScript"],
        github: "https://github.com/JulioRoncallo",
        demo: null,
    },
];
export default projectsData;