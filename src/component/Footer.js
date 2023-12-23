import React from 'react'
import './Footer.css'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className='bottomButton'>

    <IconButton className='close'>
      <CloseIcon fontSize='large'/>
    </IconButton>

    <IconButton className='favorite'>
      <FavoriteIcon  fontSize='large'/>
    </IconButton>

    </div>
  )
}

export default Footer