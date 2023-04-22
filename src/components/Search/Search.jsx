import React, {useContext, useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import styles from './Search.module.css'
import Flag from 'react-world-flags'
import {NavLink, useNavigate} from 'react-router-dom';
import MUIToggler from "../MUIToggler/MUIToggler";
import {AuthContext} from "../../context/AuthProvider";
import {ReactComponent as Icon} from '../../static/svg/logout.svg';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


const Search = ({setBookList, actualPage, resetPageNumber, typing, setIsTyping}) => {

  const [searchQuery, setSearchQuery]  = useState("")
  const [startIndex, setStartIndex]  = useState(0)
  const [togglerChecked, setTogglerChecked]  = useState(false)

  const {currentUser, logout} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log("You are logged out")
    } catch (e){
      console.log(e.message)
    }

  }
  const handleChange = (e) => {
    console.log(typing)
    setSearchQuery(e.target.value)
    resetPageNumber()
  }

  const handleTogglerChange = () => {
    setTogglerChecked(!togglerChecked)
    resetPageNumber()
  }
  const resetToggler = () => {
    setTogglerChecked(false)
  }

  useEffect(() => {
    setStartIndex(actualPage*9 - 9)
    console.log(`Actual page: ${actualPage}`)
    if (togglerChecked) {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=9&startIndex=${startIndex}&langRestrict=pl`)
          .then(data => {
                setBookList(data.data.items)
              }
          )
    }
    else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=9&startIndex=${startIndex}`)
          .then(data => {
                setBookList(data.data.items)
              }
          )
    }
  }, [actualPage, togglerChecked])

  useEffect(() => {
    resetToggler()
    setIsTyping(true)
    // Update the document title using the browser API
    const timer = setTimeout(() => {

      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=9&startIndex=${startIndex}`)
        .then(data => {
          setBookList(data.data.items)
        }
      )
      setIsTyping(false)
    }, 400)
    return () => {
      clearTimeout(timer)

    }
  },[searchQuery]);



  //styles
  const hidden_input = document.getElementsByClassName(styles.inputOptions)
  const enter_input = document.getElementsByClassName(styles.enterInput)

  const handleInputOptionsVisibility = () => {

    hidden_input[0].style.opacity = '1'
    hidden_input[0].style.boxShadow = '0px 6px 14px -5px rgba(0, 0, 0, 0.5)'
    enter_input[0].style.boxShadow = '0px -6px 14px -5px rgba(0, 0, 0, 0.5)'
    enter_input[0].style.borderRadius = '40px 40px 0px 0px'

    navigate('explore')
  }

  return (
    // <input type='text' placeholder='Enter book title...' onChange={handleChange} value={searchQuery}></input>
    <>

      <p className={styles.explore}>{typing ? 'Exploring:' : 'Explore:'} </p>
      <div className={styles.searchAndLogin}>
        <div className={styles.searchBar}>

          <div className={styles.enterInput}>
            {/* <input type='text'>Click and start typing ...</input> */}
            <input onChange={handleChange} onClick={handleInputOptionsVisibility} type='text' placeholder='Click and start typing ...' value={searchQuery} />

          </div>
          <div className={styles.inputOptions}>
            <div className={styles.inputOptionsBackground}>
              <div>only in</div>
              <Flag code={ 'pl' } height='18' style={{
                filter: 'drop-shadow(0px 0px 3px #000000)',
                borderRadius: '8px'
              }} />
              <MUIToggler onChange={handleTogglerChange} checked={togglerChecked}sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "black"
                },
                "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                  backgroundColor: '#E9E9EA'
                },

              }}/>
            </div>
          </div>

        </div>

        <div className={styles.authSection}>
          {currentUser ?
              (
              <>
                {/* {console.log(currentUser.uid)} */}
                <div>{currentUser.email}</div>
                <Tooltip title="Logout!" placement="right">
                    <IconButton
                        onClick={handleLogout}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Icon />
                    </IconButton>
                </Tooltip>
              </>
              )
            :
              (
                <>
                  <div className={styles.login}>
                    <NavLink to='/log-in' style={{textDecoration:'none'}}>
                      <div >LOG IN</div>
                    </NavLink>
                  </div>
                  <div className={styles.signUp}>
                    <NavLink to='/sign-up' style={{textDecoration:'none'}}>
                      <div >SIGN UP</div>
                    </NavLink>
                  </div>
                </>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Search