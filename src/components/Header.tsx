import { Moon, Sun } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useColors } from "../contexts/ApplicationContext";
import { colors } from "../utils/colors";

export function Header(){
    const navigate = useNavigate()

    const {isLight, toggleIsLight} = useColors()
    
    return (
        <header 
            className={`
                flex justify-between items-center px-[1.125rem] py-[1.875rem] shadow-md
                lg:px-20 lg:py-[23px]
            `}
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
            <h1 className="font-[800] text-[14px] lg:text-[24px] cursor-pointer" onClick={() => navigate('/')}>
                Where in the world?
            </h1>
            <button className="flex items-center gap-2 text-[12px]" onClick={toggleIsLight}>
                {
                    isLight ?
                    <>
                        <Sun size={16} weight="fill"/>
                        <span className="font-[600]">
                            Light Mode
                        </span>
                    </>
                    :
                    <>
                        <Moon size={16} className="" weight="fill"/>
                        <span className="font-[600]">
                            Dark Mode
                        </span>
                    </>
                }
            </button>
        </header>
    )
}