import React, { Component } from 'react';
import { RoomContext } from './Context';
import Room from './Room';
import Loading from './Loading';
import Title from './Title';
import "./Featuredroom.css";

/* featured room show on home page */
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    /* read framed data of featured rooms, data transfered by context */
    let { featuredRooms: rooms, loading } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    /* create section and put on home page */
    return (
      <section className='featured-rooms'>
        <Title title='featured rooms' />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
};