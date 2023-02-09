import { Moon } from "phosphor-react";
import { colors } from "../utils/colors";

export function Header(){
    return (
        <header 
            className={`
                flex justify-between items-center px-4 py-8 
                lg:px-[calc(3%+16px)]
            `}
            style={{backgroundColor: colors.darkBlueDark}}    
        >
            <h1 className="font-[800]">
                Where in the world?
            </h1>
            <button className="flex items-center gap-2">
                <Moon weight="fill"/>
                <span className="font-[600]">
                    Dark Mode
                </span>
            </button>
        </header>
    )
}