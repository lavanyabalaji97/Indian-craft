import '../Card/Card.scss'
interface Props {
    price: string;
    image: string;
    text: string;
    

}

function Card({ price, image, text}: Props) {
    return (
        <div className='image container'>
            <div className="row">
                <div className="position-relative">
                    <a href="" className='anchor'>
                        <i className="bi bi-heart heart-icon position-absolute"></i>
                        <img src={image} alt="" className="card-img" />
                        <p className='text'>{text}</p>
                    </a>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    );
}


export default Card
