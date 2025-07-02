import { Download } from "lucide-react";
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

            <a
            href="/public/JulioRoncalloPolo - Desarrollador Fullstack.pdf"
            download
            className="downloadButton"
            >
            <Download size={20} />
            Descargar CV Español
            </a>
        </div>
        </section>
    );
}
