import React from 'react'
import './SingleBook.css'
import Image from '../../static/images/defaultimgcover.jpg';
import {ReactComponent as Icon} from '../../static/svg/addBook.svg';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
const SingleBook = ({book, typing, toggleFormVisibility, setCurrentBook}) => {
    const thumbnailSrc = typeof book.volumeInfo.imageLinks === 'undefined'? Image: book.volumeInfo.imageLinks.thumbnail
    const bookCategory = typeof book.volumeInfo.categories === 'undefined'?  'Other' : book.volumeInfo.categories
  return (
    <>

        <div className='book-background'>
                <a className='book-image-link' href={book.volumeInfo.previewLink}>
                    <img src={thumbnailSrc} className='book-image'/>
                </a>
                <div className='book-info'>
                    <p className='book-title'>{book.volumeInfo.title}</p>
                    <p className='book-author'>{book.volumeInfo.authors}</p>
                    <p className='book-release-date'>{book.volumeInfo.publishedDate}</p>
                    <div className='type-and-add'>
                        <div className='book-category-panel'><span className='book-category'>{bookCategory}</span></div>
                        <Tooltip title="Add this book!" >
                            <IconButton
                                onClick={() => {
                                    setCurrentBook({
                                        "title": `${book.volumeInfo.title}`, 
                                        "authors": `${book.volumeInfo.authors}`, 
                                        "publishedDate": `${book.volumeInfo.publishedDate}`,
                                        "category": {bookCategory},
                                        "imageLink": {thumbnailSrc}
                                    })
                                    toggleFormVisibility()
                                }}
                                size="small"
                                sx={{ ml: 2 }}
                            >
                                <Icon className='add-book-icon'/>
                            </IconButton>
                        </Tooltip>
                    </div>

                </div>
            </div>

    </>
  )
}

export default SingleBook