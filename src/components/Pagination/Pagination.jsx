import React, {useEffect, useState} from 'react'
import './Pagination.css'
import {ReactComponent as NavIcon} from '../../static/svg/nav-arrow.svg'

const Pagination = ({handlePageChange, actualPage}) => {

    const [disablePrevButton, setDisablePrevButton] = useState(true);
    useEffect(() => {
        actualPage <= 1 ? setDisablePrevButton(true) : setDisablePrevButton(false)
    },[actualPage])

    return (
    <div className='page-section-outer'>
        <NavIcon className='prev-icon' onClick={() => handlePageChange(-1)}
                 style={disablePrevButton ? {opacity:'0.7', pointerEvents:'none'} : {opacity:'1'}}
        />
        <p>{actualPage}</p>
        <NavIcon className='next-icon' onClick={() => handlePageChange(1)}
        />
    </div>
    )
}

export default Pagination