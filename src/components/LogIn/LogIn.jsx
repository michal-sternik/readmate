import React, {useContext, useState} from 'react';
import styles from './LogIn.module.css'
import CustomButton from "../Button/Button";
import {AuthContext} from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import {auth} from "../../firebase/firebase"

const LogIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {signInWithEmailAndPassword} = useContext(AuthContext)
    const navigate = useNavigate()

    const mapAuthCodeToMessage = (authCode) => {
        switch (authCode) {
            case "Firebase: Error (auth/wrong-password).":
                return "Password provided is not correct.";
      
            case "Firebase: Error (auth/invalid-email).":
                return "Email provided is invalid.";
            
            case "Firebase: Error (auth/user-not-found).":
                return "User does not exist.";

      
          // Many more authCode mapping here...
      
          default:
            return "Unsupported error occured (check your internet connection).";
        }
      }

    const handleSubmit = async (e) => {

        e.preventDefault()
        setError("")
        //i've passed original function here, because i couldn't use useNavigate() in my AuthProvider - it's above all routes components
            await signInWithEmailAndPassword(auth, email, password)
                .then( () => navigate('/') )
                .catch(err => {
                    console.log("error occured : " + err.message)
                    setError(mapAuthCodeToMessage(err.message))

                })
    }

    return (
        <div>
            <div className={styles.logInBackground}>
                    <div className={styles.logInTextHeader}>Log in form:</div>
                    <div className={styles.logInFormInnerBackground}>
                        <div>
                            <div className={styles.logInText}>Enter your e-mail</div>
                            <div className={styles.enterInputForm}>
                                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'  />
                            </div>
                        </div>
                        <div>
                            <div className={styles.logInText}>Enter password:</div>
                            <div className={styles.enterInputForm}>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='********'  />
                            </div>
                        </div>
                        <div className={styles.submitLogin}>
                            <span style={{color: 'red'}}>{error}</span>
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