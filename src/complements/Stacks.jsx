
import styles from "../styles/stack.module.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiPostgresql, SiExpress, SiNextdotjs } from "react-icons/si";

const techStack = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress/>},
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git / GitHub", icon: <FaGit /> },
    { name: "Next.js", icon: <SiNextdotjs/> }
];

const Stacks = () => {
    return (
        <section className={styles["stack-section"]}>
            <h2 className={styles["stack-title"]}>- Tech Stack -</h2>
            <div className={styles.carousel}>
                <div className={styles["carousel-track"]}>
                {techStack.concat(techStack).map((tech, i) => (
                    <div className={styles["tech-card"]} key={i}>
                    <div className={styles["tech-icon"]}>{tech.icon}</div>
                    <p className={styles["tech-name"]}>{tech.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Stacks ;
