import React from 'react';
import Room from './Room';
import "./Roomlist.css";

function RoomList({ rooms }) {
  /* return the filter result */
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}

export default RoomList;