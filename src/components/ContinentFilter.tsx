import { useColors } from "../contexts/ApplicationContext";
import { colors } from "../utils/colors";
import * as Select from '@radix-ui/react-select';
import { CaretDown } from "phosphor-react";

const continents = [
    'Africa', 'America', 'Asia', 'Europe', 'Oceania'
]

interface ContinentFilterBarProps{
    currentContinent: string,
    filterFunction: (term: string) => void
}

export function ContinentFilter({ currentContinent, filterFunction }: ContinentFilterBarProps){
    const {isLight} = useColors()
    
    return(
        <Select.Root onValueChange={value => filterFunction(value)}>
            <Select.Trigger 
                className={`
                    text-[0.7rem] font-[600] flex h-12 justify-between ml-[1.125rem] mb-9 w-[12.5rem] px-[1.125rem] shadow-md items-center rounded-md
                    lg:text-[0.925rem] lg:mx-0 lg:mb-[3.25rem]`}
                style={
                    isLight ?
                        {
                            backgroundColor: colors.whiteDarkAndLight,
                            color: colors.veryDarkBlueLight
                        }
                    :
                        {
                            backgroundColor: colors.darkBlueDark,
                            color: colors.whiteDarkAndLight
                        }
                }
            >
                <Select.Value placeholder="Filter by Region"/>
                <Select.Icon>
                    <CaretDown />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content>
                    <Select.Viewport 
                        className="font-[300] w-[12.5rem] py-4 px-[1.125rem] rounded-md translate-y-[3.625rem] lg:translate-y-[4.125rem]"
                        style={
                            isLight ?
                                {
                                    backgroundColor: colors.whiteDarkAndLight,
                                    color: colors.veryDarkBlueLight
                                }
                            :
                                {
                                    backgroundColor: colors.darkBlueDark,
                                    color: colors.whiteDarkAndLight
                                }
                            }   
                    >
                        {continents.map(continent => (
                            <Select.Item 
                                className="mt-1 lg:mt-2 text-sm hover:cursor-pointer" 
                                key={continent} 
                                value={continent}
                            >
                                
                                <Select.ItemText>{continent}</Select.ItemText>
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}