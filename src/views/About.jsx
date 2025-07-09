import { Code, Users, Lightbulb, Target } from "lucide-react";
import styles from "../styles/about.module.css";
import Header from "../complements/Header";
import Footer from "../complements/Footer";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-violet-500" />,
      title: "Desarrollo Fullstack",
      description:
        "Experiencia sólida en frontend y backend, creando aplicaciones web completas y escalables.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Trabajo en Equipo",
      description:
        "Colaboración efectiva usando metodologías ágiles como Scrum, facilitando la comunicación y productividad.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Resolución de Problemas",
      description:
        "Enfoque analítico para identificar y resolver desafíos técnicos complejos de manera eficiente.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "UX/UI Focus",
      description:
        "Diseño centrado en el usuario, creando interfaces intuitivas y experiencias digitales excepcionales.",
    },
  ];

  return (
    <section className={styles.about}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Sobre <span className={styles.titleAccent}>Mí</span>
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mainContent}>
          <div>
            <div className={styles.storyCard}>
              <h3 className={styles.storyTitle}>Mi Historia Profesional</h3>
              <p className={styles.storyText}>
                Inicié mi trayectoria con formación técnica en sistemas y experiencia en soporte IT, lo que me permitió adquirir habilidades prácticas en entornos reales. Luego, complementé esta base con estudios en desarrollo frontend y cursos especializados en programación, lógica, Git y control de versiones.
              </p>
              <p className={styles.storyText}>
                Durante mi formación en Ingeniería de Sistemas, trabajé como desarrollador fullstack en empresas del sector tecnológico e industrial. Participé en el desarrollo de soluciones web utilizando tecnologías como JavaScript, HTML, CSS, React, Next.js, TypeScript, Node.js y Express, aplicando metodologías ágiles como Scrum y control de versiones con Git y GitHub.
              </p>
              <p className={styles.storyText}>
                Actualmente, me encuentro en proceso de especialización en desarrollo web fullstack, profundizando en herramientas modernas y bases de datos. Esta formación continua, junto con mi experiencia, me permite abordar proyectos con enfoque técnico, colaborativo y centrado en la experiencia del usuario.
              </p>
            </div>
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{item.icon}</div>
                <h4 className={styles.highlightTitle}>{item.title}</h4>
                <p className={styles.highlightDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.philosophySection}>
          <h3 className={styles.philosophyTitle}>Filosofía de Trabajo</h3>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyItem}>
              <h4 className={styles.philosophyLabel}>Innovación</h4>
              <p className={styles.descriptionText}>
                Creo en la tecnología como un medio para transformar procesos y resolver necesidades reales. En cada proyecto busco aportar soluciones creativas y funcionales que marquen diferencia, aplicando nuevas tecnologías y buenas prácticas de desarrollo.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h4 className={styles.philosophyLabel}>Calidad</h4>
              <p className={styles.descriptionText}>
                La calidad es más que un resultado, es parte del proceso. Me enfoco en entregar soluciones que no solo funcionen, sino que brinden una excelente experiencia de usuario, estén bien estructuradas y cumplan con los objetivos del cliente o del negocio.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h4 className={styles.philosophyLabel}>Colaboración</h4>
              <p className={styles.descriptionText}>
                Ningún gran proyecto se logra solo. La colaboración efectiva, sumada a metodologías ágiles como Scrum, me ha permitido integrarme rápidamente a equipos, aportar soluciones y adaptarme a las dinámicas de trabajo con compromiso y enfoque en resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
