import './NavigationBar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx"
import { CgClose as HideMenu} from 'react-icons/cg' 

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navBar">
      <div className="leftSection">
        <a href='https://github.com/KennethOnuorah/Website' target={'_blank'} style={{textDecoration: "none", outline: "none"}}>
          <div className='companyLogo'>
            <img src='../src/images/globe_icon.png'/>
            <h1>Company</h1>
          </div>
        </a>
          <div className="navBtns">
            <div className="navDropdown">
              <button>About Us</button>
              <div className="aboutDropdownMenu">
                <div className="menuItem">
                  <h3>Who We Are</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                      Get to know more about our business and what we do to serve our fellow communities.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Our Mission</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                      Our mission at Company is to make a positive impact in the world through our work.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Meet the Team</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                      See all the amazing members of our team who help make our goals become reality.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="navDropdown">
              <button>Services</button>
              <div className="serviceDropdownMenu">
                <div className="menuItem">
                  <h3>Service #1</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #2</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #3</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="menuItem">
                  <h3>Service #4</h3>
                  <hr/>
                  <div className="dropdownDescription">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      <span>
                        <a href='#' style={{textDecoration: "none"}}> Learn more.</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button>Community</button>
            <button>Blog</button>
            <button>Contact Us</button>
          </div>
      </div>
      <div className='rightSection'>
        <div className="accountSection">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <div className="menuSection">
          {
            !menuOpen ? 
              <OpenMenu className='menuBtn' onClick={() => setMenuOpen(true)}/> : 
              <HideMenu className='hideBtn' onClick={() => setMenuOpen(false)}/>
          }
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
