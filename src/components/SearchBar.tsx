import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../utils/colors";

export function SearchBar(){
    return(
        <div className="flex mb-11">
            <button 
                className="pl-7 pr-3 rounded-l-md"
                style={{
                    backgroundColor: colors.darkBlueDark
                }}    
            >
                <MagnifyingGlass weight="bold" size={20}/>
            </button>
            <input 
                className="w-full rounded-r-md py-3 pl-4"
                style={{
                    backgroundColor: colors.darkBlueDark,
                }}
                placeholder="Search for a country..."
            />
        </div>
    )
}