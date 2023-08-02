import ForecastCards from "./ForecastCards"
import TodayHighlight from "./TodayHighlight"

interface propsType {
    data: any,
    degreeUnit: ["C" | "F", React.Dispatch<React.SetStateAction<"C" | "F">>],
    [key: string]: any
}

function RightSection({ data, degreeUnit }: propsType) {
    return (
        <div className="md:col-start-2 md:col-end-5 py-2 px-10 md:px-24 overflow-y-auto overflow-x-hidden">
            <div className="ml-auto my-4 w-fit">
                <button className="rounded-full w-12 font-bold text-lg aspect-square p-2 m-2 shadow-lg tempUnit" disabled={degreeUnit[0] == "C"} onClick={() => degreeUnit[1]("C")}>°C</button>
                <button className="rounded-full w-12 font-bold text-lg aspect-square p-2 m-2 shadow-lg tempUnit" disabled={degreeUnit[0] == "F"} onClick={() => degreeUnit[1]("F")}>°F</button>
            </div>

            <ForecastCards forecast={data.forecast.forecastday} degreeUnit={degreeUnit[0]} />

            <TodayHighlight data={data.current} />


            <p className="mt-14 mx-auto w-fit">created by <a href="https://github.com/imadfen">imadfen</a> - devChallenges.io</p>

        </div >
    )
}

export default RightSection