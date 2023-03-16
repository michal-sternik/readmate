import React from 'react'
import BookList from './BookList'
import Pagination from './Pagination/Pagination'

const Explore = ({bookList}) => {
  return (
    // <div>Explore</div>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
        <BookList bookList={bookList}/>

        <div className='page-navigation' style={{
          backgroundColor:'green',
          height:'10vh',
          justifyContent:'end',
          display:'flex',
          alignItems:'center'
        }}>
          <Pagination/>
        </div>
    </div>
  )
}

export default Explore