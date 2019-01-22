import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')? 
                '/user' : 'http://localhost:3003/user';


function add(user) {
return axios.post(`${BASE_URL}/add`, user)
        .then(res => res.data);
}
                
function getById(id) { 
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

function update(id,user) {
    return axios.put(`${BASE_URL}/${id}`,user)
        .then(res => {
            return res.data
        });
}

export default {
    getById,
    update,
    add
}