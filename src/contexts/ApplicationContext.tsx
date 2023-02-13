import { createContext, ReactNode, useContext,useEffect,useState } from "react";
import { api } from "../lib/axios";

interface ColorsContextProviderProps{
    children: ReactNode
}

interface ColorsContextData{
    isLight: boolean,
    toggleIsLight: () => void,
    countries: Country[]
}

interface Currency{
    name: string,
    symbol: string
}

interface NativeName{
    official: string,
    common: string
}

export interface Country{
    flagUrl: string,
    countryName: string,
    abbreviation: string,
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

export const ColorsContext = createContext({} as ColorsContextData);

export function ColorsContextProvider({children}: ColorsContextProviderProps){
    const [ isLight, setIsLight ] = useState(false);

    function toggleIsLight(){
        setIsLight(currentIsLight => !currentIsLight)
    }

    const [ countries, setCountries ] = useState<Country[]>([]);

    useEffect(() => {
        api.get('all').then(response => {
            response.data.forEach((country: any) => {
                const newCurrencies: Currency[] = country.currencies ? Object.values(country.currencies) : []
                const newNativeNames: NativeName[] = country.name.nativeName ? Object.values(country.name.nativeName) : []
                
                const newCountry = {
                    flagUrl: country.flags.png,
                    countryName: country.name.common,
                    abbreviation: country.cca3,
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

    return(
        <ColorsContext.Provider value={{
            isLight,
            toggleIsLight,
            countries
        }}>
            {children}
        </ColorsContext.Provider>
    )
}

export function useColors(){
    return useContext(ColorsContext)
}