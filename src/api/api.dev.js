import * as apiData from './api.data';

const api = {
  searchCustomers: (searchString) => console.log('searching') || delay(500).then(() => apiData.searchCustomers(searchString))
};

export default api;

/**
 * Simulates a delay from the server for dev api calls
 * @param ms {number} time delay in milliseconds
 * @returns {Promise<any>}
 */
function delay(ms = 1500) {
  return new Promise(resolve => setTimeout(resolve, ms))
}