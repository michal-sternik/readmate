import React from 'react';
import { FaTh, FaUserAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import Button from '@material-ui/core/Button';
const Sidebar = ({children}) => {

    const sidebarNavItems = [
        {
            display: 'Dashboard',
            icon: <FaTh/>,
            to: '/',
        },
        {
            display: 'Getting Started',
            icon: <FaUserAlt/>,
            to: '/explore',
        },
        {
            display: 'Calendar',
            icon: <FaUserAlt/>,
            to: '/categories',
        },
        {
            display: 'User',
            icon: <FaUserAlt/>,
            to: '/calendar',
        },
    ]

    return (
        <div className='App'>
            <div className='container'>
                <div className='inner-container'>
                    <div className='logo'>
                        <img className='logoPng' src={require('./logo.svg')}/>
                    </div>
                    <div className='sidebar'>
                        {sidebarNavItems.map((item, index) => (
                            <NavLink to={item.to} key={index} className='link' activeClassName='active'>
                                <Button variant="text" className='nav-button' style={{
                                    borderRadius: 50,
                                    backgroundColor: "white",
                                    color:"black",
                                    width: '100%',
                                    hover: "green",


                                }}>
                                    {item.display} {item.icon}
                                </Button>
                                {/*<div className='link_text'></div>*/}
                                {/*<div className='icon'></div>*/}
                            </NavLink>
                        ))}
                    </div>
                    <div className='bottom-buttons'>
                        <Button variant="text" className='nav-button' style={{
                            borderRadius: 50,
                            backgroundColor: "white",
                            color:"black",
                            width: '40%',
                            boxShadow: '0px 4px 24px -6px rgba(0, 0, 0, 0.5)',



                        }}>
                            DARKMODE
                        </Button>
                        <Button variant="text" className='nav-button' style={{
                            borderRadius: 50,
                            backgroundColor: "white",
                            color:"black",
                            fontFamily: 'Montserrat',
                            width: '40%',
                            boxShadow: '0px 4px 24px -6px rgba(0, 0, 0, 0.5)',



                        }}>
                            LANGUAGE
                        </Button>

                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;