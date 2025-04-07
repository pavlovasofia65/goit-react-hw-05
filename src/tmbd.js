import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODc1MDE5NmU2Y2UxMjg1MGYwNzQ5ZmNjNWFmNTRlMiIsIm5iZiI6MTc0MzY3NTk2OC40Nywic3ViIjoiNjdlZTYyNDBjZjA2MTkwY2JhZTE5ZGZjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NXJCybDtVAmvJD_mj1Jd0uL03yYGdhvQUcd5OSLaSNk';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const fetchFilms = async (search) => {
    try {
        const response = await axios.get('search/movie', {
            params: {
                query: search
            }
        })
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const fetchFilm = async (id) => {
    try {
        const response = await axios.get(`movie/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCredits = async (id) => {
    try {
        const response = await axios.get(`movie/${id}/credits`)
        return response.data.cast;
    } catch (error) {
        console.log(error);
    }
}

export const fetchReviews = async (id) => {
    try {
        const response = await axios.get(`movie/${id}/reviews`)
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export const fetchTrending = async () => {
    try {
        const response = await axios.get('trending/movie/day?language=en-US')
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}