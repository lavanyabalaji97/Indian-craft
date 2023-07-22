import data from '../../Data.json'
import Button from '../Button/Button'
import Card from '../Card/Card'
import '../Craft/Craft.css'

function Craft() {
    return (
        <div className='craft container'>
            <div className="row d-flex d-md-flex">
                <div className="col-lg-6 col-md-6">
                    <p className='craft-smallpara'>In Focus</p>
                    <h1 className='craft-heading pb-4'>The world’s oldest craft form</h1>
                    <p className='craft-para pb-4'>Dhokra Metal Craft. Dhokra is amongst the oldest traditional techniques of metal casting in India, practiced for over 4,000 years, said to date back to the era of the Indus Valley Civilisation. The lost wax technique or ‘cire-perdue’ has been the medium of metal workers in Madhya Pradesh, Chhattisgarh, Orissa and West Bengal. Entirely handcrafted, the unique 13-stage process of Dhokra /Bell-metal making today, is an outcome of the original craft instinct handed down through the centuries. Dhokra or Bell metal is an alloy of brass, and other metals that impart an antique effect to the castings.</p>
                    <div className='d-lg-flex d-none'>
                    <Button/>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 d-flex d-md-flex'>
                    {
                        data.craft.map((item: any) => {
                            return <div key={item.id}>
                                <Card text={item.title} image={item.img} price={item.price} />
                            </div>
                        })
                    }
                </div>
                <div className='w-100 d-lg-none'>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Craft