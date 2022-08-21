import React,  {useState}  from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
    }

    const register = event => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            
            <Link to="/">
                <img className="login__logo" alt="" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                     <h5>E-mail</h5>
                     <input type="text" onChange={event => setEmail(event.target.value)} value={email}/>

                     <h5>Password</h5>
                     <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>

                     <button onClick={signIn} className="login__signInButton">Sign-in</button>
                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__button">Create your amazon account</button>
            </div>
        </div>
    )
}


export default Login
