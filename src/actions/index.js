import axios from 'axios';

const URL = 'http://localhost:3004';

export const artistListAll = () => {
    const request = axios.get(`${URL}/artists?limit=6`)
        .then(response => response.data);
    return {
        type: "GET_ARISTS_ALL",
        payload: request
    }
}

export const artistList = (keywords) =>{
    const request = axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}

export const artistDetail = (id) => {
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)
    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}


export const clearArtistDetail = () => {
    return{
        type:'CLEAR_ARTIST_DETAIL',
        payload:null
    }
}