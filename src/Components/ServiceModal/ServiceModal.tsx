import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import { closeModal } from '../../Features/ModalSlice';
import { AiFillAndroid } from 'react-icons/ai';
import { MdCode } from 'react-icons/md';
import './ServiceModal.css';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state: RootState) => state.modal);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {content === 'web' && (
          <>
            <div className="service-modal-header">
              <h3><MdCode /> Web Development </h3>

              <button className="modal-close btn" onClick={() => dispatch(closeModal())}>X</button>

            </div>
            <p>
              I specialize in building dynamic and scalable web applications using the MERN stack (MongoDB, Express, React, and Node.js).
              MongoDB provides flexible and scalable data storage, while Express simplifies backend development with a fast, minimalist framework.
              React allows for the creation of interactive, high-performance user interfaces, and Node.js powers the server-side, enabling full-stack JavaScript development.
              Together, these technologies allow me to build robust, efficient, and responsive web applications that offer seamless user experiences and are easy to scale as your business grows.
            </p>
          </>
        )}
        {content === 'android' && (
          <>
            <div className="service-modal-header">
              <h3><AiFillAndroid /> Android Development  </h3>


              <button className="modal-close btn" onClick={() => dispatch(closeModal())}>X</button>

            </div>
            <p>
              I specialize in building high-performance, cross-platform Android applications using Flutter. With Flutter’s rich set of pre-designed widgets and its fast development cycle,
              I create responsive, visually appealing apps that provide a seamless user experience across Android devices.
              By utilizing Flutter’s native performance and expressive UI capabilities, I ensure that your app not only looks great but also delivers smooth, efficient performance.
              Whether you're looking to develop a new mobile application or optimize an existing one, I can help bring your ideas to life with Flutter.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
