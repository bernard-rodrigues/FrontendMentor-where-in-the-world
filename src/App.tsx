import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { colors } from "./utils/colors";

export function App() {
  return(
    <div 
      className="text-[14px] lg:text-[16px]"
      style={{
        backgroundColor: colors.veryDarkBlueDark,
        color: colors.whiteDarkAndLight
      }}
    
    >
      <Header />
      <Home />
    </div>
  )
}
