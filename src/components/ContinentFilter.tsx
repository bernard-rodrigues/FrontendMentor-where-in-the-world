import { colors } from "../utils/colors";

const continents = [
    'Worldwide', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'
]

interface ContinentFilterBarProps{
    currentContinent: string,
    filterFunction: (term: string) => void
}

export function ContinentFilter({ currentContinent, filterFunction }: ContinentFilterBarProps){
    return(
        <select
            className="py-[15px] rounded-md ml-[1.125rem] lg:ml-0 pl-5 w-[12.5rem] mb-8 font-[600]"
            style={{backgroundColor: colors.darkBlueDark}}
            value={currentContinent}
            onChange={(event) => filterFunction(event.target.value)}
        >
            {continents.map(continent => (
                <option className="font-[600]" key={continent} value={continent}>{continent}</option>
            ))}
        </select>
    )
}