/**
 * Conexão com api, vou usar na atividade 2 da disciplina MOBILE 
 * do Professor Luiz Paulo
 */
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});


export default api;
