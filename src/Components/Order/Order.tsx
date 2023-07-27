import elephant from '../../Asserts/elephant.webp'
import '../Order/Order.css'

function Order() {
    return (
        <div className='order container-fluid' style={{ backgroundColor: "#eae2d8" }}>
            <div className="row d-md-flex justify-content-evenly">
                <div className="col-lg-4 col-md-4 d-md-block d-none elephant_image">
                    <img src={elephant} alt="elephant" className='img-fluid' />
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                    <p className='order_smallpara'>For large orders</p>
                    <h1 className='order_heading'>Place a bulk order with us</h1>
                    <p className='order_para'>Whether you want to place a large customised order for a single item or a large assortment of multiple craft products, we can sort it out for you! For years we have also worked on custom orders for our clients  it is one of the many benefits of having direct relationships with our artisans. Just drop us a note!</p>
                    <div className='order_btns'>
                        <a href="" className='orderlearn_btn d-block d-md-inline'>Learn More</a>
                        <a href="" className='ordertouch_btn d-block d-md-inline'>Get In Touch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order