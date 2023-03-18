import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Search.css'

import { useNavigate } from 'react-router-dom';


const Search = ({setBookList}) => {

  const [searchQuery, setSearchQuery]  = useState("")

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }


  useEffect(() => {
    // Update the document title using the browser API
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=6`)
    .then(data => {
      setBookList(data.data.items)
    }
      )
  },[searchQuery]);

  // const whole_bar = document.getElementsByClassName('search-bar')
  const hidden_input = document.getElementsByClassName('input-options')
  const enter_input = document.getElementsByClassName('enter-input')
  
  const navigate = useNavigate();

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

      <div className='search-and-login'>
        <div className='search-bar'>
          <div className='enter-input'>
            {/* <input type='text'>Click and start typing ...</input> */}
            <input onChange={handleChange} onClick={handleInputOptionsVisibility} type='text' placeholder='Click and start typing ...' value={searchQuery} />

          </div>
          <div className='input-options'>

          </div>

        </div>
        <div className='icon-arrow'>

</div>
        <div className='auth-section'></div>
      </div>
    </>
  )
}

export default Search