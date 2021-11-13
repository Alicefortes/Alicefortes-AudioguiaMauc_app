import axios from 'axios';

const apiUrl = "https://mauc-dashboard.herokuapp.com/api/"

export async function fetchGuides(){
    return axios.get(apiUrl+"guides/").then(resp => resp.data)
}

