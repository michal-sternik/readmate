import React from 'react';
import './ProgressBar.css'
const ProgressBar = ({text, countFrom, countUntil, progressBarFill}) => {
    const fillPercentage = ( progressBarFill / (countUntil - countFrom) ) * 100
    return (
        <>
            <div className='statistics-text'>{text}</div>
            <div className='progress-bar'>
                <span>{countFrom}</span>
                <div className='progress-bar-fill' style={{
                    width: `${fillPercentage}%`,
                    '--from-width':'0%',
                    '--to-width' :`${fillPercentage}%`,
                    animation:' slide 1s cubic-bezier(0.1, 0.2, 0.3, 1.0)',
                }}></div>
                <span style={{ left: `${fillPercentage-1}%` }} >{progressBarFill}</span>
                <div className="progress-bar-pointer" style={{ left: `${fillPercentage}%` }}></div>
                <span>{countUntil}</span>

            </div>
        </>
    );
};

export default ProgressBar;
