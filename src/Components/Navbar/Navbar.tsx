import { useEffect, useState } from 'react';
import '../Header/Header.scss'
import '../Navbar/Navbar.scss'
import { Link } from "react-router-dom"

function Navbar() {
    const [scrolled, setScrolled] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled('scrolled');
                console.log("scrolled")
            } else {
                setScrolled('');
            }
        };
        const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');


        window.addEventListener('scroll', handleScroll);
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedIsLoggedIn === 'true')
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="para">
                <span>Enjoy complimentary shipping on all domestic orders up to Rs. 31,999</span>
            </div>
            <div className="navbar-sticky">
                <div className="navbar-light navbar-top">
                    <div className="Header container" >
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-12 d-lg-inline">
                                <nav className="{`navbar-container ${scrollClass}`} navbar navbar-expand-lg navbar-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                    </div>
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
                                                <Link className="nav-link" to={"/"}><div className='navdiv'>Home</div></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to=""><div className="navdiv">Shop</div></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#"><div className="navdiv">Our Story</div></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#"><div className="navdiv">wholeSale</div></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#"><div className="navdiv">Contact</div></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#"><div className="navdiv">Offer</div></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-3 d-none d-lg-inline align-self-center">
                                <div className="d-flex justify-content-lg-center justify-content-end">
                                    {isLoggedIn ? (
                                        <div className="user-icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                    ) : (
                                        <button className="nav-link navbtn">
                                            <Link to={"/Login"} className='text-decoration-none text-black'>Login</Link>
                                        </button>
                                    )}
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
        </div>
    )
}

export default Navbar