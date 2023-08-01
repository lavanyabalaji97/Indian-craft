import Footer from '../Footer/Footer'
import Footerend from '../Footer/Footerend'
import '../Login/Login.scss'
import Navbar from '../Navbar/Navbar'
import {Link} from "react-router-dom"

function Login() {

    return (
        <div>
            <Navbar />
            <div className='login container text-center' style={{width:"35%",margin:"100px auto"}}>
                <h1 className='login-heading text-start'>Welcome Back</h1>
                <form action="" className='login-form'>
                    <div>
                        <label htmlFor="Email Address">EMAIL ADDRESS*</label><br />
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD*</label><br />
                        <input type="password" />
                    </div>
                    <p className="forget-password">
                        <a href="" className='text-decoration-none text-dark'>Forget Password?</a>
                    </p>
                    <div className="button-login">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <p className="or-text">OR</p>
                <div className="social-icons">
                    <a href="" className='text-decoration-none  facebook-icon'>Facebook<i className="bi bi-facebook"></i></a>
                    <a href="" className='text-decoration-none  google-icon'>Google<i className="bi bi-google"></i></a>
                </div>
                <p className='login-create'>New to The Indian Craft House <Link to={"/Signupform"} className='text-dark'>Create Account</Link></p>
            </div>
            <Footer />
            <Footerend />
        </div>
    )
}

export default Login