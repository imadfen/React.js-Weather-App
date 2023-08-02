import { useState, useEffect } from "react"
import XIcon from "./icon components/XIcon"
import SearchIcon from "./icon components/SearchIcon"

function LocationSearch({ onClose }: { onClose: () => void }) {
    const [opened, setOpened] = useState(false)
    const [searchVal, setSearchVal] = useState("")

    useEffect(() => {
        setOpened(true)
    }, [])

    const handleChangeSearchVal = (e: any) => {
        setSearchVal(e.target.value)
    }

    return (
        <div className={`absolute top-0 left-0 w-full h-screen bg-[#1E213A] z-20 py-3 px-5 drawer ${opened && "open"}`}>
            <div onClick={onClose} className="w-fit p-2 ml-auto">
                <XIcon />
            </div>

            <form className="flex gap-3">
                <div className="border border-white flex items-center">
                    <div className=" w-[48px] flex place-content-center">
                        <SearchIcon fill="#616475" />
                    </div>
                    <input type="text" value={searchVal} placeholder="search location" className="outline-none bg-transparent h-[48px]" onChange={handleChangeSearchVal} />
                </div>
                <button className="px-2 bg-[#3c47e9] font-semibold">Search</button>
            </form>
        </div>
    )
}

export default LocationSearch