import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../Features/ModalSlice';
import { AiFillAndroid } from 'react-icons/ai';
import { MdCode } from 'react-icons/md';
import ServiceModal from '../ServiceModal/ServiceModal';
import './Services.css';

export const Services: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <MdCode className='service-icon' />
          <h3>Web Development</h3>
          <p>I specialize in web development using the MERN stack...</p>
          <button onClick={() => dispatch(openModal('web'))} className="btn">Read More</button>
        </div>

        <div className="services-box">
          <AiFillAndroid className='service-icon' />
          <h3>Android Development</h3>
          <p>Skilled in building dynamic, cross-platform Android...</p>
          <button onClick={() => dispatch(openModal('android'))} className="btn">Read More</button>
        </div>
      </div>

      <ServiceModal />
    </section>
  );
};
