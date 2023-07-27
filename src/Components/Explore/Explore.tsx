import '../Explore/Explore.scss';

function Explore() {
    return (
        <div className="explore container-lg container-fluid-sm list-types">
            <div className="row">
                <div className="explore-image">
                    <div className="col-md-8 ">
                        <div className="d-md-flex justify-content-between explore-top  mb-4">
                            <div>
                                <h1 className='explore-heading'>Explore our  collections</h1>
                            </div>
                            <div className='explore-shopping'>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                        <div className='d-md-flex justify-content-between'>
                            <ul className='explore-unordered'>
                                <li className='explore-special'><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                                <li><a href="">Work</a></li>
                            </ul>
                            <ul className='explore-unordered'>
                                <li className='explore-special'><a href="">Men</a></li>
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