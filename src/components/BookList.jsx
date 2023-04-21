import { red } from '@mui/material/colors'
import React, {useState} from 'react'
import SingleBook from './SingleBook/SingleBook'
// import Skeletons from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
import ExploreSkeleton from "./Skeletons/ExploreSkeleton/ExploreSkeleton";
const BookList = ({bookList, typing, toggleFormVisibility, setCurrentBook}) => {



    return (
    <>
      <div className='booklist-section' style={{
        // backgroundColor:'red',
        height:'65vh',
        display: 'flex',
        flexDirection: 'row',
        width: 'calc(100vw - 27vw)',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
         {typing ?
             [1,2,3,4,5,6,7,8,9].map((n) => <ExploreSkeleton key={n}/>)
             :
             bookList.map(book => <SingleBook key={book.id} book = {book} typing={typing} toggleFormVisibility={toggleFormVisibility} setCurrentBook={setCurrentBook}/>)}
      </div>
    </>
  )
}

export default BookList