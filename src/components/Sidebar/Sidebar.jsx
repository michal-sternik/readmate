import React from 'react';
import { FaTh, FaUserAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import {ReactComponent as Icon} from './logo.svg'
import CustomButton from '../Button/Button'
import Search from '../Search/Search';
const Sidebar = ({setBookList, children}) => {

    const hidden_input = document.getElementsByClassName('input-options')
    const enter_input = document.getElementsByClassName('enter-input')
    

  

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
            display: 'Getting Started',
            icon: <FaUserAlt/>,
            to: '/explore',
            func: function(){
            }

        },
        {
            display: 'Calendar',
            icon: <FaUserAlt/>,
            to: '/categories',
            func: function(){
            }

        },
        {
            display: 'User',
            icon: <FaUserAlt/>,
            to: '/calendar',
            func: function(){
            }

        },
    ]

    return (
        <div className='App'>
            <div className='container'>
                <div className='inner-container'>
                    <div className='logo'>
                        {/* <img className='logoPng' src='./logo.svg'/> */}
                        <a href='/'><Icon className='logoPng' /></a>
                    </div>
                    <div className='sidebar'>
                        {sidebarNavItems.map((item, index) => (
                            <NavLink to={item.to} key={index} className='link' activeClassName='active'>
                                <CustomButton width='100%' text={item.display} handleClick={item.func}/>
                                    {/* {item.display} {item.icon} */}
                                {/*<div className='link_text'></div>*/}
                                {/*<div className='icon'></div>*/}
                            </NavLink>
                        ))}
                    </div>
                    <div className='bottom-buttons'>
                        <CustomButton width='40%' text='DARKMODE'/>
                        <CustomButton width='40%' text='LANGUAGE'/>

                    </div>
                </div>
            </div>
            <main>
                <Search setBookList={setBookList}/>
                <div>{children}</div>
            </main>
        </div>
    );
};

export default Sidebar;