import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const getPortalData = (token) => axios.get(`${API_URL}/patient-portal/${token}`);
export const payAppointment = (token, appointmentId) => axios.post(`${API_URL}/patient-portal/${token}/pay/${appointmentId}`);