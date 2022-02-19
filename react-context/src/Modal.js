import React from 'react'
import { useGlobalContext } from './context';
const Modal = () => {
    const { isClicked, closeModal } = useGlobalContext();
    return (
      <div
        className={`${
          isClicked ? 'modal active' : 'modal'
        }`}>
        <div className='container'>
          <h3>modal content</h3>
          <button onClick={closeModal}>close modal</button>
        </div>
      
      </div>
    );
}

export default Modal