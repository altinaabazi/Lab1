import axios from 'axios';

const API_BASE_URL = 'http://localhost:5164';

export const getStaff = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/GetStafi`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch staff:', error);
        throw error;
    }
};

//put,delete nqfs
