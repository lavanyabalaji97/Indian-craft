import Button from "../Button/Button"
import data from '../../Data.json'
import Card from "../Card/Card"
import '../Resides/Reside.css'

function Reside() {
    return (
        <div className='Reside container mt-5'>
            <div className="row">
                <p className="reside-smallpara">For the home</p>
                <div className="col-lg-12 col-md-12 col-12  d-lg-flex justify-content-between">
                    <h1 className="reside-heading">Where the heart Resides</h1>
                    <div className="d-none d-lg-flex">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.Homeproducts.map((item: any) => {
                            return <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                                <Card text={item.title} image={item.img} price={item.price} />
                            </div>
                        })
                    }
                </div>
                <div className="d-md-none d-sm-block col-12 mb-5">
                    <button className="button w-100">See all</button>
                </div>
            </div>
        </div>
    )
}

export default Reside