import { colors } from "../utils/colors"

interface HomeCountryContainerProps{
    flagUrl: string,
    countryName: string,
    population: string,
    region: string,
    capital: string[]
}

export function HomeCountryContainer({flagUrl, countryName, population, region, capital}: HomeCountryContainerProps){
    return(
        <div 
            className="rounded-md mb-[36px] lg:mb-[4.5rem] h-[21rem] w-64 lg:flex-[0_0_21%]"
            style={{
                backgroundColor: colors.darkBlueDark
            }}
        >
            <img className="rounded-t-md h-40 w-full" src={flagUrl} alt={"Flag from " + countryName} />
            <div className="mx-6 mt-6 mb-9">
                <h2 className="text-[16px] font-[800] mb-4">{countryName}</h2>
                <p className="font-[300]"><span className="font-[600]">Population:</span> {population}</p>
                <p className="font-[300]"><span className="font-[600]">Region:</span> {region}</p>
                <p className="font-[300]"><span className="font-[600]">Capital:</span> {capital}</p>
            </div>
        </div>
    )
}