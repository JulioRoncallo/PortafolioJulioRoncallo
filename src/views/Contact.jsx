"use client"

import styles from '../styles/contact.module.css'
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Header from "../complements/Header"
import Footer from "../complements/Footer"
import { sendEmail } from "../utils/sendEmail"
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)
  const buttonRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail(formRef, buttonRef, setIsSubmitted)
  }

  return (
    <section className={styles.contact}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Hablemos de tu <span className={styles.titleAccent}>Proyecto</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad o hacer parte de tu empresa.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Información de Contacto</h3>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}><Mail className="w-6 h-6 text-white" /></div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <a href="mailto:julioroncallopolo@gmail.com">julioroncallopolo@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}><Phone className="w-6 h-6 text-white" /></div>
                <div className={styles.contactDetails}>
                  <h4>Teléfono</h4>
                  <a href="tel:+573229720435">+57 3229720435</a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}><MapPin className="w-6 h-6 text-white" /></div>
                <div className={styles.contactDetails}>
                  <h4>Ubicación</h4>
                  <p>Bogota, Colombia</p>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4>Sígueme en</h4>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/julio-alfredo-roncallo-polo/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/JulioRoncallo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.availabilityHeader}>
                <div className={styles.statusDot}></div>
                <h4 className={styles["statusDot-h4"]}>Estado Actual</h4>
              </div>
              <p className={styles.availabilityText}>Disponible para nuevos proyectos y colaboraciones</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Envíame un Mensaje</h3>

            <form ref={formRef} onSubmit={handleSubmit} id="form" className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={styles.formInput}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email_id">Correo Electrónico</label>
                <input
                  type="email"
                  name="email_id"
                  id="email_id"
                  required
                  className={styles.formInput}
                  placeholder="tu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <input
                type="submit"
                ref={buttonRef}
                id="button"
                value={isSubmitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                className={`${styles.submitButton} ${isSubmitted ? styles.submitted : ''}`}
              />
            </form>

            <div className={styles.responseTime}>
              <p>
                <span className={styles.highlight}>Tiempo de respuesta:</span> Usualmente respondo en menos de 12 horas
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
