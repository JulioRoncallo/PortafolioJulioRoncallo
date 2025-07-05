import { Download, Eye } from "lucide-react";
import "../styles/downloadcv.css";

export default function DownloadCV() {
    const handleDownload = () => {
        const fileUrl = "/JulioRoncalloPolo-DevFullstack.pdf";

        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "JulioRoncalloPolo-DevFullstack.pdf");
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error("Error al descargar el archivo:", error);
            });
    };

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
                        href="/JulioRoncalloPolo-DevFullstack.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="downloadButton"
                    >
                        <Eye size={20} />
                        Ver CV en línea
                    </a>

                    <button onClick={handleDownload} className="downloadButton">
                        <Download size={20} />
                        Descargar CV Español
                    </button>
                </div>
            </div>
        </section>
    );
}
