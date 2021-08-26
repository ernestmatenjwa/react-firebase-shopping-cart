import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import './login.css'
import { TitleContext } from '../Components/title'

export const Login = (props) => {

    const searchTitle = React.useContext(TitleContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    React.useEffect(() => {
         console.log(searchTitle)
    })

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='background'>
            <div className="loginform">
            <form autoComplete="off" className='form-group' onSubmit={login}>
            <h3>S i g n  I n</h3>
              <br/>
              <hr/>
              <br/><br/><br/><br/>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='log_btn'>LOGIN</button>
                 <br/>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Don't have an account? Register
                <Link to="signup"> Here</Link>
            </span>
            </form>
            </div>
           
        </div>
    )
}
