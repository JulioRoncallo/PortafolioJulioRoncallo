
import "../styles/stack.css";
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
        <section className="stack-section">
        <h2 className="stack-title">- Tech Stack -</h2>
        <div className="carousel">
            <div className="carousel-track">
            {techStack.concat(techStack).map((tech, i) => (
                <div className="tech-card" key={i}>
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Stacks ;
