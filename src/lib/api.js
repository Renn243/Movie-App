import axios from 'axios'

const apiKey = 'f4c938d035eaeca6992ca38d1da262a8'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

export default apiAxios