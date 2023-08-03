import Footer from '../Footer/Footer'
import Footerend from '../Footer/Footerend'
import Navbar from '../Navbar/Navbar'
import '../Signup/Signup.scss'

function Signupform() {
    return (
        <div>
            <Navbar />
            <div className='signup container'> 
                <div className='row signup-margin'>
                    <div className="col-md-9 col-lg-6 col-12  m-auto border">
                        <div>
                            <h3 className='signup-heading'>Create an account.</h3>
                            <p className='title-para'> To create an account, please enter your details below </p>
                        </div>
                        <form>
                            <div className='input-field'>
                                <label htmlFor="">Email</label><br />
                                <input type="email" />
                            </div>
                            <div className='input-field'>
                                <label htmlFor="">Password</label><br />
                                <input type="password" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='input-field'>
                                    <label htmlFor="">FirstName</label><br />
                                    <input type="text" />
                                </div>
                                <div className='input-field'>
                                    <label htmlFor="">LastName</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='create-account'>
                                <input type="submit" value="Create An Account" className='submit' />
                            </div>
                            <div>
                                <p className='signup-para'>Already have an account?<a href="">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
                <Footerend />
            </div>
        </div>
    )
}

export default Signupform