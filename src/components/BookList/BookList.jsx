import React, {useState} from 'react'
import SingleBook from '../SingleBook/SingleBook'
import ExploreSkeleton from "../Skeletons/ExploreSkeleton/ExploreSkeleton";
import styles from './BookList.module.css'
const BookList = ({bookList, typing, toggleFormVisibility, setCurrentBook}) => {



    return (
    <>
      <div className={styles.booklistSection}>
         {typing ?
             [1,2,3,4,5,6,7,8,9].map((n) => <ExploreSkeleton key={n}/>)
             :
             bookList.map(book => <SingleBook key={book.id} book = {book} typing={typing} toggleFormVisibility={toggleFormVisibility} setCurrentBook={setCurrentBook}/>)}
      </div>
    </>
  )
}

export default BookList