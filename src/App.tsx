import Banner from "./Components/Banner/Banner"
import Button from "./Components/Button/Button"
import Choice from "./Components/Choices/Choice"
import Craft from "./Components/Craft/Craft"
import Division from "./Components/Division/Division"
import Explore from "./Components/Explore/Explore"
import Footer from "./Components/Footer/Footer"
import Footerend from "./Components/Footer/Footerend"
import Header from "./Components/Header/Header"
import Men from "./Components/Men/Men"
import Order from "./Components/Order/Order"
import Reside from "./Components/Resides/Reside"
import Section from "./Components/Section/Section"
import Trending from "./Components/Trending/Trending"
import Wonder from "./Components/Wonder/Wonder"
import Work from "./Components/Work/Work"


function App() {
  return (
    <div style={{ backgroundColor: "#f9f2ea",overflowX:"hidden"}}>
      <Header />
      <Section />
      <Trending />
      <Banner/>
      <Choice/>
      <Division/>
      <Reside/>
      <Craft/>
      <Men/>
      <Wonder/>
      <Work/>
      <Order/>
      <Explore/>
      <Footer/>
      <Footerend/>
    </div>
  )
}

export default App