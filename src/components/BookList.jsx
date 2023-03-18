import { red } from '@mui/material/colors'
import React from 'react'
import SingleBook from './SingleBook/SingleBook'

const BookList = ({bookList}) => {
  console.log("XD")
  console.log(bookList)

  return (
    <>
      <div>BookList</div>
      <div className='booklist-section' style={{
        backgroundColor:'red',
        height:'65vh',
        display: 'flex',
        flexDirection: 'row',
        width: 'calc(100vw - 27vw)',
        flexWrap:'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        {/* {bookList.map(book => <SingleBook key={book.id} book = {book}/>)} */}
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
        <SingleBook key='1' book = 'xd'/>
      </div>
      {/* {console.log("Boklist")} */}
    </>
  )
}

export default BookList