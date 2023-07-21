import '../Section/Section.css'

function Main() {
    return (
        <div className='section rowimage rightimage' style={{ backgroundColor: "#E9E2D8" }}>
            <div className=" container padding_100">
                <div className="row">
                    <div className="d-lg-flex d-md-flex justify-content-center">
                        <div className="col-lg-5 col-md-6 col-12 marginleft">
                            <span className="small-title">Our Mission</span>
                            <h3 className='title-name'>Every Purchase has a purpose</h3>
                            <span className="content">We have direct partnerships with over 320 Indian artisans and
                                over 2000 indirectly. As a social enterprise that seeks to offer a
                                fair-trade platform, our primary purpose is to support handicraft
                                workers. With each purchase you make, you can help make a difference.</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="count-lists margin40 d-flex d-md-block paddingleft">
                                <div className='counting'>
                                    <span className="counter-count">
                                        <span className='count11'>21+</span>
                                        <div className="count-text">STATES</div>
                                    </span>
                                </div>

                                <div className="counter-list">
                                    <span className="counter-count">
                                        <span className="count11">2000</span>
                                        <div className="count-text">
                                            INDIAN ARTISANS
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main