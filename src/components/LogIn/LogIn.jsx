import React, {useContext, useState} from 'react';
import './LogIn.css'
import CustomButton from "../Button/Button";
import {AuthContext} from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import {auth} from "../../firebase"

const LogIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {signInWithEmailAndPassword} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()
        setError("")
        //i've passed original function here, because i couldn't use useNavigate() in my AuthProvider - it's above all routes components
            await signInWithEmailAndPassword(auth, email, password)
                .then( () => navigate('/') )
                .catch(err => {
                    setError(e.message)
                    console.log("error occured : " + err)
                })
    }

    return (
        <div>
            <div className='sign-in-background'>
                    <div className='sign-in-text-header'>Log in form:</div>
                    <div className='sign-in-form-inner-background'>
                        <div>
                            <div className='sign-in-text'>Enter your e-mail</div>
                            <div className='enter-input-form'>
                                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'  />
                            </div>
                        </div>
                        <div>
                            <div className='sign-in-text'>Enter password:</div>
                            <div className='enter-input-form'>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='********'  />
                            </div>
                        </div>
                        <div className='submit-login'>
                            <CustomButton width='15%' text={'SIGN IN'}
                                          backgroundColor={ "rgba(195, 136, 255, 1)"}
                                          color={'white'}
                                          handleClick={handleSubmit}
                            />
                        </div>
                    </div>

            </div>


        </div>
    );
}

export default LogIn;