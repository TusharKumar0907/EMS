import axios from 'axios';

// const URL = 'http://localhost:8080/api/employees';
// const URL = process.env.REACT_APP_API_URL;
const URL = import.meta.env.VITE_OPEN_API_KEY;
console.log(URL);


export const addEmployee = (employee) => {
    return axios.post(URL, employee);
}

export const listEmployees = () => {
    return axios.get(URL);
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(URL + '/' + employeeId, employee);
}

export const getEmployee = (employeeId) => {
    return axios.get(URL + '/' + employeeId);
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(URL + '/' + employeeId);
}