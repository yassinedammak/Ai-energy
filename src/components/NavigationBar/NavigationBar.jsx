import './NavigationBar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx"
import { CgClose as CloseMenu} from 'react-icons/cg' 

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navBar">
      <div className="leftSection">
        <a href='https://github.com/KennethOnuorah/Website' target={'_blank'} style={{textDecoration: "none"}}>
          <div className='companyLogo'>
            <img src='../src/images/globe.png'/>
            <h1>Company</h1>
          </div>
        </a>
        <div className="navDropdowns">
          <h3>About Us</h3>
          <h3>Services</h3>
          <h3>Our Team</h3>
          <h3>Blog</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
      {/* We only want the .menuSection to appear and the .accountSection to disappear only when the screen width gets smaller */}
      <div className="accountSection">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <div className="menuSection">
        {!menuOpen ? <OpenMenu className='menuBtn' onClick={() => setMenuOpen(true)}/>
        : <CloseMenu className='closeBtn' onClick={() => setMenuOpen(false)}/>}
      </div>
    </div>
  )
}

export default NavigationBar
