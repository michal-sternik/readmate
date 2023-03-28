import React from 'react';
import './CallendarNavigation.css'
import {ReactComponent as NavIcon} from '../../static/svg/nav-arrow-pink.svg'


const CallendarNavigation = ({handleDateChange, dateRange}) => {
    const dateStringFrom = dateRange[0].getMonth()+1 < 10 ? `${dateRange[0].getDate()}.0${dateRange[0].getMonth()+1}` : `${dateRange[0].getDate()}.${dateRange[0].getMonth()+1}`
    const dateStringTo = dateRange[1].getMonth()+1 < 10 ? `${dateRange[1].getDate()}.0${dateRange[1].getMonth()+1}` : `${dateRange[1].getDate()}.${dateRange[1].getMonth()+1}`


    return (
        <div className='callendar-navigation-background'>
            <NavIcon onClick={() => handleDateChange(-1)}
                 style={{
                     width:'20%',
                     height:'20%',
                     cursor:'pointer',
                 }}
            />
            <div>{dateStringFrom} / {dateStringTo}</div>
            <NavIcon onClick={() => handleDateChange(1)}
                     style={{
                         width:'20%',
                         height:'20%',
                         rotate:'180deg',
                         cursor:'pointer',

                     }}
            />

        </div>
    );
};

export default CallendarNavigation;
