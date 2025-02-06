import axios from "axios";

const API_URL = "http://localhost:5000";

export const getCustomers = async () => axios.get(`${API_URL}/customers`);
export const addCustomer = async (customer: any) => axios.post(`${API_URL}/customers`, customer);
export const updateCustomer = async (id: number, customer: any) =>
  axios.put(`${API_URL}/customers/${id}`, customer);
export const deleteCustomer = async (id: number) => axios.delete(`${API_URL}/customers/${id}`);
export const getInteractions = async (customerId: number) =>
  axios.get(`${API_URL}/interactions/${customerId}`);
export const addInteraction = async (interaction: any) =>
  axios.post(`${API_URL}/interactions`, interaction);
