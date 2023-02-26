import React from 'react'
// import './header.css';
import ai from '../../assets/ai.png';
// import people from '../../assets/people.png';
import people from '../../assets/people.png'
import college from '../../assets/college.png'
import './header.css';

const Header = () => {
  return (
    <div className='header_main header_padding' id='main'>
      <div className='header_content'>
        <h1 className='title_bg'>FIND THE COLLEGE
THAT FITS YOU BEST</h1>
        <p>We believe that every student deserves the opportunity to find the college that's right for them, and we're here to make that process as easy and efficient as possible. So start exploring our listings and discover the possibilities that await you!</p>
        <div className='header_input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Strated</button>
        </div>
        <div className='header_people'>
          <img src={people} alt='people'/>
          <p>1600 people requested access to the site</p>
        </div>
        {/* <div className='header_ai'>
          <img src={ai} alt='ai'/>
        </div> */}
        
    </div>
    <div className='header_ai'>
          <img src={college} alt='ai'/>
        </div>
    </div>
  )
}

export default Header