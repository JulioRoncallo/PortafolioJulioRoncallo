"use client"

import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import '../styles/contact.css'
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
    <section className="contact">
      <Header />
      <div className="container">
        <div className="header">
          <h2 className="title">
            Hablemos de tu <span className="titleAccent">Proyecto</span>
          </h2>
          <div className="divider"></div>
          <p className="description">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad o hacer parte de tu empresa.
          </p>
        </div>

        <div className="contactGrid">
          <div className="contactInfo">
            <h3>Información de Contacto</h3>
            <div className="contactMethods">
              <div className="contactMethod">
                <div className="contactIcon"><Mail className="w-6 h-6 text-white" /></div>
                <div className="contactDetails">
                  <h4>Email</h4>
                  <a href="mailto:julioroncallopolo@gmail.com">julioroncallopolo@gmail.com</a>
                </div>
              </div>

              <div className="contactMethod">
                <div className="contactIcon"><Phone className="w-6 h-6 text-white" /></div>
                <div className="contactDetails">
                  <h4>Teléfono</h4>
                  <a href="tel:+573229720435">+57 3229720435</a>
                </div>
              </div>

              <div className="contactMethod">
                <div className="contactIcon"><MapPin className="w-6 h-6 text-white" /></div>
                <div className="contactDetails">
                  <h4>Ubicación</h4>
                  <p>Bogota, Colombia</p>
                </div>
              </div>
            </div>

            <div className="socialSection">
              <h4>Sígueme en</h4>
              <div className="socialLinks">
                <a href="https://www.linkedin.com/in/julio-alfredo-roncallo-polo/" target="_blank" rel="noopener noreferrer" className="socialLink">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/JulioRoncallo" target="_blank" rel="noopener noreferrer" className="socialLink">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="availability">
              <div className="availabilityHeader">
                <div className="statusDot"></div>
                <h4 className="statusDot-h4">Estado Actual</h4>
              </div>
              <p className="availabilityText">Disponible para nuevos proyectos y colaboraciones</p>
            </div>
          </div>

          <div className="contactForm">
            <h3>Envíame un Mensaje</h3>

            <form ref={formRef} onSubmit={handleSubmit} id="form" className="form">
              <div className="formGroup">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="formInput"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="email_id">Correo Electrónico</label>
                <input
                  type="email"
                  name="email_id"
                  id="email_id"
                  required
                  className="formInput"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className="formInput formTextarea"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <input
                type="submit"
                ref={buttonRef}
                id="button"
                value={isSubmitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                className={`submitButton ${isSubmitted ? "submitted" : ""}`}
              />
            </form>

            <div className="responseTime">
              <p>
                <span className="highlight">Tiempo de respuesta:</span> Usualmente respondo en menos de 12 horas
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
