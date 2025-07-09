
import styles from '../styles/certificates.module.css'
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
                <main className={styles["certificates-main"]}>
                <Header/>
                <section className={styles["section-titulo"]}>
                    <h2 className={styles.title}>
                    Certificados <span className={styles.titleAccent}>Académicos</span>
                    </h2>
                    <div className={styles.divider }/>
                    <p className={styles["cert-description"]}>
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
