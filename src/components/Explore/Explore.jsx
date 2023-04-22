import React, {useEffect, useState} from 'react'
import BookList from '../BookList/BookList'
import Pagination from '../Pagination/Pagination'
import styles from './Explore.module.css'
// import AddBook from './AddBook/AddBook'

const Explore = ({bookList, actualPage, handlePageChange, typing}) => {

    const [showPagination, setShowPagination] = useState(false)
    const [currentBook, setCurrentBook] = useState({})
    const [formVisibility, setFormVisibility] = useState('hidden')



    useEffect(() => {
        if(bookList.length !== 0){
            console.log(bookList.size)
            setShowPagination(true)
        }
    }, [bookList.length])

    const toggleFormVisibility = () => {
        formVisibility === 'hidden' ? setFormVisibility('visible') : setFormVisibility('hidden')
    }


    return (
    // <div>Explore</div>
    <div className={styles.exploreTab} >

        <BookList bookList={bookList} typing = {typing} toggleFormVisibility={toggleFormVisibility} setCurrentBook={setCurrentBook}/>

        <div className={styles.paginationTab}>
            {showPagination ? (<Pagination handlePageChange = {handlePageChange} actualPage = {actualPage}/> ) : null}
        </div>
        
        {/*<AddBook currentBook={currentBook} formVisibility={formVisibility}/>*/}
        



    </div>
    )
}

export default Explore