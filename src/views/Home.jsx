import '../styles/home.css'
import { Link } from "react-router-dom"
import Header from "../complements/Header"
import DownloadCV from "../complements/DownloadCV"
import Footer from "../complements/Footer"
import Stacks from "../complements/Stacks"



const Home = () => {
    return (
        <>
            <Header/>
            <section className="section-nombre">
                <h1 className="h1-nombre">Julio Alfredo</h1>
                <h1 className="h1-apellido">Roncallo Polo</h1>
            </section>
            <section className="section-perfil">
                <h1>Desarrollador&nbsp;
                    <span>
                        <span>Backend</span>
                        <span>Frontend</span>
                        <span>FullStack</span>
                    </span>
                </h1>
            </section>
            <section className="section-mensaje">
                <p>Transformo ideas en experiencias digitales excepcionales. <br/>
                Especializado en desarrollo Frontend y Backend con  <br/>
                enfoque en soluciones innovadoras y experiencia de  <br/>
                usuario impecable</p>
            </section>
            <section className="section-botones">
                <Link
                    to="/projects"
                    className="link-botones">Ver Proyectos</Link>
                <Link
                    to="/certificates"
                    className="link-botones">Certificados</Link>
                <Link
                    to="/contact"
                    className="link-botones">Contactar</Link>
            </section>
            <Stacks/>
            <DownloadCV />
            <Footer />
        </>
    )
}

export default Home
