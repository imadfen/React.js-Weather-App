import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import LeftSection from "./components/LeftSection"
import fetchApi from "./utils/fetchApi";
import RightSection from "./components/RightSection";
import getUserLocation from "./utils/getUserLocation";
import { Bars } from "react-loader-spinner";

function App() {
    const degreeUnit = useState<"C" | "F">("C")
    const { data, isLoading, error, refetch } = useQuery(["weather"], async () => {
        try {
            let cacheValue = localStorage.getItem("wheather-app-location")
            if (cacheValue) {
                return fetchApi(cacheValue)
            } else {
                const userPosition: any = await getUserLocation()
                return fetchApi(cacheValue, userPosition)
            }
        } catch (error) {
            throw new Error("Error fetching data from the API");
        }
    })

    const changeLocation = (newLoc: string) => {
        localStorage.setItem("wheather-app-location", newLoc)
        refetch()
    }


    if (isLoading) return (
        <div className="w-full h-screen flex justify-center items-center">
            <Bars width="50" color="#3C47E9" />
        </div>
    )

    if (error || !data) return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
            <p className="opacity-50">There was an error fetching data</p>
            <button className="py-2 px-4 bg-[#3c47e9] font-semibold cursor-pointer searchButton" onClick={() => refetch()}>Retry</button>
        </div>
    )

    const weatherData = data.data
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <LeftSection data={weatherData.current} degreeUnit={degreeUnit[0]} location={weatherData.location} changeLocation={changeLocation} />
            <RightSection data={weatherData} degreeUnit={degreeUnit} />
        </div>
    )
}

export default App
