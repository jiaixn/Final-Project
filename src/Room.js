import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from './image/room-2.jpg';
import PropTypes from 'prop-types';
import "./Room.css";

/* frame room image name and price */
function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single-room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/COMP3340/finalproject/rooms/${slug}`} className='btn-primary room-link'>
          Details
        </Link>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;