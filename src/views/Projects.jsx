import { ExternalLink, Github, Eye } from "lucide-react";
import projectsData from "../script/projectsData";
import styles from "../styles/projects.module.css"; 
import Header from "../complements/Header"; 
import Footer from "../complements/Footer";
import { useEffect } from "react";



const Projects = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <section className={styles.projects}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Proyectos <span className={styles.titleAccent}>Destacados</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Una selección de mis trabajos más representativos y soluciones innovadoras
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image || "/placeholder.svg"} alt={project.name} />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayButtons}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayButton}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologiesSection}>
                  <h4 className={styles.technologiesTitle}>Tecnologías</h4>
                  <div className={styles.technologiesList}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.technologyTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectButtons}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectButton} ${styles.codeButton}`}
                  >
                    <Github size={16} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectButton} ${styles.demoButton}`}
                    >
                      <Eye size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.githubSection}>
          <a
            href="https://github.com/JulioRoncallo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <Github size={20} />
            Ver más en GitHub
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Projects;
