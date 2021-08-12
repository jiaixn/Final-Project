import React from 'react';
import RoomFilter from './Roomfilter';
import RoomList from './Roomlist';
import { withRoomConsumer } from './Context';
import Loading from './Loading';

/* room container is the main part of rooms page */
/* include filter and list, data from context */
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </React.Fragment>
  );
}

export default withRoomConsumer(RoomContainer);