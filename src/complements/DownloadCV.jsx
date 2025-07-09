import { Download, Eye } from "lucide-react";
import styles from "../styles/downloadcv.module.css";

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
        <section className={styles.downloadCV}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Descarga mi <span className={styles.titleAccent}>CV</span>
                </h2>
                <p className={styles.description}>
                    Conoce más sobre mi experiencia y habilidades en detalle.
                </p>

                <div className={styles['button-group']}>
                    <a
                        href="/JulioRoncalloPolo-DevFullstack.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        <Eye size={20} />
                        Ver CV en línea
                    </a>

                    <button onClick={handleDownload} className={styles.downloadButton}>
                        <Download size={20} />
                        Descargar CV Español
                    </button>
                </div>
            </div>
        </section>
    );
}
