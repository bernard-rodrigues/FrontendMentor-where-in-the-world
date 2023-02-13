import { MagnifyingGlass } from "phosphor-react";
import { useColors } from "../contexts/ApplicationContext";
import { colors } from "../utils/colors";

interface SearchBarProps{
    term: string,
    searchFunction: (term: string) => void
}

export function SearchBar({term, searchFunction}: SearchBarProps){
    const { isLight } = useColors()
    
    return(
        <div className="flex mb-[2.55rem] mx-[1.125rem] lg:mx-0 lg:mb-[3.25rem] shadow-md">
            <button 
                className="pl-7 pr-3 rounded-l-md"
                style={
                    isLight ?
                        {
                            backgroundColor: colors.whiteDarkAndLight,
                        }
                    :
                        {
                            backgroundColor: colors.darkBlueDark,
                        }
                }    
            >
                <MagnifyingGlass weight="bold" size={20} />
            </button>
            <input 
                className="w-[26.5rem] rounded-r-md py-[15px] pl-4"
                style={
                    isLight ?
                        {
                            backgroundColor: colors.whiteDarkAndLight
                        }
                    :
                        {
                            backgroundColor: colors.darkBlueDark
                        }
                }
                placeholder="Search for a country..."
                value={term}
                onChange={(event) => {searchFunction(event.target.value)}}
            />
        </div>
    )
}