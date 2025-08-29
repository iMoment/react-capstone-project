import apiService from "./apiService";

export const getPlants = () => apiService('GET', '/plants');