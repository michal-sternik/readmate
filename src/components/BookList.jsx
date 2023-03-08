import React from 'react'
import SingleBook from './SingleBook'

const BookList = ({bookList}) => {
  console.log(bookList)

  return (
    <>
      <div>BookList</div>
      {bookList.map(book => <SingleBook key={book.id} book = {book}/>)}
      {/* {console.log("Boklist")} */}
    </>
  )
}

export default BookList