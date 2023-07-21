import Button from "../Button/Button"
import data from '../../Data.json'
import Card from "../Card/Card"
import '../Choices/Choices.css'
function Choice() {
    return (
        <div className='choices container mt-5'>
            <div className="row">
                <p className="choice_smallpara">For Women</p>
                <div className="col-lg-12 col-md-6 d-lg-flex col-12 justify-content-between">
                    <h3 className="choice-heading">Choices for the Season</h3>
                    <div className="d-lg-block d-none">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.choice.map((item: any) => {
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

export default Choice