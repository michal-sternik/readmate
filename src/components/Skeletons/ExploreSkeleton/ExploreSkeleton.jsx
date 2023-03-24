import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import './ExploreSkeleton.css'
import { Circles } from  'react-loader-spinner'
const ExploreSkeleton = () => {
    return (

        <div className='book-background-skeleton'>
            <Circles
                height="80"
                width="80"
                color="rgba(190, 125, 255, 1)"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default ExploreSkeleton;
