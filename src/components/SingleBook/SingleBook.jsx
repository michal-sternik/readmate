import React from 'react'
import styles from './SingleBook.module.css'
import Image from '../../static/images/defaultimgcover.jpg';
import {ReactComponent as Icon} from '../../static/svg/addBook.svg';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
const SingleBook = ({book, typing, toggleFormVisibility, setCurrentBook}) => {
    const thumbnailSrc = typeof book.volumeInfo.imageLinks === 'undefined'? Image: book.volumeInfo.imageLinks.thumbnail
    const bookCategory = typeof book.volumeInfo.categories === 'undefined'?  'Other' : book.volumeInfo.categories
  return (
    <>

        <div className={styles.bookBackground}>
                <a className={styles.bookImageLink} href={book.volumeInfo.previewLink}>
                    <img src={thumbnailSrc} className={styles.bookImage}/>
                </a>
                <div className={styles.bookInfo}>
                    <p className={styles.bookTitle}>{book.volumeInfo.title}</p>
                    <p className={styles.bookAuthor}>{book.volumeInfo.authors}</p>
                    <p className={styles.bookReleaseDate}>{book.volumeInfo.publishedDate}</p>
                    <div className={styles.typeAndAdd}>
                        <div className={styles.bookCategoryPanel}><span className={styles.bookCategory}>{bookCategory}</span></div>
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
                                <Icon className={styles.addBookIcon}/>
                            </IconButton>
                        </Tooltip>
                    </div>

                </div>
            </div>

    </>
  )
}

export default SingleBook