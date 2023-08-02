import axios from "axios";

const apiUrl = import.meta.env.VITE_METEO_API_URL;

const axiosInstance = axios.create();
export default async (location: string | null, userPosition?: { latitude: number, longitude: number } | null) => {
    try {
        if (location) {
            return await axiosInstance.get(apiUrl + location)
        } else {
            location = "london"
            if (userPosition) {
                location = `${userPosition.latitude},${userPosition.longitude}`
            }
            localStorage.setItem("wheather-app-location", location)
            return await axiosInstance.get(apiUrl + location)
        }
    } catch (error) {
        throw new Error("Error fetching data from the API");
    }
}