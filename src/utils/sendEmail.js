import emailjs from "@emailjs/browser";

export const sendEmail = async (formRef, buttonRef, setIsSubmitted) => {
  if (buttonRef.current) buttonRef.current.value = "Enviando...";

  try {
    await emailjs.sendForm(
      'default_service',         // ID del servicio
      'template_11xot7a',        // ID de tu plantilla
      formRef.current,           // Referencia al formulario
      'GiVc4IgS7ImeB0BTZ'        // Tu public key (User ID)
    );

    if (buttonRef.current) buttonRef.current.value = "Enviar Mensaje";
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      formRef.current.reset();
    }, 3000);

  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al enviar el mensaje.");
    if (buttonRef.current) buttonRef.current.value = "Enviar Mensaje";
  }
};
