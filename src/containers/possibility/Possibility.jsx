import React from 'react'
import './possibility.css';
import bennett from '../../assets/bennett.jpg'
import iitd from '../../assets/iitd.jpg'
import iitb from '../../assets/iitb.jpg'


const Possibility = () => {
  return (
    <div className='parent_colleges'>
    <div className='colleges'>
    <div class="card">
  <div class="img-card">
  <img src={bennett} />
  </div>
  <div class="info-card">
    <p className='c_name'><strong>IIT Kanpur</strong></p>
    <div className='info'>
    <p>Fees: 9,79,000</p>
    </div>
  </div>
  
</div>

<div class="card">
  <div class="img-card">
  <img src={iitd} />
  </div>
  <div class="info-card">
    <p className='c_name'><strong>Amity University</strong></p>
    <div className='info'>
    <p>Fees: 27,00,000</p>
    </div>
  </div>
  
</div>


<div class="card">
  <div class="img-card">
  <img src={iitb} />
  </div>
  <div class="info-card">
    <p className='c_name'><strong>IIT Kharagpur</strong></p>
    <div className='info'>
    <p>Fees: 10,46,000</p>
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


</div>
  )
}

export default Possibility