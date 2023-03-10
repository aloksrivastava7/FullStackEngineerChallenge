import axios from 'axios';
const URL = 'http://localhost:8000';

export const getRepos = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/${id}`);
}

export const addRepo = async (user) => {
    return await axios.post(`${URL}/add`, user);
}

export const deleteRepo = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}

export const editRepo = async (id, user) => {
    return await axios.put(`${URL}/${id}`, user)
}
