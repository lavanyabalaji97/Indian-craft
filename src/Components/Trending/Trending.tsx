import Button from '../Button/Button'
import Card from '../Card/Card'
import data from '../../Data.json'
import '../Trending/Trending.css'

function Trending() {
    return (
        <div className='Trending container mt-5'>
            <div className="row">
                <div className="col-lg-12 col-md-6 col-12 mt-5 mb-5">
                    <p className='trending-smallpara'>For this season</p>
                    <div className='d-lg-flex justify-content-between'>
                        <h3 className='Trending_heading'>Trending & New</h3>
                        <div className='d-lg-block d-none'>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        data.Trending.map((item: any) => {
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

export default Trending