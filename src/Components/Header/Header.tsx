import '../Header/Header.css'
import Carousel from 'react-bootstrap/Carousel';
import circle from '../../Asserts/circle.webp'
import Tea_cup from '../../Asserts/Tea-cup.webp'
import Dhokra from '../../Asserts/Dhokra_Craft.webp';
import Brass_Flower from '../../Asserts/Brass_Flowers.webp'



function Header() {
    return (
        <div>
            <div className="para">
                <span>Enjoy complimentary shipping on all domestic orders up to Rs. 31,999</span>
            </div>
            <div className="navbar-sticky">
                <div className="navbar-light bg-light navbar-top">
                    <div className="Header container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-12 d-lg-inline">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="d-lg-none d-flex justify-content-center">
                                        <button className="nav-link navbtn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                        <button className="nav-link navbtn">
                                            <i className="bi bi-heart"></i>
                                        </button>
                                        <button className="nav-link navbtn">
                                            <i className="bi bi-cart"></i>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Home</a>
                                                <div className='underline'></div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Shop</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Our Story</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">wholeSale</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Contact</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Offer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-3 d-none d-lg-inline align-self-center">
                                <div className="d-flex justify-content-lg-center justify-content-end">
                                    <button className="nav-link navbtn">Login</button>
                                    <button className="nav-link navbtn">
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <button className="nav-link navbtn">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                    <button className="nav-link navbtn">
                                        <i className="bi bi-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
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