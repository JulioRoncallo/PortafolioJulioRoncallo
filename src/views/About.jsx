import { Code, Users, Lightbulb, Target } from "lucide-react";
import "../styles/about.css";
import Header from "../complements/Header";
import Footer from "../complements/Footer";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
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
    
    <section className="about">
      <Header/>
      <div className="container">
        <div className="header">
          <h2 className="title">
            Sobre <span className="titleAccent">Mí</span>
          </h2>
          <div className="divider"></div>
        </div>

        <div className="mainContent">
          <div>
            <div className="storyCard">
              <h3 className="storyTitle">Mi Historia Profesional</h3>
              <p className="storyText">
                Mi trayectoria comenzó con formación técnica en sistemas y una primera experiencia profesional 
                en soporte IT, que me permitió adquirir habilidades prácticas en entornos reales. Complementé 
                esta base con estudios en desarrollo frontend y diversos cursos especializados en programación, 
                lógica, Git y control de versiones, fortaleciendo así mi perfil técnico y mi capacidad para 
                trabajar en proyectos colaborativos.
              </p>
              <p className="storyText">
                Durante mi formación en Ingeniería de Sistemas, trabajé como desarrollador fullstack en diferentes
                 empresas del sector tecnológico e industrial, participando en el desarrollo de soluciones web y 
                 de software. En estos roles utilicé tecnologías como JavaScript, HTML, CSS, React, NextJS, 
                 TypeScript, Node.js y Express, aplicando metodologías ágiles como Scrum y gestionando versiones 
                 con Git y GitHub. Estas experiencias consolidaron mis capacidades en desarrollo frontend y 
                 backend, siempre con enfoque en experiencia de usuario (UX) y eficiencia del sistema.
              </p>
              <p className="storyText">
                Actualmente, me encuentro en proceso de especialización en desarrollo web fullstack, 
                profundizando en herramientas modernas como React y Node.js, y reforzando conocimientos en 
                bases de datos y estructuración de proyectos. Esta formación continua, junto con mi experiencia 
                profesional, me permite abordar proyectos complejos de desarrollo de software con una 
                visión integral, técnica y enfocada en la resolución de problemas.
              </p>
            </div>
          </div>

          <div className="highlightsGrid">
            {highlights.map((item, index) => (
              <div key={index} className="highlightCard">
                <div className="highlightIcon">{item.icon}</div>
                <h4 className="highlightTitle">{item.title}</h4>
                <p className="highlightDescription">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="philosophySection">
          <h3 className="philosophyTitle">Filosofía de Trabajo</h3>
          <div className="philosophyGrid">
            <div className="philosophyItem">
              <h4 className="philosophyLabel">Innovación</h4>
              <p>
                Creo en la tecnología como un medio para transformar procesos y resolver necesidades reales. En cada proyecto busco aportar soluciones creativas y funcionales que marquen diferencia, aplicando nuevas tecnologías y buenas prácticas de desarrollo.
              </p>
            </div>
            <div className="philosophyItem">
              <h4 className="philosophyLabel">Calidad</h4>
              <p>
                La calidad es más que un resultado, es parte del proceso. Me enfoco en entregar soluciones que no solo funcionen, sino que brinden una excelente experiencia de usuario, estén bien estructuradas y cumplan con los objetivos del cliente o del negocio.
              </p>
            </div>
            <div className="philosophyItem">
              <h4 className="philosophyLabel">Colaboración</h4>
              <p>
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
