import { Heart, Code, Coffee } from "lucide-react";
import styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
        <div className={styles["container"]}>
            <div className={styles["content"]}>
            <div className={styles["madeWith"]}>
                <span>Hecho con</span>
                <Heart className={`w-4 h-4 ${styles.heartIcon}`} />
                <Code className={`w-4 h-4 ${styles.codeIcon}`} />
                <span>y mucho</span>
                <Coffee className={`w-4 h-4 ${styles.coffeeIcon}`} />
            </div>

            <p className={styles["copyright"]}>
                © 2024 Julio Alfredo Roncallo Polo | Todos los derechos reservados.
            </p>

            <div className={styles["info"]}>
                <span>Desarrollador Fullstack</span>
                <span className={styles["separator"]}>•</span>
                <span>Bogotá, Colombia</span>
                <span className={styles["separator"]}>•</span>
                <span>Disponible para proyectos</span>
            </div>

            <div className={styles["tech"]}>
                <p>Construido con React, Vite y CSS </p>
            </div>
            </div>
        </div>
        </footer>
    );
}
