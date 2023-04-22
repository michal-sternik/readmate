import React from 'react';
import { FaTh, FaUserAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import {ReactComponent as Icon} from '../../static/svg/logo.svg'
import CustomButton from '../Button/Button'
import Search from '../Search/Search';
import importedStyles from '../Search/Search.module.css'
const Sidebar = ({setBookList, actualPage, resetPageNumber, typing, setIsTyping, children}) => {

    const hidden_input = document.getElementsByClassName(importedStyles.inputOptions)
    const enter_input = document.getElementsByClassName(importedStyles.enterInput)
    

  

    const sidebarNavItems = [
        {
            display: 'Dashboard',
            icon: <FaTh/>,
            to: '/',
            func: function(){
                hidden_input[0].style.opacity = '0'
                enter_input[0].style.boxShadow = '0px 4px 24px -6px rgba(0, 0, 0, 0.75)'
                enter_input[0].style.borderRadius = '40px 40px 40px 40px'
            }
        },
        {
            display: 'Explore',
            icon: <FaUserAlt/>,
            to: '/explore',
            func: function(){
            }

        },
        {
            display: 'Calendar',
            icon: <FaUserAlt/>,
            to: '/calendar',
            func: function(){
            }

        },
        {
            display: 'User',
            icon: <FaUserAlt/>,
            to: '/user',
            func: function(){
            }

        },

    ]

    const style = {
        color: 'red',
        fontWeight: 'bold',
        backgroundColor: 'green'
    }

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.logo}>
                        {/* <img className='logoPng' src='./logo.svg'/> */}
                        <a href='/'><Icon className={styles.logoPng} /></a>
                    </div>
                    <div className={styles.sidebar}>
                        {sidebarNavItems.map((item, index) => (
                            <NavLink to={item.to} key={index} className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            } activeClassName={styles.active}>
                                <CustomButton width='100%' text={item.display} handleClick={item.func}/>
                            </NavLink>
                        ))}
                    </div>
                    <div className={styles.bottomButtons}>
                        <CustomButton width='40%' text='DARKMODE'/>
                        <CustomButton width='40%' text='LANGUAGE'/>

                    </div>
                </div>
            </div>
            <main>
                <Search setBookList={setBookList}
                        actualPage = {actualPage}
                        resetPageNumber = {resetPageNumber}
                        typing = {typing}
                        setIsTyping = {setIsTyping}
                />
                <div>{children}</div>
            </main>
        </div>
    );
};

export default Sidebar;