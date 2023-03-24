import React, {useEffect, useState} from 'react'
import BookList from './BookList'
import Pagination from './Pagination/Pagination'

const Explore = ({bookList, actualPage, handlePageChange, typing}) => {

    const [showPagination, setShowPagination] = useState(false)


    useEffect(() => {
        if(bookList.length !== 0){
            console.log(bookList.size)
            setShowPagination(true)
        }
    }, [bookList.length])



    return (
    // <div>Explore</div>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>

        <BookList bookList={bookList} typing = {typing}/>

        <div className='page-navigation' style={{
          // backgroundColor:'green',
          height:'10vh',
          justifyContent:'end',
          display:'flex',
          alignItems:'center'
        }}>
            {showPagination ? (<Pagination handlePageChange = {handlePageChange} actualPage = {actualPage}/> ) : null}
        </div>

    </div>
    )
}

export default Explore