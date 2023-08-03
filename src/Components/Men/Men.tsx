import Button from "../Button/Button"
import data from '../../Data.json'
import Card from "../Card/Card"
import '../Men/Men.scss'

function Men() {
    return (
        <div className='men container'>
            <div className="row" style={{marginTop:"68px"}}>
                <p className="men-smallpara">For Men</p>
                <div className="col-lg-12 col-md-6 col-12 d-lg-flex justify-content-between mb-5">
                    <h3 className="men-heading">Things for Men</h3>
                    <div className="d-none d-lg-block">
                        <Button />
                    </div>
                </div>
                <div className='row'>
                    {
                        data.men.map((item: any) => {
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

export default Men