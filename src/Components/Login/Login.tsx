import { useState } from 'react'
import Footer from '../Footer/Footer'
import Footerend from '../Footer/Footerend'
import '../Login/Login.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom"


 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'true');

        handleLogin(); 
    };

    return (
        <div>
            <Navbar />
            <div className='login container text-center'>
                <div className="row margin">
                    <div className="col-lg-5 col-md-10 col-12 m-auto border">                        
                        <div>
                            <h1 className='heading text-start'>Welcome Back</h1>
                            <form action="" className='form'  onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="Email Address">EMAIL ADDRESS*</label><br />
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password">PASSWORD*</label><br />
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                </div>
                                <p className="forget-password">
                                    <a href="" className='text-decoration-none text-dark'>Forget Password?</a>
                                </p>
                                <div className="button-login">
                                    <input type="submit" value="Sign In" onCanPlay={handleLogin} />
                                </div>
                            </form>
                            <p className="or-text">OR</p>
                            <div className="social-icons">
                                <a href="" className='text-decoration-none  facebook-icon'>Facebook<i className="bi bi-facebook"></i></a>
                                <a href="" className='text-decoration-none  google-icon'>Google<i className="bi bi-google"></i></a>
                            </div>
                            <p className='create'>New to The Indian Craft House <Link to={"/Signupform"} className='text-dark fw-bold'>Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Footerend />
        </div>
    )
}

export default Login