import conditionImageSelecter from "../utils/conditionImageSelecter"
import dateFormatter from "../utils/dateFormatter"

interface propsType {
    forecast: any[],
    degreeUnit: "C" | "F"
}

function ForecastCards({ forecast, degreeUnit }: propsType) {
    return (
        <div className="flex md:justify-around items-center gap-6 sm:gap-5 md:gap-4 mx-auto min-h-[190px] overflow-x-scroll  md:overflow-x-auto">
            {forecast.map((elem: any, i) => {
                if (i == 0) return

                return (
                    <div key={i} className="bg-[#1e213a] min-w-[120px] min-h-[177px] px-4 py-2 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                        <p>{i == 1 ? "Tomorrow" : dateFormatter(elem.date)}</p>
                        <img src={conditionImageSelecter(elem.day.condition.code)} alt={elem.day.condition.text} width={62} />
                        <div className="text-xs md:text-sm font-medium flex justify-between w-full mt-auto">
                            <p>{degreeUnit == "C" ? elem.day.maxtemp_c : elem.day.maxtemp_f}°{degreeUnit}</p>
                            <p className="opacity-50">{degreeUnit == "C" ? elem.day.mintemp_c : elem.day.mintemp_f}°{degreeUnit}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ForecastCards