import '../Explore/Explore.scss';

function Explore() {
    return (
        <div className="explore container-lg container-fluid-sm">
            <div className="row">
                <div className="ex-image">
                    <div className="col-md-8 ">
                        <div className="d-md-flex justify-content-between ex-top  mb-4">
                            <div>
                                <h1 className='ex-heading'>Explore our  collections</h1>
                            </div>
                            <div className='ex-shopping'>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                        <div className='d-md-flex justify-content-between'>
                            <ul className='ex-unordered'>
                                <li className='ex-special'><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                                <li><a href="">Work</a></li>
                            </ul>
                            <ul className='ex-unordered'>
                                <li className='ex-special'><a href="">Men</a></li>
                                <li><a href="">Home & Living</a></li>
                                <li><a href="">Gifts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore