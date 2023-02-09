import { colors } from "../utils/colors";

const continents = [
    'Africa', 'America', 'Asia', 'Europe', 'Oceania'
]

export function ContinentFilter(){
    return(
        <select
            className="py-3 rounded-md pl-5 w-52 mb-8 font-[600]"
            style={{backgroundColor: colors.darkBlueDark}}
        >
            {continents.map(continent => (
                <option className="font-[600]" key={continent} value={continent}>{continent}</option>
            ))}
        </select>
    )
}