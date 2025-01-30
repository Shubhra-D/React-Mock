import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

  
  
    return (
    <div className='navbar'>
       <div className='left'>
       <Link className="link" to="/">Home</Link>
       <Link className="link" to="/books">Books</Link>
       </div>
       <div className='right'>
       <Link className="link" to="/login">Login</Link>
       </div>
    </div>
  )
}

export default Navbar
