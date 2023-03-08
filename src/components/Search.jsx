import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Search = ({setBookList}) => {

  const [searchQuery, setSearchQuery]  = useState("")

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }


  useEffect(() => {
    // Update the document title using the browser API
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40`)
    .then(data => {
      setBookList(data.data.items)
    }
      )
  },[searchQuery]);

  return (
    <input type='text' placeholder='Enter book title...' onChange={handleChange} value={searchQuery}></input>
  )
}

export default Search