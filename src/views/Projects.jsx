import { ExternalLink, Github, Eye } from "lucide-react";
import projectsData from "../script/projectsData";
import "../styles/projects.css"; // Assuming you have a CSS file for styling
import Header from "../complements/Header"; // Assuming you have a Header component
import Footer from "../complements/Footer";

const Projects = () => {
  return (
    <section className="projects">
      <Header/>
      <div className="container">
        <div className="header">
          <h2 className="title">
            Proyectos <span className="titleAccent">Destacados</span>
          </h2>
          <div className="divider"></div>
          <p className="description">
            Una selección de mis trabajos más representativos y soluciones innovadoras
          </p>
        </div>

        <div className="projectsGrid">
          {projectsData.map((project, index) => (
            <div key={index} className="projectCard">
              <div className="projectImage">
                <img src={project.image || "/placeholder.svg"} alt={project.name} />
                <div className="imageOverlay">
                  <div className="overlayButtons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlayButton"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlayButton"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="projectContent">
                <h3 className="projectName">{project.name}</h3>
                <p className="projectDescription">{project.description}</p>

                <div className="technologiesSection">
                  <h4 className="technologiesTitle">Tecnologías</h4>
                  <div className="technologiesList">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="technologyTag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projectButtons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectButton codeButton"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectButton demoButton"
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

        <div className="githubSection">
          <a
            href="https://github.com/JulioRoncallo"
            target="_blank"
            rel="noopener noreferrer"
            className="githubButton"
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
