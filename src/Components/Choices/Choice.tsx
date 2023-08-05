import Button from "../Button/Button"
import data from '../../Data.json'
import Productcard from '../Product/Productcard'
import '../Choices/Choices.scss'

function Choice() {
    return (
        <div className='choices container mt-5'>
            <div className="row">
                <p className="smallpara">For Women</p>
                <div className="col-lg-12 col-md-6 d-lg-flex col-12 justify-content-between mb-5">
                    <h3 className="heading">Choices for <br/> the Season</h3>
                    <div className="d-lg-block d-none">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.choice.map((item: any) => {
                            return <div key={item.id} className='col-lg-3 col-md-4 col-6'>
                                <Productcard text={item.title} image={item.img} price={item.price} />
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

export default Choice