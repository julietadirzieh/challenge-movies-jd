import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com'
const API_KEY = '77630316'

export const getMovies = async (query, page) => {
    try {
        let URL = `${BASE_URL}/?s=${query}&type=movie&page=${page}&apikey=${API_KEY}`;
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        console.log(error?.response?.data?.Error);
        throw error;
    }
};

export const getMovieById = async (IMDbID) => {
    try {
        let URL = `${BASE_URL}/?i=${IMDbID}&apikey=${API_KEY}`
        const { data } = await axios.get(URL)
        return data;
    } catch (error) {
        console.log(error?.response?.data?.Error);
        throw error;
    }
}
