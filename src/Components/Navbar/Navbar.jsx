import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logoo from '../../assets/logo.png'
import uderline from '../../assets/uderline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menuclose.svg'
import menu_open from '../../assets/menuopen.svg'
import upparrow from '../../assets/uparrow.svg'


const Navbar = () => {
  const [menu, setmenu] = useState()
  const [showUpArrow, setShowUpArrow] = useState(false)
  const menuRef=useRef()
  const upArrowRef=useRef()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowUpArrow(true)
        if (upArrowRef.current) {
          upArrowRef.current.classList.add('visible')
        }
      } else {
        setShowUpArrow(false)
        if (upArrowRef.current) {
          upArrowRef.current.classList.remove('visible')
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("home", "#hero");}} className="nav-link" href="#hero">About{menu=="home"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("experience", "#experience");}} className="nav-link" href='#experience'>Experience {menu=="experience"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("skills", "#skills");}} className="nav-link" href="#skills">Skills{menu=="skills"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("project", "#project");}} className="nav-link" href="#project">Projects{menu=="project"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a>
      </li>
      <li className="nav-item">
        <a onClick={(e)=>{e.preventDefault(); handleLinkClick("contact", "#contact");}} className="nav-link disabled" href="#contact">Contact{menu=="contact"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a>
      </li>
      <li>
        <button onClick={(e)=>{e.preventDefault(); handleLinkClick("contact", "#contact");}} className="nav-connect">Connect with Me</button>
      </li>
    </ul>
    
 
 

  </div>
</nav>


<div className="upp-arrow" ref={upArrowRef}>
   <AnchorLink className='anckor-link' offset={50} href='#hero'>     <img src={upparrow} alt="Scroll to top"  width={50} height={50}/></AnchorLink>
        </div> 

    </div>
  )
}

export default Navbar