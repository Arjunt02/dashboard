import { ChevronDown } from 'feather-icons-react/build/IconComponents'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>

    <div className='navbar'>
       <img src="https://asset.brandfetch.io/idEv3rmw3p/id4TbMs60B.jpeg"  alt="icon" />
        <div className='navbar-text'>
            <p>XYZ Enterprises Pvt. Ltd</p>
            <div className='icon'><ChevronDown/></div>
        </div>
    </div>

        
        
    </>
  )
}

export default Navbar