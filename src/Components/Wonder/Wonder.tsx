import Button from "../Button/Button"
import data from '../../Data.json'
import Card from "../Card/Card"
import '../Wonder/Wonder.css'


function Wonder() {
    return (
        <div className='Wonder container mt-5'>
            <div className="row">
                <p className="wonder-smallpara">For Children</p>
                <div className="col-lg-12 col-md-6 col-12 d-lg-flex justify-content-between mb-5 ">
                    <h1 className="wonder-heading ">The Wonder of <br/> the growing Years</h1>
                    <div className="d-none d-lg-block">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.children.map((item: any) => {
                            return <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                                <Card text={item.title} image={item.img} price={item.price} />
                            </div>
                        })
                    }
                </div>
                <div className="d-md-none d-sm-block col-12 mb-5">
                    <button className="secondary-button w-100">See all</button>
                </div>
            </div>
        </div>
    )
}

export default Wonder