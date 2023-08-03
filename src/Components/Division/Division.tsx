import human from '../../Asserts/humans.webp'
import smiley from '../../Asserts/smiley-girl.webp'
import '../Division/Division.scss'

function Division() {
    return (
        <div className='division container'>
            <div className="row">
                <div className="col-lg-8 col-md-6 col-12 ">
                    <img src={human} alt="" className='division-human'/>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <img src={smiley} alt="" className='division-girl' />
                </div>
            </div>
        </div>
    )
}

export default Division