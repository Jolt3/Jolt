import React, { useState } from 'react';
import Logo from '../assets/img/JOLT-logo.png';
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth";
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom'


export const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login,  {data}] = useMutation(LOGIN_USER);
const [username, setUsername] = useState("");
const [register] = useMutation(ADD_USER);
const [message, setMessage] = useState();
const loginHandler = async () => {
    // step 1 validate input fields
    // if inputs are valid, you need a token
    try {
        const {data} = await login({
            variables: {
                email,
                password,
            }
        });
        Auth.login(data.login.token); 


        
        const userAlias = data.login.user.username
        const isName = sessionStorage.getItem('username')
        if (isName){
            sessionStorage.removeItem('username')
            sessionStorage.setItem('username', userAlias)
        }   sessionStorage.setItem('username', userAlias)
    

        // const userData = await fetch(`api/user/${userAlias}`, {
        //     method:'GET'
        // });
        // const response = await userData.json()
        // console.log(response)


    } catch (e) {
        console.error(e);
        setMessage("Email or Password Invalid!")
        
    }
   
}

// const [register, {error, data}] = useMutation(ADD_USER);


const registerHandler = async () => {


    try {
        const {data} = await register({
            variables: {
                email,
                password,
                username,
            }
        });
        console.log(data);
        Auth.register(data.addUser.token)



        const userAlias = data.addUser.user.username
        const isName = sessionStorage.getItem('username')
        if (isName){
            sessionStorage.removeItem('username')
            sessionStorage.setItem('username', userAlias)
        } sessionStorage.setItem('username', userAlias)
    } catch (e) {
        console.error(e);
        setMessage("User already exist");
    }
}


    return (
        <div className="section">
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
            <label for="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                    <div className="card-front">
                        <div className="center-wrap">
                            <div className="text-center">
                                <div className='start-right-bg-2'>
                                    <img className='start-right-logo' src={Logo}  />
                                </div>
                                <h4 className="mb-4 pb-3">Log In</h4>
                                <div className="form-group">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-style" placeholder="Email"/>
									<i className="input-icon uil uil-at"></i>
                                </div>
                                <div className="form-group mt-2">
									<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-style" placeholder="Password"/>
									<i className="input-icon uil uil-lock-alt"></i>
								</div>
                                <Link onClick={loginHandler} className="btn mt-4">Login</Link>
                            
                            </div>
                            <p style={{color: 'red'}}>{message}</p>
                        </div>
                    </div>
                    <div className="card-back">
 						<div className="center-wrap">
 							<div className="text-center">
                                <div className='start-right-bg'>
                                    <img className='start-right-logo' src={Logo}  />
                                </div>
 								<h4 className="mb-3 pb-3">Sign Up</h4>
 								<div className="form-group">
 									<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-style" placeholder="UserName"/>
 									<i className="input-icon uil uil-user"></i>
 								</div>	
                                <div className="form-group mt-2">
 									<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-style" placeholder="Email"/>
 									<i className="input-icon uil uil-at"></i>
 								</div>
 								<div className="form-group mt-2">
 									<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-style" placeholder="Password: Must have at least 5 characters"/>
 									<i className="input-icon uil uil-lock-alt"></i>
 								</div>
 									<Link to='/dashboard' onClick={registerHandler} className="btn mt-4">Register</Link>

 				      			</div>
 			      			</div>
 			      		</div>
                </div>
            </div>
        </div>
    )
}