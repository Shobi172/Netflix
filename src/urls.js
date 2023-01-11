import { API_KEY } from "./constants/constants"
export const Trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const TopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const Comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const Horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Documantaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`

