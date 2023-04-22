import React from 'react';
import styles from './SingleCallendarDay.module.css'
const SingleCallendarDay = ({date}) => {
    const dateString = date.getMonth()+1 < 10 ? `${date.getDate()}.0${date.getMonth()+1}` : `${date.getDate()}.${date.getMonth()+1}`
    return (
        <>
            <div className={styles.callendarSingleDay} >
                <div className={styles.callendarDates} >{dateString}</div>
                <div>data</div>
            </div>

        </>
    );
};

export default SingleCallendarDay;
