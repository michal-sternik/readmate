import React from 'react'
import './SingleBook.css'
import Image from '../../static/images/defaultimgcover.jpg';
import {ReactComponent as Icon} from '../../static/svg/addBook.svg';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
const SingleBook = ({book, typing}) => {
    const thumbnailSrc = typeof book.volumeInfo.imageLinks === 'undefined'? Image: book.volumeInfo.imageLinks.thumbnail
    const bookCategory = typeof book.volumeInfo.categories === 'undefined'?  'Other' : book.volumeInfo.categories
  return (
    <>

        <div className='book-background'>
                <a href={book.volumeInfo.previewLink}>
                    <img src={thumbnailSrc} className='book-image'/>
                </a>
                <div className='book-info'>
                    <p className='book-title'>{book.volumeInfo.title}</p>
                    <p className='book-author'>{book.volumeInfo.authors}</p>
                    <p className='book-release-date'>{book.volumeInfo.publishedDate}</p>
                    <div className='type-and-add'>
                        <div className='book-category-panel'><span className='book-category'>{bookCategory}</span></div>
                        <Tooltip title="Add this book!" placement="right">
                            <IconButton
                                onClick={()=>console.log('test')}
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