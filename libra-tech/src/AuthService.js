// src/services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5164';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/Authorization/login`, {
            Email: email,
            Password: password,
        });
        return response.data; // assuming the response contains the token in response.data.token
    } catch (error) {
        throw error;
    }
};

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/Authorization/register`, {
            Email: email,
            Password: password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
