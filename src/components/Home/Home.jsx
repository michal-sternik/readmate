import React from 'react';
import Search from '../Search/Search'
import styles from './Home.module.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import Callendar from "../Callendar/Callendar";

const Home = () => {
    return (
        <div className={styles.homeBackground}>
            <div className={styles.homeBackgroundText}>Your activity:</div>
            <div className={styles.homeStatistics}>
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
            <div className={styles.homeBackgroundText}>Track your readings:</div>

            <Callendar/>

        </div>
    );
};

export default Home;