import * as Progress from '@radix-ui/react-progress';
import DirectionIcon from "./icon components/DirectionIcon"

function TodayHighlight({ data }: any) {
    const windDirDegStyle = { transform: `rotate(${data.wind_degree}deg)` };

    return (
        <div className="mt-14">
            <p className="text-2xl font-bold">Today's Hightlights</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 w-fit mx-auto my-5">
                <div className="w-[328px] h-[204px] bg-[#1e213a] flex flex-col items-center">
                    <p className="font-medium my-4">Wind status</p>
                    <div className="flex font-medium items-baseline">
                        <p className="text-6xl">{data.wind_kph}</p>
                        <p className="text-4xl">kph</p>
                    </div>
                    <div className="mt-auto my-4 flex gap-3 items-center">
                        {data.wind_degree &&
                            <>
                                <div className={`p-3 bg-gray-500 rounded-full`} style={windDirDegStyle}>
                                    <DirectionIcon />
                                </div>
                                <p className="text-sm font-medium">{data.wind_dir}</p>
                            </>
                        }
                    </div>
                </div>

                <div className="w-[328px] h-[204px] bg-[#1e213a] flex flex-col items-center">
                    <p className="font-medium my-4">Humidity</p>
                    <div className="flex font-medium items-baseline">
                        <p className="text-6xl">{data.humidity}</p>
                        <p className="text-4xl">%</p>
                    </div>
                    <div className="mt-auto my-4 flex flex-col gap-1 items-center">
                        <div className='flex justify-between w-full'>
                            <p className="text-xs font-bold">0</p>
                            <p className="text-xs font-bold">50</p>
                            <p className="text-xs font-bold">100</p>
                        </div>
                        <Progress.Root className="ProgressRoot" value={data.humidity}>
                            <Progress.Indicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - data.humidity}%)` }} />
                        </Progress.Root>

                        <p className="text-xs font-bold ml-auto">%</p>
                    </div>
                </div>

                <div className="w-[328px] h-[159px] bg-[#1e213a] flex flex-col items-center">
                    <p className="font-medium my-4">Visibility</p>
                    <div className="flex font-medium items-baseline">
                        <p className="text-6xl">{data.vis_km}</p>
                        <p className="text-4xl">km</p>
                    </div>
                </div>

                <div className="w-[328px] h-[159px] bg-[#1e213a] flex flex-col items-center">
                    <p className="font-medium my-4">Air Pressure</p>
                    <div className="flex font-medium items-baseline">
                        <p className="text-6xl">{data.pressure_mb}</p>
                        <p className="text-4xl">mb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayHighlight