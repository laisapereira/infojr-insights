import axios from 'axios';

export const Api = axios.create({baseURL: 'https://api-infoinsights.herokuapp.com/api/insights&page=1'});