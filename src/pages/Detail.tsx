import { ArrowLeft, Warning } from "phosphor-react";
import { useLocation } from "react-router-dom"
import { colors } from "../utils/colors";
import { formatPopulation } from "../utils/formatters";

export function Detail(){
    const location = useLocation();
    
    return(
        <>
        {location.state ? 
            <div className="lg:mx-20">
                <button 
                    type="button" 
                    className="flex items-center mt-20 px-10 py-2 rounded-md gap-2 shadow-md"
                    style={{
                        backgroundColor: colors.darkBlueDark,
                        color: colors.whiteDarkAndLight
                    }} 
                    onClick={() => history.back()}
                >
                    <ArrowLeft/><span>Back</span>
                </button>

                <div className="mt-20 flex items-center justify-left gap-[8rem]">
                    <img 
                        className="w-[35.5rem] h-[25.125rem]"
                        src={location.state.properties.flagUrl} 
                        alt={"Flag from " + location.state.properties.countryName}
                    />
                    <div>
                        <h2 className="text-3xl font-[800]">{location.state.properties.countryName}</h2>
                        <div className="flex mt-5 [&>div>p]:font-[300] [&>div>p]:mt-2 [&>div>p>span]:font-[600]">
                            <div>
                                <p><span>Native Name:</span> {}</p>
                                <p><span>Population:</span> {formatPopulation(location.state.properties.population)}</p>
                                <p><span>Region:</span> {formatPopulation(location.state.properties.region)}</p>
                                <p><span>Sub Region:</span> {formatPopulation(location.state.properties.subregion)}</p>
                                <p><span>Capital:</span> {formatPopulation(location.state.properties.capital)}</p>
                            </div>
                            <div className="ml-[7.75rem]">
                                <p><span>Top Level Domain:</span> {formatPopulation(location.state.properties.topLevelDomain)}</p>
                                <p><span>Currencies:</span> {}</p>
                                <p><span>Languages:</span> {}</p>
                            </div>
                        </div>
                        <div className="mt-[4.75rem]">
                            <span className="font-[600]">Border Countries:</span>
                        </div>
                    </div>
                </div>
            </div>
        :
        <div>
            <div className="fixed flex justify-center items-center gap-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Warning weight="fill"/>
                <span className="text-center">Ops... Return to main page and choose a country</span>
            </div>
        </div>
        }
        </>
    )
}