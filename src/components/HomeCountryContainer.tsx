import { useNavigate } from "react-router-dom"
import { Country, useColors } from "../contexts/ApplicationContext"
import { colors } from "../utils/colors"
import { formatPopulation } from "../utils/formatters"

interface HomeCountryContainerProps extends Country{}

export function HomeCountryContainer(props: HomeCountryContainerProps){
    const navigate = useNavigate()
    
    const { isLight } = useColors()

    return(
        <div 
            className="rounded-md mb-[36px] h-[20.825rem] w-[16.5rem] shadow-md lg:mb-[4.5rem] lg:h-[21rem] lg:w-64 lg:flex-[0_0_21%] hover:brightness-110 hover:cursor-pointer"
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
            onClick={() => navigate(props.countryName, {state: {
                name: props.countryName
            }})}
        >
            <img className="rounded-t-md h-40 w-full" src={props.flagUrl} alt={"Flag from " + props.countryName} />
            <div className="mx-6 mt-6 mb-9 [&>p]:font-[300] [&>p>span]:font-[600]">
                <h2 className="text-[16px] font-[800] mb-4">{props.countryName}</h2>
                <p><span>Population:</span> {formatPopulation(props.population)}</p>
                <p><span>Region:</span> {props.region}</p>
                <p><span>Capital:</span> {props.capital}</p>
            </div>
        </div>
    )
}