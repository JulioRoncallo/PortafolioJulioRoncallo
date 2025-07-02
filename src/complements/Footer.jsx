import { Heart, Code, Coffee } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="content">
            <div className="madeWith">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 heartIcon" />
                <Code className="w-4 h-4 codeIcon" />
                <span>y mucho</span>
                <Coffee className="w-4 h-4 coffeeIcon" />
            </div>

            <p className="copyright">
                © 2024 Julio Alfredo Roncallo Polo | Todos los derechos reservados.
            </p>

            <div className="info">
                <span>Desarrollador Fullstack</span>
                <span className="separator">•</span>
                <span>Bogotá, Colombia</span>
                <span className="separator">•</span>
                <span>Disponible para proyectos</span>
            </div>

            <div className="tech">
                <p>Construido con React, Vite y CSS </p>
            </div>
            </div>
        </div>
        </footer>
    );
}
