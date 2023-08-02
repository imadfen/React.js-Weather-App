import CloudsBG from "../assets/Cloud-background.png"
import conditionImageSelecter from "../../utils/conditionImageSelecter"

function WeatherImage({ condCode, condText }: { condCode: number, condText: string }) {
    return (
        <div className="relative min-h-[180px]">
            <img src={CloudsBG} alt="clouds" className="opacity-30 scale-125" />
            <img src={conditionImageSelecter(condCode)} alt={condText} className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}

export default WeatherImage