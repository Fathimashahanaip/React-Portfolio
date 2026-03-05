import React, { useRef, useState } from 'react'
import './Navbar.css'
import logoo from '../../assets/logo.png'
import uderline from '../../assets/uderline.png'
import menu_close from '../../assets/menuclose.svg'
import menu_open from '../../assets/menuopen.svg'


const Navbar = () => {
  const [menu, setmenu] = useState()
  const menuRef=useRef()
  
  const openMenu=()=>{
    if (window.innerWidth <= 768 && menuRef.current) {
      menuRef.current.style.transform="translateX(0)";
    }
  }
  const closeMenu=()=>{
    if (window.innerWidth <= 768 && menuRef.current) {
      menuRef.current.style.transform="translateX(-100%)";
    }
  }
  
  const handleLinkClick = (menuName, href) => {
    setmenu(menuName);
    closeMenu();
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      if (href) {
        const element = document.querySelector(href);
        if (element) {
          const navbarHeight = 80; // Approximate navbar height + margin
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          // Use requestAnimationFrame to ensure smooth scroll without layout shifts
          requestAnimationFrame(() => {
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          });
        }
      }
    }, 300);
  }


  return (
    // <div className='navbar'>
    //   <img src={logoo } alt="" width={130}height={100}/>
    //   <ul className='nav-menu'>
    //     <li>Home</li>
    //     <li>About Me</li>
    //     <li>Project</li>
    //     <li>Portfolio</li>
    //     <li>Contact</li>
       
    //   </ul>
    //   <div className="nav-connect">
    //     <button>Connect with Me</button>

    //   </div>
      
<div >
 


<nav className="navbar">
  <img src={menu_open} onClick={openMenu} alt="" width={50} height={50} className='nav-mob-open'/>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul  ref={menuRef}  className="navbar-nav">
      <img src={menu_close}  onClick={closeMenu}  alt="" width={50} height={50} className='nav-mob-close' />
      <li className="nav-item active">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("home", "#hero");}} className="nav-link" href="#hero">About</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("experience", "#experience");}} className="nav-link" href='#experience'>Experience</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("skills", "#skills");}} className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("project", "#project");}} className="nav-link" href="#project">Projects</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("contact", "#contact");}} className="nav-link disabled" href="#contact">Contact</a>
      </li>
      <li>
        <button onClick={(e)=>{e.preventDefault(); handleLinkClick("contact", "#contact");}} className="nav-connect">Connect with Me</button>
      </li>
    </ul>
    
 
 

  </div>
</nav>


    </div>
  )
}

export default Navbar
