import axios from "axios";

const apiUrl = import.meta.env.VITE_METEO_API_URL;

const axiosInstance = axios.create();
export default (location: string) => axiosInstance.get(apiUrl + location)