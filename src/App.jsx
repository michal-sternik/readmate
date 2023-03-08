import React, { useState } from 'react'
import Search from './components/Search'
import BookList from './components/BookList'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Sidebar from './components/Sidebar/Sidebar'


const App = () => {

    const [bookList, setBookList] = useState([])


  return (
    <>

        {/*<Search setBookList = {setBookList}/>*/}
        {/*<BookList bookList = {bookList}/>*/}
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    {/*<Route path='/explore' element={<Explore/>}/>*/}
                    {/*<Route path='/categories' element={<Categories/>}/>*/}
                    {/*<Route path='/calendar' element={<Callendar/>}/>*/}
                </Routes>
            </Sidebar>

        </BrowserRouter>


    </>
  )
}

export default App