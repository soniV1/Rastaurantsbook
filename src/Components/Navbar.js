import React from 'react'
import Logo from '../assets/logo.jpg';
  import {Link} from 'react-router-dom';
  import ReorderIcon from '@mui/icons-material/Reorder';
  import '../Styles/Navbar.css';

function Navbar(){
    return (
        <>
      <div className='Navbar'>
          <div className='leftside'>
              <img src={Logo} alt='prop' style={{height:'100px'}}/>
          </div>
          <div className='rightside'>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
               <button>
                   <ReorderIcon/>
               </button>
          </div>
      </div>
        </>
    )
}

export default Navbar;