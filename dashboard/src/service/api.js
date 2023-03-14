import axios from 'axios';
const URL = 'http://localhost:8000';

export const getRepos = async () => {
    try {
        return await axios.get(`${URL}/show`);
    } catch(error) {
        console.log("Error while calling Get Repo API", error);
    }
}

export const getRepo = async (id) => {
    try {
        return await axios.get(`${URL}/show/${id}`);
    } catch(error) {
        console.log("Error while calling Get Repo API", error);
    }
}

export const addRepo = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch(error) {
        console.log("Error while calling Add Repo API", error);
    }
    
}

export const deleteRepo = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}

export const editRepo = async (name, data) => {
    return await axios.put(`${URL}/${name}`, data)
}

