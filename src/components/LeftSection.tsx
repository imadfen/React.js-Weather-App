import { useState } from "react"
import dateFormatter from "../utils/dateFormatter"
import isToday from "../utils/isToday"
import GPSIcon from "./icon components/GPSIcon"
import LocationIcon from "./icon components/LocationIcon"
import WeatherImage from "./WeatherImage"
import LocationSearch from "./LocationSearch"

interface propsType {
    data: any,
    degreeUnit: "C" | "F",
    location: any
}

function LeftSection({ data, degreeUnit, location }: propsType) {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div className="bg-[#1E213A] h-screen w-full overflow-hidden sticky top-0">
            {openDrawer && <LocationSearch onClose={()=>setOpenDrawer(false)} />}

            <div className="flex justify-between px-2 pt-2 pb-10">
                <button className="p-2 shadow lg" onClick={() => setOpenDrawer(true)}>Search for places</button>
                <button className="rounded-full aspect-square p-2 shadow-lg">
                    <GPSIcon fill="#e7e7eb" className="cursor-pointer" />
                </button>
            </div>

            <WeatherImage condCode={data.condition.code} condText="cloudy" />

            <div className="flex items-baseline w-full justify-center py-10">
                <p className="text-9xl font-medium">{degreeUnit == "C" ? data.temp_c : data.temp_f}</p>
                <p className="text-5xl font-medium">°{degreeUnit}</p>
            </div>

            <p className="text-4xl font-semibold text-center">{data.condition.text}</p>

            <div className="flex w-1/2 justify-center gap-3 mx-auto py-6 opacity-50">
                {isToday(data.last_updated) &&
                    <>
                        <p>Today</p>
                        <p>•</p>
                    </>
                }
                <p>{dateFormatter(data.last_updated)}</p>
            </div>

            <div className="flex items-center text-lg w-fit mx-auto opacity-50">
                <LocationIcon />
                <p>{location.name}, {location.region}</p>
            </div>

        </div>
    )
}

export default LeftSection