import React, {useEffect, useState} from 'react'
import styles from './Pagination.module.css'
import {ReactComponent as NavIcon} from '../../static/svg/nav-arrow.svg'

const Pagination = ({handlePageChange, actualPage}) => {

    const [disablePrevButton, setDisablePrevButton] = useState(true);
    useEffect(() => {
        actualPage <= 1 ? setDisablePrevButton(true) : setDisablePrevButton(false)
    },[actualPage])

    return (
    <div className={styles.pageSectionOuter}>
        <NavIcon className={styles.prevIcon} onClick={() => handlePageChange(-1)}
                 style={disablePrevButton ? {opacity:'0.7', pointerEvents:'none'} : {opacity:'1'}}
        />
        <p>{actualPage}</p>
        <NavIcon className={styles.nextIcon} onClick={() => handlePageChange(1)}
        />
    </div>
    )
}

export default Pagination