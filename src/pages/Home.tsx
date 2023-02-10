import { useEffect, useState } from "react"
import { ContinentFilter } from "../components/ContinentFilter"
import { HomeCountryContainer } from "../components/HomeCountryContainer"
import { SearchBar } from "../components/SearchBar"
import { api } from "../lib/axios"
import { colors } from "../utils/colors"


interface Currency{
    name: string,
    symbol: string
}

interface NativeName{
    official: string,
    common: string
}

interface Country{
    flagUrl: string,
    countryName: string,
    population: number,
    region: string,
    capital:string[],
    subregion: string,
    languages?: string[],
    topLevelDomain: string[],
    borderCountries: string[]
    currencies: Currency[],
    nativeName: NativeName[],
}

export function Home(){
    const [ countries, setCountries ] = useState<Country[]>([])
    
    useEffect(() => {
        api.get('all').then(response => {
            response.data.forEach((country: any) => {
                const newCurrencies: Currency[] = country.currencies ? Object.values(country.currencies) : []
                const newNativeNames: NativeName[] = country.name.nativeName ? Object.values(country.name.nativeName) : []
                
                const newCountry = {
                    flagUrl: country.flags.png,
                    countryName: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    subregion: country.subregion,
                    topLevelDomain: country.tld,
                    languages: country.languages ? Object.values(country.languages) as string[] : [],
                    borderCountries: country.borders ? country.borders : [],
                    currencies: newCurrencies,
                    nativeName: newNativeNames
                }
                setCountries(currentCountries => [...currentCountries, newCountry])
            })
        })
    }, [])

    function formatPopulation(population: number){
        return population.toLocaleString("en-US")
    }

    return(
        <div className="mx-0 mt-5 lg:mt-12 lg:mx-20">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <SearchBar />
                <ContinentFilter />
            </div>
            
            <div className={`
                flex flex-col items-center
                lg:flex-row lg:flex-wrap lg:justify-between gap-1`}>
                {countries.sort((a, b) => a.countryName.localeCompare(b.countryName))
                    .slice(0, 8)
                    .map((country, index) => (
                    <HomeCountryContainer 
                        key={country.countryName + String(index)}
                        flagUrl={country.flagUrl}
                        countryName={country.countryName}
                        population={formatPopulation(country.population)}
                        region={country.region}
                        capital={country.capital}
                    />
                ))}
            </div>
        </div>
        
    )
}