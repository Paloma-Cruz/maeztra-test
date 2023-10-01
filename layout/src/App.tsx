// COMPONENTS

import Appeals from "./components/Appeals"
import Banners from "./components/Banners"
import BottomBar from "./components/BottomBar"
import Brands from "./components/Brands"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InfoCard from "./components/InfoCard"
import Menu from "./components/Menu"
import Newsletter from "./components/Newsletter"
import Shelf from "./components/Shelf"
import TopBar from "./components/TopBar"

// HOOKS
import useDevice from "./hooks/useDevice"

function App() {

  const { isMobile } = useDevice();

  return (
    <div>
      <TopBar/>
      <Header />
      {isMobile ? <></> : <Menu/>}
      <Banners/>
      <Appeals />
      <Brands/>
      <Shelf/>
      <InfoCard />
      <Newsletter />
      <Footer />
      <BottomBar />
    </div>
  )
}

export default App
