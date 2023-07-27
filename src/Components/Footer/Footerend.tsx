import '../Footer/Footerend.css'

function Footerend() {
    return (
        <div className='container-fluid footer_end' style={{ backgroundColor: "#313323" }}>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-between">
                    <span>© The India Craft House 2022</span>
                    <a className="footer_border text-decoration-none">Curated in India</a>
                </div>
            </div>
        </div>
    )
}

export default Footerend