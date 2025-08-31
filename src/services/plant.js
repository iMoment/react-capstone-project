import apiService from "./apiService";

export const getPlants = () => apiService('GET', '/plants');

export const getPlantById = ({ id }) => apiService('GET', `/plants/${id}`);