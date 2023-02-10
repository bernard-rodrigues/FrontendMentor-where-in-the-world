import { Moon } from "phosphor-react";
import { colors } from "../utils/colors";

export function Header(){
    return (
        <header 
            className={`
                flex justify-between items-center px-4 py-8 
                lg:px-20 lg:py-[23px]
            `}
            style={{backgroundColor: colors.darkBlueDark}}    
        >
            <h1 className="font-[800] lg:text-[24px]">
                Where in the world?
            </h1>
            <button className="flex items-center gap-2">
                <Moon className="" weight="fill"/>
                <span className="font-[600]">
                    Dark Mode
                </span>
            </button>
        </header>
    )
}