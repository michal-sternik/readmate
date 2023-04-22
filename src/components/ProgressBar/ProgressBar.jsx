import React from 'react';
import styles from './ProgressBar.module.css';
import styled, { keyframes, css } from 'styled-components';


const ProgressBarFill = styled.div`
      border-radius: 40px;
      height: 100%;
      position: relative;
      background: linear-gradient(270deg, #FF7FFF -11.45%, #A449FF 100%);
      animation: ${(props) => (css`${props.animationKeyframes} 1s cubic-bezier(0.1, 0.2, 0.3, 1.0)` )} ;
      animation-fill-mode: forwards;
    `;

const ProgressBar = ({text, countFrom, countUntil, progressBarFill}) => {

    const fillPercentage = ( progressBarFill / (countUntil - countFrom) ) * 100

    const slide = keyframes`
      from {
        width: 0;
      }
      to {
        width: ${fillPercentage}%;
      }`;

    return (
        <>
            <div className={styles.statisticsText}>{text}</div>
            <div className={styles.progressBar}>
                <span>{countFrom}</span>

                <ProgressBarFill  animationKeyframes={slide}/>
                <span style={{ left: `${fillPercentage-1}%` }} >{progressBarFill}</span>
                <div className={styles.progressBarPointer} style={{ left: `${fillPercentage}%` }}></div>
                <span>{countUntil}</span>

            </div>
        </>
    );
};

export default ProgressBar;
