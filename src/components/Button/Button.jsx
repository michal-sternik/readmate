import React from 'react'
import Button from '@mui/material/Button';


const CustomButton = ({width, text, handleClick, backgroundColor= "white", color="black",

                      }) => {
  return (
    <Button variant="text" className='nav-button' sx={{
        borderRadius: 50,
        backgroundColor: {backgroundColor},
        color:{color},
        width: {width},
        hover: "green",
        fontFamily:'Montserrat',
        boxShadow: '0px 4px 15px 0px rgba(46, 46, 46, 0.2)',
        "&:hover": {
            backgroundColor: "rgba(195, 136, 255, 1)",
            color: 'white',
            transition: '0.2s',
          },

    }}
    onClick={handleClick}
    >{text}</Button>
  )
}

export default CustomButton