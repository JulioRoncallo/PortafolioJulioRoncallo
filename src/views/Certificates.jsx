
import '../styles/certificates.css'
import { useEffect } from "react";
import Footer from "../complements/Footer";
import Header from "../complements/Header";
import Certificados from "../complements/Certificados";

const Certificates = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section>
                <main className="certificates-main">
                <Header/>
                <section className="section-titulo">
                    <h2 className="title">
                    Certificados <span className="titleAccent">Académicos</span>
                    </h2>
                    <div className="divider" />
                    <p className="cert-description">
                    A continuación encontrarás los certificados que respaldan mi formación profesional.  
                    Me encuentro en constante actualización para mantenerme al día con las nuevas tecnologías  
                    del desarrollo web. Si deseas visualizar los certificados con información completa,  
                    no dudes en contactarme.
                    </p>
                </section>
                <Certificados />
                </main>
            </section>
            <Footer/>
        </>
    );
};

export default Certificates;
