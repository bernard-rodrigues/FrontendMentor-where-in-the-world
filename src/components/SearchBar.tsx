import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../utils/colors";

export function SearchBar(){
    return(
        <div className="flex mb-9 mx-4 lg:mx-0 lg:mb-[3.25rem]">
            <button 
                className="pl-7 pr-3 rounded-l-md"
                style={{
                    backgroundColor: colors.darkBlueDark
                }}    
            >
                <MagnifyingGlass weight="bold" size={20}/>
            </button>
            <input 
                className="w-[26.5rem] rounded-r-md py-[15px] pl-4"
                style={{
                    backgroundColor: colors.darkBlueDark,
                }}
                placeholder="Search for a country..."
            />
        </div>
    )
}