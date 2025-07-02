
import { Calendar, MapPin, Award } from "lucide-react";
import { experienceData } from "../script/experienceData";
import Header from "../complements/Header";
import  "../styles/experience.css";
import Footer from "../complements/Footer";

const Experience = () => {
  return (
    <section className="experience">
      <Header/>
      <div className="container">
        <div className="header">
          <h2 className="title">
            Experiencia <span className="titleAccent">Profesional</span>
          </h2>
          <div className="divider"></div>
          <p className="description">
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>

        <div className="timeline">
          <div className="timelineLine"></div>

          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`timelineItem ${index % 2 === 1 ? "timelineItemReverse" : ""}`}
            >
              <div className="timelineDot"></div>

              <div
                className={`timelineContent ${index % 2 === 1 ? "timelineContentReverse" : ""}`}

              >
                <div className="experienceCard">
                  <div className="periodContainer">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="period">{experience.period}</span>
                  </div>

                  <h3 className="position">{experience.position}</h3>

                  <div className="companyContainer">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="company">{experience.company}</span>
                  </div>

                  <p className="description">{experience.description}</p>

                  <div className="achievementsSection">
                    <h4 className="achievementsTitle">
                      <Award className="w-4 h-4" />
                      Logros Principales
                    </h4>
                    <ul className="achievementsList">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievementItem">
                          <span className="achievementBullet">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologiesSection">
                    <h4>Tecnologías Utilizadas</h4>
                    <div className="technologiesList">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="technologyTag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Experience;
