import React from 'react'
import Button from '@mui/material/Button';
import styles from './Button.module.css';
import { StyledEngineProvider } from '@mui/material/styles';


const CustomButton = ({width, text, handleClick, backgroundColor= "white", color="black",

                      }) => {
  return (
      <StyledEngineProvider injectFirst>
        <Button variant="text" className={styles.navButton} sx={{
            backgroundColor: {backgroundColor},
            color:{color},
            width: {width},

        }}
        onClick={handleClick}
        >{text}</Button>
      </StyledEngineProvider>
  )
}

export default CustomButton