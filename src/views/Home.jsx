import styles from '../styles/home.module.css'
import { Link } from "react-router-dom"
import Header from "../complements/Header"
import DownloadCV from "../complements/DownloadCV"
import Footer from "../complements/Footer"
import Stacks from "../complements/Stacks"



const Home = () => {
    return (
        <>
            <Header/>
            <section className={styles["section-nombre"]}>
                <h1 className={styles["h1-nombre"]}>Julio Alfredo</h1>
                <h1 className={styles["h1-apellido"]}>Roncallo Polo</h1>
            </section>
            <section className={styles["section-perfil"]}>
                <h1>Desarrollador&nbsp;
                    <span>
                        <span>Backend</span>
                        <span>Frontend</span>
                        <span>FullStack</span>
                    </span>
                </h1>
            </section>
            <section className={styles["section-mensaje"]}>
                <p>Transformo ideas en experiencias digitales excepcionales. <br/>
                Especializado en desarrollo Frontend y Backend con  <br/>
                enfoque en soluciones innovadoras y experiencia de  <br/>
                usuario impecable</p>
            </section>
            <section className={styles["section-botones"]}>
                <Link
                    to="/projects"
                    className={styles["link-botones"]}>Ver Proyectos</Link>
                <Link
                    to="/certificates"
                    className={styles["link-botones"]}>Certificados</Link>
                <Link
                    to="/contact"
                    className={styles["link-botones"]}>Contactame</Link>
            </section>
            <Stacks/>
            <DownloadCV />
            <Footer />
        </>
    )
}

export default Home
