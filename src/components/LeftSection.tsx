import { useState } from "react"
import dateFormatter from "../../utils/dateFormatter"
import isToday from "../../utils/isToday"
import GPSIcon from "./icon components/GPSIcon"
import LocationIcon from "./icon components/LocationIcon"
import WeatherImage from "./WeatherImage"
import LocationSearch from "./LocationSearch"
import smallFontTemp from "../../utils/smallFontTemp"
import getUserLocation from "../../utils/getUserLocation"

interface propsType {
    data: any,
    degreeUnit: "C" | "F",
    location: any,
    changeLocation: (location: string) => void
}

function LeftSection({ data, degreeUnit, location, changeLocation }: propsType) {
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleChooseLocation = (newLoc: string) => {
        setOpenDrawer(false)
        changeLocation(newLoc)
    }

    const handleChooseCurrentLocation = async () => {
        const userLocation: any = await getUserLocation()
        if (userLocation) {
            changeLocation(`${userLocation.latitude},${userLocation.longitude}`)
        } else {
            alert("Couldn't get your current location")
        }
    }

    const tempDegree = degreeUnit == "C" ? data.temp_c : data.temp_f
    return (
        <div className="bg-[#1E213A] h-screen w-full overflow-hidden md:sticky top-0">
            {openDrawer && <LocationSearch onClose={() => setOpenDrawer(false)} changeLocation={handleChooseLocation} />}

            <div className="flex justify-between px-2 pt-2 pb-10">
                <button className="p-2 shadow lg" onClick={() => setOpenDrawer(true)}>Search for places</button>
                {"geolocation" in navigator &&
                    <button className="rounded-full aspect-square p-2 shadow-lg" onClick={handleChooseCurrentLocation}>
                        <GPSIcon fill="#e7e7eb" />
                    </button>
                }
            </div>

            <WeatherImage condCode={data.condition.code} condText="cloudy" />

            <div className="flex items-baseline w-full justify-center py-10">
                <p className={`${smallFontTemp(tempDegree) ? "text-8xl" : "text-9xl"} font-medium`}>{tempDegree}</p>
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

            <div className="flex items-center justify-center whitespace-normal text-lg w-full mx-auto opacity-50">
                <LocationIcon />
                <p className="max-w-[70%]">{location.name}, {location.region}</p>
            </div>

        </div>
    )
}

export default LeftSection