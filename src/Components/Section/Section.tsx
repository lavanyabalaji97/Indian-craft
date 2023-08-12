import '../Section/Section.scss'

function Section() {
    return (
        <div className='section p-5' style={{ backgroundColor: "#E9E2D8" }}>
            <div className="container sectionimage padding_100">
                <div className="row">
                    <div className="d-lg-flex d-md-flex justify-content-between">
                        <div className="col-lg-5 col-md-6 col-12 marginleft">
                            <span className="small-title">Our Mission</span>
                            <h3 className='title-name'>Every Purchase has a purpose</h3>
                            <span className="content">We have direct partnerships with over 320 Indian artisans and
                                over 2000 indirectly. As a social enterprise that seeks to offer a
                                fair-trade platform, our primary purpose is to support handicraft
                                workers. With each purchase you make, you can help make a difference.</span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 d-lg-block d-flex">
                            <div className='count-lists'>
                                <h1>21+</h1>
                                <p>STATES</p>
                            </div>
                            <div className='count-lists'>
                                <h1>2000</h1>
                                <p>INDIAN ARTISANS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;