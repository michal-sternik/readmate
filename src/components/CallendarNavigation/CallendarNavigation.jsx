import React from 'react';
import './CallendarNavigation.css'
import {ReactComponent as NavIcon} from '../../static/svg/nav-arrow-pink.svg'


const CallendarNavigation = () => {
    return (
        <div className='callendar-navigation-background'>
            <NavIcon onClick={() => console.log('prev')}
                 style={{
                     width:'25%',
                     height:'25%'
                 }}
            />
            <div>05.07 / 12.07</div>
            <NavIcon onClick={() => console.log('prev')}
                     style={{
                         width:'25%',
                         height:'25%',
                         rotate:'180deg'
                     }}
            />

        </div>
    );
};

export default CallendarNavigation;
