import React, {useContext, useState} from 'react';
import styles from './SignUp.module.css'
import CustomButton from "../Button/Button";
import {AuthContext} from "../../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await createUser(email, password)
            navigate('/')
        } catch (e){
            setError(mapAuthCodeToMessage(e.message))
            console.log(e.message)
        }
    }

    const mapAuthCodeToMessage = (authCode) => {
        switch (authCode) {
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                return "Password should be at least 6 characters.";
      
            case "Firebase: Error (auth/invalid-email).":
                return "Email provided is invalid.";
            
            case "Firebase: Error (auth/user-not-found).":
                return "User does not exist.";
            
            case "Firebase: Error (auth/email-already-in-use).":
                return "Email is already in use.";

      
          // Many more authCode mapping here...
      
          default:
            return "Unsupported error occured (check your internet connection).";
        }
      }

    return (
        <div>

            <div className={styles.signUpBackground}>


                <div className={styles.signUpTextHeader}>Sign in form:</div>
                <div className={styles.signUpFormInnerBackground}>
                    <div>
                        <div className={styles.signUpText}>Enter your e-mail:</div>
                        <div className={styles.enterInputForm}>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'  />
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <div className='sign-in-text'>Enter password:</div>*/}
                    {/*    <div className='enter-input-form'>*/}
                    {/*        <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'  />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div>
                        <div className={styles.signUpText}>Enter password:</div>
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

export default SignUp;