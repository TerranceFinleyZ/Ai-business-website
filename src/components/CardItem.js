import React, { useState } from 'react';
import './CardItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

 
function CardItem(props) {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="card">
        <div>
          {openModal &&
            <div className='sliderWrap'>
              <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
              <div className='fullScreenImage'>
                <img src={props.url} alt='' />
              </div>
            </div>
          }
        </div>
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button onClick={ () => handleOpenModal() }>
          View
        </button>
      </p>
    </div>
  );
}

export default CardItem;
