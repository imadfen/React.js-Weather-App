import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import LeftSection from "./components/LeftSection"
import fetchApi from "./utils/fetchApi";
import RightSection from "./components/RightSection";


function App() {
    const degreeUnit = useState<"C" | "F">("C")
    const weatherQuery = useQuery(["weather"], () => fetchApi("meftah"))

    if (weatherQuery.isLoading) {
        return <div>Loading...</div>
    }

    if (weatherQuery.error || !weatherQuery.data) {
        return <div>Error</div>
    }

    const weatherData = weatherQuery.data.data
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <LeftSection data={weatherData.current} degreeUnit={degreeUnit[0]} location={weatherData.location} />
            <RightSection data={weatherData} degreeUnit={degreeUnit}/>
        </div>
    )
}

export default App
