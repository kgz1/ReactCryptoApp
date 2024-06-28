import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
	 <nav>
      <div class="logo">
        <img src="../assets/logoo.jpg" alt="logo" className='logoja'/>
        <Link to={'/'} className='crypto'>CRYPTOMARKET</Link>
      </div>
      <ul>
        <li>
          <Link to={'/'} className='home'>Home</Link>
        </li>
        
        <li>
        <Link to={'/news'}>News</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar