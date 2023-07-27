import Banner from "../Banner/Banner"
import Choice from "../Choices/Choice"
import Craft from "../Craft/Craft"
import Division from "../Division/Division"
import Explore from "../Explore/Explore"
import Footer from "../Footer/Footer"
import Footerend from "../Footer/Footerend"
import Header from "../Header/Header"
import Men from "../Men/Men"
import Order from "../Order/Order"
import Reside from "../Resides/Reside"
import Section from "../Section/Section"
import Trending from "../Trending/Trending"
import Wonder from "../Wonder/Wonder"
import Work from "../Work/Work"


function Home() {
    return (
        <div>
            <Header />
            <Section />
            <Trending />
            <Banner />
            <Choice />
            <Division />
            <Reside />
            <Craft />
            <Men />
            <Wonder />
            <Work />
            <Order />
            <Explore />
            <Footer />
            <Footerend />
        </div>
    )
}

export default Home