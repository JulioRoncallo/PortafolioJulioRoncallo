
import styles from "../styles/certificados.module.css";
import { useState } from "react";
import ProgramacionWeb from '../assets/certificados/CursoEspecializacion-ProgramacionWeb_pages-to-jpg-0001.jpg'
import EspeSQL from '../assets/certificados/CursoEspecializacionSQL_pages-to-jpg-0001.jpg'
import DiploDDF from '../assets/certificados/DiplomadoDesarrolloFrontendJulioRoncallo_pages-to-jpg-0001.jpg'
import IngSistemas from '../assets/certificados/DiplomaIngSistemas-Unimag_page-0001.jpg'
import TecSistemas from '../assets/certificados/DiplomaTecnicoSistemasJulioRoncallo_page-0001.jpg'
import GitHub from '../assets/certificados/GitGitHubProfesional-Netzun_page-0001.jpg'
import JSModerno from '../assets/certificados/JulioRoncallo-JavaScript_page-0001.jpg'
import FundProg from '../assets/certificados/Mangus Academy-FundamentosProgramación_page-0001.jpg'
import Bootcamp from '../assets/henry.png'
import devtalles from '../assets/devtalles.png'

const certificados = [
    {
        nombre: "React",
        escuela: "Devtalles",
        fecha: "En curso",
        imagen: devtalles,
    },
    {
        nombre: "Node.js",
        escuela: "Devtalles",
        fecha: "En curso",
        imagen: devtalles,
    },
    {
        nombre: "Bootcamp Fullstack Developer",
        escuela: "Soy Henry",
        fecha: "En curso",
        imagen: Bootcamp,
    },
    {
        nombre: "Ingeniero de Sistemas",
        escuela: "La Universidad Del Magdalena",
        fecha: "Septiembre 2024",
        imagen: IngSistemas,
    },
    {
        nombre: "Especialización en Programación Web",
        escuela: "Netzun - San Ignacio University",
        fecha: "Noviembre 2024",
        imagen: ProgramacionWeb,
    },
    {
        nombre: "Especialización en SQL",
        escuela: "Netzun - San Ignacio University",
        fecha: "Agosto 2024",
        imagen: EspeSQL,
    },
    {
        nombre: "Git y GitHub Profesional",
        escuela: "Netzun - San Ignacio University",
        fecha: "Noviembre 2024",
        imagen: GitHub,
    },
    {
        nombre: "JavaScript Moderno",
        escuela: "Dev/Talles - Fernando Herrera",
        fecha: "Noviembre 2024",
        imagen: JSModerno,
    },
    {
        nombre: "Fundamentos de Programacion",
        escuela: "Mangus Academy S.L.U.",
        fecha: "Septiembre 2023",
        imagen: FundProg,
    },
    {
        nombre: "Diseño y Desarrollo Frontend",
        escuela: "CBN - Corporacion Bolivariana del Norte",
        fecha: "Diciembre 2017",
        imagen: DiploDDF,
    },
    {
        nombre: "Técnico en Sistemas",
        escuela: "CBN - Corporacion Bolivariana del Norte",
        fecha: "Diciembre 2017",
        imagen: TecSistemas,
    },
];

const Certificados = () => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const abrirVisor = (imagen) => setImagenSeleccionada(imagen);
    const cerrarVisor = () => setImagenSeleccionada(null);

    return (

<section className={styles['certificados-principal']}>
    <h2 className={styles['certificados-title']}>Certificados de Estudio</h2>

    <section className={styles['certificados-section']}>
        <div className={styles['certificados-grid']}>
            {certificados.map((cert, index) => (
                <div className={styles['certificados-card']} key={index}>
                    <img
                        src={cert.imagen}
                        alt={cert.nombre}
                        className={styles['certificados-img']}
                        onClick={() => abrirVisor(cert.imagen)}
                    />
                    <div className={styles['certificados-info']}>
                        <p className={styles['certificados-name']}>{cert.nombre}</p>
                        <p className={styles['certificados-meta']}>
                            <strong>Escuela:</strong> {cert.escuela}
                        </p>
                        <p className={styles['certificados-meta']}>
                            <strong>Fecha:</strong> {cert.fecha}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {imagenSeleccionada && (
            <div className={styles['certificados-modal']} onClick={cerrarVisor}>
                <span className={styles.cerrar}>&times;</span>
                <img
                    src={imagenSeleccionada}
                    alt="Certificado ampliado"
                    className={styles['modal-img']}
                />
            </div>
        )}
    </section>

    <div className={styles.MensajeProteccionDatos}>
        <p>
            Por motivos de protección de datos personales, he ocultado información sensible en las imágenes de los certificados mostrados.
            <br />
            Si deseas verificar los documentos completos o necesitas más detalles, no dudes en contactarme directamente. Estaré encantado de compartirlos contigo de forma segura.
        </p>
    </div>
</section>
    );
};

export default Certificados;
