import React, {useState} from 'react';
import Logo from '../img/logo.png';
import {useNavigate, Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



function Login() {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        }catch(err){
            setErr(true);
        }

        
    }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            
            <img src={Logo} alt="logo" />
            <span className='logo'>
                Chat App
            </span>
            <span className='title'>
                Login
            </span>
            
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign in</button>
                {err && <span style={{color:'red'}}>Something went wrong</span>}

            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login