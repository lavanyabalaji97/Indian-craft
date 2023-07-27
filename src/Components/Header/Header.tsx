import '../Header/Header.scss'
import Carousel from 'react-bootstrap/Carousel';
import circle from '../../Asserts/circle.webp'
import Tea_cup from '../../Asserts/Tea-cup.webp'
import Dhokra from '../../Asserts/Dhokra_Craft.webp';
import Brass_Flower from '../../Asserts/Brass_Flowers.webp'
import Navbar from '../Navbar/Navbar';



function Header() {
    return (
        <div>
            <Navbar />
            <div className="header container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 back-img">
                        <div>
                            <div className="logo-heading">
                                <div className="logo">
                                    <img src={circle} alt="" className="small-img" />
                                </div>
                                <div className="small-section">
                                    <h3 className="small-heading">Embrace the spirit of India</h3>
                                    <p className="small-para">An unparalleled legacy that spans millennia. Pure, authentic craft sourced from artisans across the Indian sub-continent. Our vast collection of over 80 different craft forms celebrates a heritage of some of the world’s oldest handicrafts.
                                    </p>
                                    <button className="shop_nowbtn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 m-auto curouselcontainer">
                        <Carousel className="carousel" indicators={false} data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Brass_Flower}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Dhokra}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Tea_cup}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Brass_Flower}
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header