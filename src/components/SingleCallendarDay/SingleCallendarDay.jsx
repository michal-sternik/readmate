import React from 'react';
import './SingleCallendarDay.css'
const SingleCallendarDay = ({date}) => {
    const dateString = date.getMonth() < 10 ? `${date.getDate()}.0${date.getMonth()}` : `${date.getDate()}.${date.getMonth()}`

    console.log(date)
    return (
        <>
            <div className='callendar-single-day' >
                <div className='callendar-dates' >{dateString}</div>
                <div>data</div>
            </div>

        </>
    );
};

export default SingleCallendarDay;
