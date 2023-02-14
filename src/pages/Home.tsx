import { SpinnerGap } from "phosphor-react"
import { useState } from "react"
import { ContinentFilter } from "../components/ContinentFilter"
import { HomeCountryContainer } from "../components/HomeCountryContainer"
import { SearchBar } from "../components/SearchBar"
import { useColors } from "../contexts/ApplicationContext"

export function Home(){
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ continentFilterTerm, setContinentFilterTerm ] = useState('')

    const { countries } = useColors()

    function updateSearchTerm(term: string){
        setSearchTerm(term)
    }

    function updateContinentFilterTerm(term: string){
        setContinentFilterTerm(term)
    }

    function countriesFilter(){
        const searchBarCountries = countries.filter(country => {
            return country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        
        const continentFilterCountries = countries.filter(country => {
            
            return country.region.toLowerCase().includes(continentFilterTerm.toLowerCase())
            
        })

        if(continentFilterCountries.length > 0){
            return searchBarCountries.filter(country => continentFilterCountries.indexOf(country) !== -1)
        }
        return searchBarCountries
    }

    return(
        <main className="mx-0 mt-5 lg:mt-12 lg:mx-auto lg:px-20 lg:max-w-screen-2xl">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <SearchBar 
                    term={searchTerm}
                    searchFunction={updateSearchTerm}
                />
                <ContinentFilter 
                    filterFunction={updateContinentFilterTerm}
                />
            </div>
            
            <div className={`
                flex flex-col items-center
                lg:flex-row lg:flex-wrap lg:justify-between gap-1`}>
                {countriesFilter().length > 0 ?
                    countriesFilter()
                        .sort((a, b) => a.countryName.localeCompare(b.countryName))
                        .map((country, index) => 
                    (
                        <HomeCountryContainer 
                            key={country.countryName + String(index)}
                            flagUrl={country.flagUrl}
                            countryName={country.countryName}
                            abbreviation={country.abbreviation}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            borderCountries={country.borderCountries}
                            currencies={country.currencies}
                            nativeName={country.nativeName}
                            subregion={country.subregion}
                            topLevelDomain={country.topLevelDomain}
                            languages={country.languages}
                        />
                    ))
                :
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-3">
                    <SpinnerGap size={30} className="animate-spin"/>
                    <span className="text-center">Processing...</span>
                </div>
                }
            </div>
        </main>
    )
}