import React from 'react';
import './LogIn.css'
import CustomButton from "../Button/Button";
const LogIn = () => {
    return (
        <div>
            <div className='sign-in-background'>
                <div className='sign-in-text-header'>Log in form:</div>
                <div className='sign-in-form-inner-background'>
                    <div>
                        <div className='sign-in-text'>Enter your e-mail</div>
                        <div className='enter-input-form'>
                            <input type='text' placeholder='example@email.com'  />
                        </div>
                    </div>
                    <div>
                        <div className='sign-in-text'>Enter password:</div>
                        <div className='enter-input-form'>
                            <input type='password' placeholder='********'  />
                        </div>
                    </div>
                    <div className='submit-login'>
                        <CustomButton width='15%' text={'LOG IN'} handleClick={()=>console.log("test")}
                        backgroundColor={ "rgba(195, 136, 255, 1)"}
                        color={'white'}
                        />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default LogIn;