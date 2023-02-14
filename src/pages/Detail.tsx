import { ArrowLeft, Warning } from "phosphor-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Country, useColors } from "../contexts/ApplicationContext";
import { colors } from "../utils/colors";
import { formatPopulation } from "../utils/formatters";

export function Detail(){
    const location = useLocation();

    const navigate = useNavigate()

    const { isLight, countries } = useColors()

    const [ country, setCountry ] = useState<Country | undefined>(undefined)

    useEffect(() => {
        setCountry(countries.find(country => country.countryName === location.state.name))
    }, [])

    function getBorderCountriesNames(){
        return countries.filter(currentCountry => country!.borderCountries.includes(currentCountry.abbreviation)).map(currentCountry => currentCountry.countryName).sort()
    }

    function getNativeName(){
        return country?.nativeName[0].official
    }

    function getCurrencies(){
        return country?.currencies.map(currency => currency.name).join(', ')
    }
    
    return(
        <>
        {country ? 
            <main className="mx-7 lg:mx-20 lg:pb-8">
                <button 
                    type="button" 
                    className={`
                        flex items-center mt-[2.625rem] gap-2 rounded px-[1.625rem] py-[0.325rem] shadow-md hover:brightness-110
                        lg:mt-20 lg:px-10 lg:py-2 lg:rounded-md`}
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
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft/><span>Back</span>
                </button>

                <div 
                    className={`
                        mt-16 flex flex-col items-center justify-left gap-[2.7rem]
                        lg:mt-20 lg:flex-row lg:gap-[8rem]
                    `}>
                    <img 
                        className="h-[14.125rem] w-full lg:w-[35.5rem] lg:h-auto"
                        src={country.flagUrl} 
                        alt={"Flag from " + country.countryName}
                    />
                    <div className="lg:w-[35.5rem]">
                        <h2 className="text-2xl lg:text-3xl font-[800]">{country.countryName}</h2>
                        <div 
                            className={`
                                flex flex-col mt-[0.7rem] [&>div>p]:mt-[0.675rem] [&>div>p]:font-[300] [&>div>p>span]:font-[600]
                                lg:flex-row lg:mt-5 lg:[&>div>p]:mt-2`}>
                            <div>
                                <p><span>Native Name:</span> {getNativeName()}</p>
                                <p><span>Population:</span> {formatPopulation(country.population)}</p>
                                <p><span>Region:</span> {country.region}</p>
                                <p><span>Sub Region:</span> {country.subregion}</p>
                                <p><span>Capital:</span> {country.capital}</p>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:ml-[7.75rem]">
                                <p><span>Top Level Domain:</span> {country.topLevelDomain.join(', ')}</p>
                                <p><span>Currencies:</span> {getCurrencies()}</p>
                                <p><span>Languages:</span> {country.languages ? country.languages.join(', ') : ""}</p>
                            </div>
                        </div>
                        <div className="mt-[2.125rem] mb-8 lg:mt-[4.75rem] flex gap-2 flex-wrap items-center">
                            <span className="font-[600] mr-2">Border Countries: </span>
                            {getBorderCountriesNames().map(countryName => (
                                <span 
                                    key={countryName}
                                    className="text-center py-1 px-3 min-w-[6rem] rounded-sm shadow-md cursor-pointer hover:brightness-110"
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
                                    onClick={() => {
                                        setCountry(countries.find(country => country.countryName === countryName));
                                        navigate('/'+countryName)
                                    }}
                                >
                                    {countryName}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        :
            <main>
                <div className="fixed flex justify-center items-center gap-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Warning weight="fill"/>
                    <span className="text-center">Ops... Return to main page and choose a country</span>
                </div>
            </main>
        }
        </>
    )
}