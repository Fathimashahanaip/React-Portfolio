import React, { useRef, useState } from 'react'
import './Navbar.css'
import logoo from '../../assets/logo.png'
import uderline from '../../assets/uderline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menuclose.svg'
import menu_open from '../../assets/menuopen.svg'
import upparrow from '../../assets/uparrow.svg'


const Navbar = () => {
  const [menu, setmenu] = useState()
  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
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
  <img src={logoo} alt="" width={200} height={90} />
  <img src={menu_open} onClick={openMenu} alt="" width={50} height={50} className='nav-mob-open'/>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul  ref={menuRef}  className="navbar-nav">
      <img src={menu_close}  onClick={closeMenu}  alt="" width={50} height={50} className='nav-mob-close' />
      <li className="nav-item active"><AnchorLink className='anchor-link'  href='#hero'>
        <a onClick={()=>setmenu("home")} className="nav-link"  href="#">Home{menu=="home"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a></AnchorLink>
      </li>
      <li  className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#about'>
        <a onClick={()=>setmenu("about")} className="nav-link" href='#'>About Me {menu=="about"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a></AnchorLink>
      </li>
      <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#project'>
        <a onClick={()=>setmenu("project")} className="nav-link" href="#">Projects{menu=="project"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a></AnchorLink>
      </li>
      <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#education'>
        <a onClick={()=>setmenu("education")}className="nav-link" href="#">Education{menu=="education"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a></AnchorLink>
      </li>
      <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#contact'>
        <a onClick={()=>setmenu("contact")}className="nav-link disabled" href="#">Contacts{menu=="contact"?<img src={uderline} alt='' width={50} height={20}/>:<></>}</a></AnchorLink>
      </li>
      <div ><AnchorLink className='anchor-link' offset={50} href='#contact'>
      <button className="nav-connect">Connect with Me</button></AnchorLink>
     
    
</div>


    </ul>
    
 
 

  </div>
</nav>


<div className="upp-arrow">
   <AnchorLink className='anckor-link' offset={50} href='#navbarNav'>     <img src={upparrow} alt=""  width={50} height={50}/></AnchorLink>
        </div> 

    </div>
  )
}

export default Navbar