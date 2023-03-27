import React, {useEffect, useState} from 'react';
import './Callendar.css'
import CallendarNavigation from "../CallendarNavigation/CallendarNavigation";
import SingleCallendarDay from "../SingleCallendarDay/SingleCallendarDay";
const Callendar = () => {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [actualDate, setActualDate] = useState(new Date())

    const threeDaysAgo = new Date(actualDate)
    threeDaysAgo.setDate(actualDate.getDate()-3)
    const inThreeDays = new Date(actualDate)
    inThreeDays.setDate(actualDate.getDate()+3)

    let actual7DaysRange = []

    for (threeDaysAgo; threeDaysAgo <= inThreeDays; threeDaysAgo.setDate(threeDaysAgo.getDate() + 1)) {
        actual7DaysRange.push(new Date(threeDaysAgo))
    }


    const handleDateChange = (direction) => {
        if(direction === -1) {
            setActualDate(new Date(actualDate.getTime() - 1000 * 60 * 60 * 24 * 7))
            // threeDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
            // inThreeDays = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
            // for (threeDaysAgo; threeDaysAgo <= inThreeDays; threeDaysAgo.setDate(threeDaysAgo.getDate() + 1)) {
            //     actual7DaysRange.push(new Date(threeDaysAgo))
            // }
            // console.log("XD")
        }
        else if(direction === 1){
            setActualDate(new Date(actualDate.getTime() + 1000 * 60 * 60 * 24 * 7))


            // threeDaysAgo = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
            // inThreeDays = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
            // for (threeDaysAgo; threeDaysAgo <= inThreeDays; threeDaysAgo.setDate(threeDaysAgo.getDate() + 1)) {
            //     actual7DaysRange.push(new Date(threeDaysAgo))
            // }
            // console.log("XD")

        }
    }
    useEffect(() => {
        const threeDaysAgo = new Date(actualDate)
        threeDaysAgo.setDate(actualDate.getDate()-3)
        const inThreeDays = new Date(actualDate)
        inThreeDays.setDate(actualDate.getDate()+3)

        actual7DaysRange = []

        for (threeDaysAgo; threeDaysAgo <= inThreeDays; threeDaysAgo.setDate(threeDaysAgo.getDate() + 1)) {
            actual7DaysRange.push(new Date(threeDaysAgo))
        }
    }, [actualDate]);



    const month = months[actualDate.getMonth()]
    // const day = actualDate.getDate()
    // console.log(month, day)
    // console.log(threeDaysAgo)
    // console.log(inThreeDays)

     return (
        <div className='home-callendar'>
            <div className='callendar-nav-section'>
                <div className='callendar-title-and-nav'>
                    <span>{month} 2023</span>
                    <CallendarNavigation
                        handleDateChange={handleDateChange}
                        dateRange = {[actual7DaysRange[0], actual7DaysRange[6]]}
                    />
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
