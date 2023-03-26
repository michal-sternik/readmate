import React from 'react';
import './Callendar.css'
import CallendarNavigation from "../CallendarNavigation/CallendarNavigation";
import SingleCallendarDay from "../SingleCallendarDay/SingleCallendarDay";
const Callendar = () => {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const actualDate = new Date()
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    const inThreeDays = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    const actual7DaysRange = []

    for (threeDaysAgo; threeDaysAgo <= inThreeDays; threeDaysAgo.setDate(threeDaysAgo.getDate() + 1)) {
        actual7DaysRange.push(new Date(threeDaysAgo))
    }
    console.log(actual7DaysRange)

    const month = months[actualDate.getMonth()]
    // const day = actualDate.getDate()
    // console.log(month, day)
    // console.log(threeDaysAgo)
    // console.log(inThreeDays)

     return (
        <div className='home-callendar'>
            <div className='callendar-nav-section'>
                <div className='callendar-title-and-nav'>
                    <span>May 2023</span>
                    <CallendarNavigation/>
                </div>
                <button>Expand</button>
            </div>
            <div className='callendar-main-section'>
                {actual7DaysRange.map(day => <SingleCallendarDay date={day}/> )}
                {/*TODO - single callendar card - actual7DaysRange.map(day => ...)*/}
            </div>
        </div>
    );
};

export default Callendar;
