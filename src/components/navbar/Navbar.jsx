// import React,{ useState } from 'react'
// import './navbar.css';
// import{RiMenu3Line, RiCloseLine} from 'react-icons/ri'
// import logo from '../../assets/logo.svg'
// // const Menu = () => (
// //   <><p><a href='#Home'>Home</a></p><p><a href='#wgpt'>What is GPT?</a></p><p><a href='#possibility'>OpenAI</a></p><p><a href='#features'>Case Studies</a></p><p><a href='#blog'>Library</a></p></>
// // )

// const Navbar = () => {
//   const[toggleMenu, setToggleMenu] = useState(false); 
//   return (
//     <div className='gpt3__navbar'>
//     <div className='gpt3__navbar-links'>
//       <div className='gpt3__navbar-links_logo'>
//         <img src={logo} alt="logo"/>
//       </div>
//       <div className="gpt3__navbar-links_container">
//           <p><a href="#home">Home</a></p>
//           <p><a href="#wgpt3">What is GPT3?</a></p>
//           <p><a href="#possibility">Open AI</a></p>
//           <p><a href="#features">Case Studies</a></p>
//           <p><a href="#blog">Library</a></p>
//         </div>
//     </div>
//     <div className='gpt3__navbar-sign'>
//       <p>Sign in</p>
//       <button type='button'>Sign up</button>
//     </div>
//     <div className='gpt3__navbar-menu'>
//       {toggleMenu
//       ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
//       : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
// }
// {toggleMenu && (
//   <div className='gpt3__navbar-menu_container scale-up-center'>
//     <div className='gpt__navbar-menu_container-links'>
//     <p><a href="#home">Home</a></p>
//             <p><a href="#wgpt3">What is GPT3?</a></p>
//             <p><a href="#possibility">Open AI</a></p>
//             <p><a href="#features">Case Studies</a></p>
//             <p><a href="#blog">Library</a></p>
//       <div className='gpt3__navbar-menu_container-links'>
//       <p>Sign in</p>
//       <button type='button'>Sign up</button>
//     </div>
//       </div>
//     </div>

// )}
    
//     </div>
//     </div>
    
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} /> */}StepIn
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          {/* <p><a href="wgpt3">Engineering</a></p> */}
          <p><Link to="/wgpt3">Engineering</Link></p>
          {/* <p><a href="#possibility">Medical</a></p> */}
          <p><a href="#features">NIRF 2021</a></p>
          <p><a href="https://www.google.com/">Contact Us</a></p>

        </div>
      </div>
      <div className="gpt3__navbar-sign">
       <Link to='/signup'><p>Sign in</p></Link> 
        <Link to='/signin'><button type="button">Sign up</button></Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;