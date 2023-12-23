import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InboxIcon from '@mui/icons-material/Inbox';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='tinder-header'>
        <IconButton className='header-icons' fontSize='large'>
        <PermIdentityIcon className='header-icons' fontSize='large' />
        </IconButton>

        <img src='https://media.istockphoto.com/id/1193289757/vector/heart-in-hands.jpg?s=612x612&w=0&k=20&c=ZgGQbwVkKArucl71DuW9iLmu155dM3k_WGZGsctsVlY=' alt='' />
        
        <IconButton className='header-icons' fontSize='large'>
        <InboxIcon className='header-icons' fontSize='large' />
        </IconButton>
    </div> 
  )
}

export default Header