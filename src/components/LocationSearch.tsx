import { useState, useEffect } from "react"
import XIcon from "./icon components/XIcon"
import SearchIcon from "./icon components/SearchIcon"
import fetchApi from "../utils/fetchApi"
import RightArrowIcon from "./icon components/RightArrowIcon"

interface propsType {
    onClose: () => void,
    changeLocation: (location: string) => void
}

function LocationSearch({ onClose, changeLocation }: propsType) {
    const [opened, setOpened] = useState(false)
    const [searchVal, setSearchVal] = useState("")
    const [searching, setSearching] = useState(false)
    const [searchResult, setSearchResult] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setOpened(true)

    }, [])

    const handleChangeSearchVal = (e: any) => {
        setSearchVal(e.target.value)
    }

    const handleSearch = (e: any) => {
        e.preventDefault()

        const sanitizedSearchVal = searchVal.replace(/\s+/g, ' ').trim().replace(" ", "%20")

        if (sanitizedSearchVal == "") return

        setSearching(true)
        setError(null)
        setSearchResult(null)

        fetchApi(sanitizedSearchVal)
            .then(response => {
                if (response.status == 200) {
                    setSearchResult(response.data.location)
                    setSearching(false)
                } else if (response.status == 400 && response.data.error.code == 1006) {
                    setError("No matching location found")
                    setSearching(false)
                }
            })
            .catch(err => {
                setError("it seems there is an error, try again later")
                setSearching(false)
            })

    }

    const handleChooseLocation = () => {
        changeLocation(`${searchResult.name} ${searchResult.region} ${searchResult.country}`)
    }

    return (
        <div className={`absolute top-0 left-0 w-full h-screen bg-[#1E213A] z-20 py-3 px-5 drawer ${opened && "open"}`}>
            <div onClick={onClose} className="w-fit p-1 ml-auto cursor-pointer">
                <XIcon />
            </div>

            <form className="flex gap-3 mt-3" onSubmit={handleSearch}>
                <div className="border border-white flex items-center">
                    <label htmlFor="search-input" className=" w-[48px] flex place-content-center">
                        <SearchIcon fill="#616475" />
                    </label>
                    <input type="text" id="search-input" value={searchVal} placeholder="search location" className="outline-none bg-transparent h-[48px] searchInput" onChange={handleChangeSearchVal} disabled={searching} autoComplete="off" />
                </div>
                <input type="submit" className="px-2 bg-[#3c47e9] font-semibold cursor-pointer searchButton" value="Search" disabled={searching} />
            </form>

            <div className="w-full h-auto px-1 my-10 flex flex-col items-center text-center">
                {searchResult &&
                    <div onClick={handleChooseLocation} className="w-full flex items-center gap-1 py-4 px-2 transition-all duration-150 border border-transparent hover:border-white cursor-pointer active:scale-95 location-result">
                        <p className="text-left whitespace-normal max-w-[90%] pointer">{searchResult.name}{searchResult.region != "" && `, ${searchResult.region}`}, {searchResult.country}</p>
                        <RightArrowIcon className="right-arrow opacity-0 ml-auto my-auto " />
                    </div>
                }

                {searching &&
                    <p className="opacity-50">Searching</p>
                }

                {error &&
                    <p className="opacity-50">{error}</p>
                }
            </div>
        </div>
    )
}

export default LocationSearch