
import styles from "../styles/experience.module.css";
import { Calendar, MapPin, Award } from "lucide-react";
import { experienceData } from "../script/experienceData";
import { Link } from "react-router-dom";
import Header from "../complements/Header";
import Footer from "../complements/Footer";
import Stacks from "../complements/Stacks";


const Experience = () => {
  return (
    <section className={styles.experience}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Experiencia <span className={styles.titleAccent}>Profesional</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 1 ? styles.timelineItemReverse : ''
              }`}
            >
              <div className={styles.timelineDot}></div>

              <div
                className={`${styles.timelineContent} ${
                  index % 2 === 1 ? styles.timelineContentReverse : ''
                }`}
              >
                <div className={styles.experienceCard}>
                  <div className={styles.periodContainer}>
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className={styles.period}>{experience.period}</span>
                  </div>

                  <h3 className={styles.position}>{experience.position}</h3>

                  <div className={styles.companyContainer}>
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className={styles.company}>{experience.company}</span>
                  </div>

                  <p className={styles.description}>{experience.description}</p>

                  <div className={styles.achievementsSection}>
                    <h4 className={styles.achievementsTitle}>
                      <Award className="w-4 h-4" />
                      Logros Principales
                    </h4>
                    <ul className={styles.achievementsList}>
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className={styles.achievementItem}>
                          <span className={styles.achievementBullet}>•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.technologiesSection}>
                    <h4>Tecnologías Utilizadas</h4>
                    <div className={styles.technologiesList}>
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.technologyTag}>
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

      <section className={styles['cert-invite']}>
        <Link to="/certificates">
          Te invito a revisar mis{' '}
          <span className={styles["cert-link"]}>certificaciones</span> y estudios realizados.<br /> 💻
        </Link>
      </section>

      <Stacks />
      <Footer />
    </section>
  );
};


export default Experience;
