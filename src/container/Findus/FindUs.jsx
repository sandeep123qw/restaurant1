import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='contact' />
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rem?</p>
        <p className='p__cormorant' style={{color:'#DCCAB7',margin:'2rem 0'}}> Opening Hours</p>
        <p className='p__opensans'> mon-fri: 10:00am - 02:00am </p>
        <p className='p__opensans'> sat-sun: 10:00am - 03:00am</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}> Visit Us</button>
       </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
