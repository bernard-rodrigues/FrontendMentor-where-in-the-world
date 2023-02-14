import { useColors } from "../contexts/ApplicationContext"
import { colors } from "../utils/colors"

export function Footer(){
    const { isLight } = useColors()
    
    return(
        <footer 
            className="fixed bottom-0 text-xs w-screen text-center py-1"
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
            Challenge by <a className="font-[700]" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a className="font-[700]" href="https://github.com/bernard-rodrigues">Bernard Rodrigues</a>.
        </footer>
    )
}