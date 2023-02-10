import { Header } from "./components/Header";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { colors } from "./utils/colors";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return(
    <div 
      className="text-[14px] lg:text-[16px] min-h-screen"
      style={{
        backgroundColor: colors.veryDarkBlueDark,
        color: colors.whiteDarkAndLight
      }}
    
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryName" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
