import React from 'react'

const SingleBook = ({book}) => {
    // let thumbnail = ""

    // if (typeof book.volumeInfo.imageLinks === 'undefined'){ 
    //     console.log("undefined")
    //     thumbnail = <div>no img cover.</div>
    // }
    // else{       
    //      console.log(book.volumeInfo.imageLinks.thumbnail)
    //      thumbnail = <img src = {book.volumeInfo.imageLinks.thumbnail} alt="DX"></img>
    // }
    // let thumbnail = book.volumeInfo.imageLinks.thumbnail != 'undefined'? book.volumeInfo.imageLinks.thumbnail : <div>No img cover.</div>
    let thumbnail = typeof book.volumeInfo.imageLinks === 'undefined'?  <div>No img cover.</div>:<img src={book.volumeInfo.imageLinks.thumbnail} alt="ziema"></img>
  return (
    <>
        {thumbnail}
        <h1>{book.volumeInfo.title}</h1>
        <h3>{book.volumeInfo.authors}</h3>
        <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br/>
        <a href={book.volumeInfo.previewLink}><button>More</button></a>
        <br></br>
    </>
  )
}

export default SingleBook