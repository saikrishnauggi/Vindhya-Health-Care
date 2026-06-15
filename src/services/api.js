import axios from 'axios';

// Creating a standard Axios instance (pointing to a dummy local host, which we will override with mock logic)
const apiClient = axios.create({
  baseURL: 'https://api.vindhyahealthcare.local/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Helper function to simulate a network delay
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // 1. Submit Appointment Booking Form
  bookAppointment: async (appointmentData) => {
    console.log('Sending appointment data to server...', appointmentData);
    await wait(1500); // Simulate network latency
    
    // Simulate validation check
    if (!appointmentData.name || !appointmentData.phone || !appointmentData.email) {
      throw new Error('Please fill in all required fields.');
    }
    
    // Return mock success response
    return {
      status: 200,
      success: true,
      message: 'Appointment booked successfully!',
      data: {
        appointmentId: `VHC-APT-${Math.floor(100000 + Math.random() * 900000)}`,
        ...appointmentData,
        bookedAt: new Date().toISOString()
      }
    };
  },

  // 2. Submit Contact Inquiry Form
  submitContactInquiry: async (inquiryData) => {
    console.log('Sending contact inquiry to server...', inquiryData);
    await wait(1200); // Simulate network latency

    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) {
      throw new Error('Please complete the contact form fields.');
    }

    return {
      status: 200,
      success: true,
      message: 'Inquiry submitted successfully! Our help desk will contact you shortly.',
      data: {
        ticketId: `VHC-TKT-${Math.floor(10000 + Math.random() * 90000)}`,
        submittedAt: new Date().toISOString()
      }
    };
  },

  // 3. Submit Career Job Application
  applyForJob: async (applicationData) => {
    console.log('Sending job application and resume to server...', applicationData);
    await wait(1800); // Simulate network latency

    if (!applicationData.jobId || !applicationData.fullName || !applicationData.email) {
      throw new Error('Missing required fields for application.');
    }

    return {
      status: 200,
      success: true,
      message: 'Application submitted successfully! Our HR team will reach out after review.',
      data: {
        applicationId: `VHC-JOB-${Math.floor(100000 + Math.random() * 900000)}`,
        submittedAt: new Date().toISOString()
      }
    };
  }
};
