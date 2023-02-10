import { Moon } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { colors } from "../utils/colors";

export function Header(){
    const navigate = useNavigate()
    
    return (
        <header 
            className={`
                flex justify-between items-center px-4 py-8 shadow-md
                lg:px-20 lg:py-[23px]
            `}
            style={{backgroundColor: colors.darkBlueDark}}    
        >
            <h1 className="font-[800] lg:text-[24px] cursor-pointer" onClick={() => navigate('/')}>
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