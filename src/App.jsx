import React, { useState } from 'react'
import Search from './components/Search/Search'
import BookList from './components/BookList'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Explore from './components/Explore'


const App = () => {

    const [bookList, setBookList] = useState([])
    const [actualPage, changePage] = useState(1)
    const [typing, setIsTyping] = useState(false)


    const handlePageChange = (direction) => {
        changePage(actualPage + direction)
    }
    const resetPageNumber = () => {
        changePage(1)
    }


    return (
    <>

        {/*<Search setBookList = {setBookList}/>*/}
        {/*<BookList bookList = {bookList}/>*/}
        <BrowserRouter>
            <Sidebar setBookList={setBookList}
                     actualPage = {actualPage}
                     resetPageNumber = {resetPageNumber}
                     typing = {typing}
                     setIsTyping = {setIsTyping}
            >
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/explore' element={<Explore
                        handlePageChange = {handlePageChange}
                        actualPage = {actualPage}
                        bookList={bookList}
                        typing = {typing}
                        />}
                    />
                    {/*<Route path='/categories' element={<Categories/>}/>*/}
                    {/*<Route path='/calendar' element={<Callendar/>}/>*/}
                </Routes>
            </Sidebar>

        </BrowserRouter>


    </>
  )
}

export default App