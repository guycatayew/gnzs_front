import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
}
const path = 'http://127.0.0.1:8000/'

export const setValueLeads = async ({commit}, payload) => {
    await axios.post(path + 'api/post/lead', payload, config)
        .then(response => {
            response.data.data._embedded.leads.forEach((value) => {
                console.log(value)
                commit("setLeads", value.id);
            })
        })
        .catch(error => {
            console.log('create error ');
            console.log(error)
            return false
        });
}

export const setValueContacts = async ({commit}, payload) => {
    await axios.post(path + 'api/post/contact', payload, config)
        .then(response => {
            response.data.data._embedded.contacts.forEach((value) => {
                console.log(value)
                commit("setContacts", value.id);
            })
        })
        .catch(error => {
            console.log('create error ');
            console.log(error)
            return false
        });
}

export const setValueCompanies = async ({commit}, payload) => {
    await axios.post(path + 'api/post/company', payload, config)
        .then(response => {
            response.data.data._embedded.companies.forEach((value) => {
                console.log(value)
                commit("setCompanies", value.id);
            })
        })
        .catch(error => {
            console.log('create error ');
            console.log(error)
            return false
        });
}