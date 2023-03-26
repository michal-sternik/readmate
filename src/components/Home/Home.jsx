import React from 'react';
import Search from '../Search/Search'
import './Home.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import Callendar from "../Callendar/Callendar";

const Home = () => {
    return (
        <div className='home-background'>
            <div className='home-background-text'>Your activity:</div>
            <div className='home-statistics'>
                <ProgressBar
                    text='Hours Read:'
                    countFrom={0}
                    countUntil={100}
                    progressBarFill={47}
                />
                <ProgressBar
                    text='Books Read:'
                    countFrom={0}
                    countUntil={50}
                    progressBarFill={14}
                />


            </div>
            <div className='home-background-text'>Track your readings:</div>

            <Callendar/>

        </div>
    );
};

export default Home;