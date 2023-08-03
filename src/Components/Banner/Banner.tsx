import '../Banner/Banner.scss'

function Banner() {
  return (
    <div className='banner container-fluid'>
        <div className="row black-background">
            <div className='d-lg-flex d-md-flex  justify-content-between'>
                <div className='col-lg-4 d-md-inline-block banner_section1'>
                    <h1 className='banner-heading'>Explore a Wide <br/> Selection of craft forms</h1>
                    <a href="" className='banner_link'>Learn More</a>
                </div> 
                <div className='col-lg-4  banner_section2'>
                    <h1 className='banner-span'>100</h1>
                    <p className='banner-para'>craft Forms</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner