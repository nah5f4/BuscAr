// import axios from 'axios';

// // A URL base da sua API backend
// // Quando o backend estiver rodando, será algo como http://localhost:8000
// const apiClient = axios.create({
//   baseURL: 'http://localhost:8000/api/v1', // Exemplo de URL base
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Função para chamar o endpoint de registro
// export const registerUser = (userData) => {
//   // A URL final será http://localhost:8000/api/v1/auth/register
//   return apiClient.post('/auth/register', userData);
// };

// // Função para chamar o endpoint de login
// export const loginUser = (credentials) => {
//   return apiClient.post('/auth/login', credentials);
// };