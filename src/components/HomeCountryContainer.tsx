import { useNavigate } from "react-router-dom"
import { Country } from "../pages/Home"
import { colors } from "../utils/colors"
import { formatPopulation } from "../utils/formatters"

interface HomeCountryContainerProps extends Country{}

export function HomeCountryContainer(props: HomeCountryContainerProps){
    const navigate = useNavigate()
    
    return(
        <div 
            className="rounded-md mb-[36px] h-[20.825rem] w-[16.5rem] lg:mb-[4.5rem] lg:h-[21rem] lg:w-64 lg:flex-[0_0_21%] hover:brightness-110 hover:cursor-pointer"
            style={{
                backgroundColor: colors.darkBlueDark
            }}
            onClick={() => navigate(props.countryName, {state: {
                properties: props
            }})}
        >
            <img className="rounded-t-md h-40 w-full" src={props.flagUrl} alt={"Flag from " + props.countryName} />
            <div className="mx-6 mt-6 mb-9">
                <h2 className="text-[16px] font-[800] mb-4">{props.countryName}</h2>
                <p className="font-[300]"><span className="font-[600]">Population:</span> {formatPopulation(props.population)}</p>
                <p className="font-[300]"><span className="font-[600]">Region:</span> {props.region}</p>
                <p className="font-[300]"><span className="font-[600]">Capital:</span> {props.capital}</p>
            </div>
        </div>
    )
}