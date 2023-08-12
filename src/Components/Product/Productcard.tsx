import { useState } from 'react';
import '../Product/ProductCard.scss'


interface Props {
    price: string;
    image: string;
    text: string;


}

function Card({ price, image, text }: Props) {
    const [isHeartClicked, setIsHeartClicked] = useState(false);


    const heartClickHandler = () => {
        setIsHeartClicked(!isHeartClicked);
    };

    const heartIconStyle = {
        backgroundColor: isHeartClicked ? 'white' : 'transparent',       

    };

    return (
        <div className='image container'>
            <div className="row">
                <div className="position-relative">
                    <a href="" className='anchor'>
                        <img src={image} alt="" className="card-img" />
                        <p className='text'>{text}</p>
                    </a>
                    <div className="heart-icon-container">
                            <i className="bi bi-heart heart-icon position-absolute" onClick={heartClickHandler}  style={heartIconStyle}></i>
                            <div className="tooltip">Add to <a href="">whistle</a></div>
                    </div>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    );
}


export default Card
