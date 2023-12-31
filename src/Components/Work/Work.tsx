import Button from "../Button/Button"
import data from '../../Data.json'
import Product from '../Product/Productcard'
import '../Work/Work.scss'
function Work() {
    return (
        <div className='Work container mt-5'>
            <div className="row">
                <p className="work-smallpara">For Work</p>
                <div className="col-lg-12 col-md-6 col-12 d-lg-flex justify-content-between mb-5">
                    <h1 className="work-heading">Work in style</h1>
                    <div className="d-none d-lg-flex">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.work.map((item: any) => {
                            return <div key={item.id} className='col-lg-3 col-md-4  col-6'>
                                <Product text={item.title} image={item.img} price={item.price} />
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

export default Work