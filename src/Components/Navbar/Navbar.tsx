import React from 'react'
import '../Header/Header.scss'
import Login from '../Login/Login'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="para">
                <span>Enjoy complimentary shipping on all domestic orders up to Rs. 31,999</span>
            </div>
            <div className="navbar-sticky">
                <div className="navbar-light bg-light navbar-top">
                    <div className="Header container" >
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-12 d-lg-inline">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
                                                <Link className="nav-link" to={"/"}>Home</Link>
                                                <div className='underline'></div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="">Shop</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Our Story</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">wholeSale</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Contact</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Offer</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-3 d-none d-lg-inline align-self-center">
                                <div className="d-flex justify-content-lg-center justify-content-end">
                                    <button className="nav-link navbtn"><Link to={"/Login"} className='text-decoration-none text-black'>Login</Link></button>
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