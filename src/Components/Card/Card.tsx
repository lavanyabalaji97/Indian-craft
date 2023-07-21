import '../Card/Card.css'
interface Props {
    price: string;
    image: string;
    text: string;
    

}

function Card({ price, image, text}: Props) {
    return (
        <div className='container'>
            <div className="row">
                <div className="position-relative">
                    <a href="" className='card-anchor'>
                        <i className="bi bi-heart heart-icon position-absolute"></i>
                        <img src={image} alt="" className="card-img" />
                        <p className='card-text'>{text}</p>
                    </a>
                    <p className="card-price">{price}</p>
                </div>
            </div>
        </div>
    );
}


export default Card
