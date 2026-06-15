import axios from 'axios';

// Configuration for EmailJS (Can be set via environment variables or edited here directly)
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_vindhya', // Replace with your service ID
  TEMPLATE_ID_HOSPITAL: import.meta.env.VITE_EMAILJS_HOSPITAL_TEMPLATE || 'template_hospital_alert', // Hospital alert template
  TEMPLATE_ID_PATIENT: import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE || 'template_patient_confirm', // Patient confirmation template
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY', // EmailJS Public User Key
  HOSPITAL_EMAIL: 'info@vindhyahealthcare.com', // Target email for hospital alerts
  HOSPITAL_WHATSAPP: '919346862148' // Target WhatsApp number for alerts (e.g., country code + number)
};

export const notificationService = {
  
  // 1. Send Email Alert via EmailJS REST API
  sendEmailNotifications: async (appointmentData) => {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Prepare parameters for Hospital alert email
    const hospitalParams = {
      to_email: EMAILJS_CONFIG.HOSPITAL_EMAIL,
      patient_name: appointmentData.name,
      patient_phone: appointmentData.phone,
      patient_email: appointmentData.email,
      department: appointmentData.department,
      doctor: appointmentData.doctor,
      preferred_date: appointmentData.date,
      preferred_time: appointmentData.time,
      additional_message: appointmentData.message || 'No additional notes provided.',
      submission_timestamp: timestamp
    };

    // Prepare parameters for Patient confirmation email
    const patientParams = {
      to_name: appointmentData.name,
      to_email: appointmentData.email,
      department: appointmentData.department,
      doctor: appointmentData.doctor,
      preferred_date: appointmentData.date,
      preferred_time: appointmentData.time,
    };

    console.log('Sending emails through EmailJS...');

    // If default placeholder public key is active, we bypass physical REST requests to prevent unnecessary API failure screens
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
      console.warn('EmailJS Public Key is at default placeholder. Simulating successful email deliveries in console.');
      console.log('Hospital Alert Payload:', hospitalParams);
      console.log('Patient Confirmation Payload:', patientParams);
      // Return a simulated success to proceed smoothly
      return { success: true, simulated: true };
    }

    try {
      // 1.1 Trigger Email to Hospital
      const resHospital = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: EMAILJS_CONFIG.SERVICE_ID,
        template_id: EMAILJS_CONFIG.TEMPLATE_ID_HOSPITAL,
        user_id: EMAILJS_CONFIG.PUBLIC_KEY,
        template_params: hospitalParams
      });

      // 1.2 Trigger Confirmation Email to Patient
      const resPatient = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: EMAILJS_CONFIG.SERVICE_ID,
        template_id: EMAILJS_CONFIG.TEMPLATE_ID_PATIENT,
        user_id: EMAILJS_CONFIG.PUBLIC_KEY,
        template_params: patientParams
      });

      return {
        success: true,
        hospitalResponse: resHospital.data,
        patientResponse: resPatient.data
      };
    } catch (error) {
      console.error('EmailJS request failed:', error.response?.data || error.message);
      // Throw error to be caught by component for warning overlays, but can fall back if needed
      throw new Error(error.response?.data || 'Failed to dispatch emails via EmailJS API.');
    }
  },

  // 2. Generate WhatsApp Click-to-Chat URL for Hospital Alerts
  generateWhatsAppUrl: (appointmentData) => {
    const message = `New Appointment Request

Patient Name: ${appointmentData.name}
Phone: ${appointmentData.phone}
Department: ${appointmentData.department}
Doctor: ${appointmentData.doctor}
Date: ${appointmentData.date}
Time: ${appointmentData.time}

Please contact the patient for confirmation.`;

    // Encode text payload for browser navigation
    const encodedText = encodeURIComponent(message);
    
    // Construct click-to-chat URL: https://wa.me/number?text=message
    return `https://wa.me/${EMAILJS_CONFIG.HOSPITAL_WHATSAPP}?text=${encodedText}`;
  }
};
