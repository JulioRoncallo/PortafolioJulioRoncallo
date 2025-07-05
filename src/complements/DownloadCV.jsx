import { Download, Eye } from "lucide-react";
import "../styles/downloadcv.css";

export default function DownloadCV() {
    return (
        <section className="downloadCV">
        <div className="container">
            <h2 className="title">
            Descarga mi <span className="titleAccent">CV</span>
            </h2>
            <p className="description">
            Conoce más sobre mi experiencia y habilidades en detalle.
            </p>

            <div className="button-group">
            <a
                href="/JulioRoncalloPolo%20-%20Desarrollador%20Fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="downloadButton"
            >
                <Eye size={20} />
                Ver CV en línea
            </a>

            <a
                href="/JulioRoncalloPolo-DevFullstack.pdf"
                download="JulioRoncalloPolo-DevFullstack.pdf"
                className="downloadButton"
            >
                <Download size={20} />
                Descargar CV Español
            </a>
            </div>
        </div>
        </section>
    );
}
