import apiService from "./apiService"

export const getCart = () => apiService('GET', "/cart")

export const addPlantToCart = ({ plantId, quantity, potColor }) => apiService('POST', `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor
});