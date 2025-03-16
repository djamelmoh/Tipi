// Importation de la bibliothèque EmailJS (à adapter selon votre configuration)
import emailjs from '@emailjs/browser';

// Fonction pour envoyer un email de confirmation
function sendConfirmationEmail(formData) {
  // Formatage de la date pour l'affichage
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = formData.date.toLocaleDateString('fr-FR', options);
  
  // Préparation des paramètres pour EmailJS
  const templateParams = {
    to_name: `${formData.firstName} ${formData.lastName}`,
    to_email: formData.email,
    from_name: "TERRA Expertise",
    from_email: "terra-expertise@outlook.fr",
    reply_to: "terra-expertise@outlook.fr",
    appointment_date: formattedDate,
    appointment_time: formData.time,
    message: formData.message,
    phone: formData.phone
  };
  
  // Envoi de l'email via EmailJS
  return emailjs.send("service_mail", "confirmation_rdv", templateParams);
}