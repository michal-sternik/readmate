import React, {useEffect, useState} from 'react'
import BookList from './BookList'
import Pagination from './Pagination/Pagination'
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
        // console.log("toggleform")
        formVisibility === 'hidden' ? setFormVisibility('visible') : setFormVisibility('hidden')
    }


    return (
    // <div>Explore</div>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>

        <BookList bookList={bookList} typing = {typing} toggleFormVisibility={toggleFormVisibility} setCurrentBook={setCurrentBook}/>

        <div className='page-navigation' style={{
          // backgroundColor:'green',
          height:'10vh',
          justifyContent:'end',
          display:'flex',
          alignItems:'center'
        }}>
            {showPagination ? (<Pagination handlePageChange = {handlePageChange} actualPage = {actualPage}/> ) : null}
        </div>
        
        {/*<AddBook currentBook={currentBook} formVisibility={formVisibility}/>*/}
        



    </div>
    )
}

export default Explore