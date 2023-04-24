import React from 'react'
import './features4.css';
import bennett from '../../assets/bennett.jpg'
import iitd from '../../assets/iitd.jpg'
import iitb from '../../assets/iitb.jpg'
// import aiims from '../../assets/aiims.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
// import bennett from '../../assets/bennett.jpg'
import { GrLocationPin } from 'react-icons/ri';

const Features4 = () => {
  return (
    <div className='colleges'>
    <div class="card">
  <div class="img-card">
  <img src={bennett} />
  </div>
  <div class="info-card">
  <a href='https://www.bennett.edu.in/'><p className='c_name'><strong>Jaypee University</strong></p></a>
    <div className='info'>
    <p>Fees: 15,00,000</p>
    </div>
  </div>
  
</div>

<div class="card">
  <div class="img-card">
  <img src={iitd} />
  </div>
  <div class="info-card">
  <a href='https://www.bennett.edu.in/'> <p className='c_name'><strong>JSS Engineering college</strong></p></a>
    <div className='info'>
    <p>Fees: 10,76,000</p>
    </div>
  </div>
  
</div>


<div class="card">
  <div class="img-card">
  <img src={iitb} />
  </div>
  <div class="info-card">
  <a href='https://www.bennett.edu.in/'><p className='c_name'><strong>NSUT Delhi</strong></p></a>
    <div className='info'>
    <p>Fees: 9,52,000</p>
    </div>
  </div>
  
</div>



{/* <div class="card">
  <div class="img-card">
  <img src={bennett} />
  </div>
  <div class="info-card">
    <p className='c_name'><strong>Bennett University</strong></p>
    <div className='info'>
    <p>Fees: 15$</p>
    </div>
  </div>
  
</div> */}






</div>

  )
}

export default Features4