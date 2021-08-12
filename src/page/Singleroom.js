import React, { Component } from 'react';
import DocumentMeta from "react-document-meta";
import { Link } from 'react-router-dom';

import defaultBcg from '../image/room-2.jpg';
import Banner from '../Banner';
import { RoomContext } from '../Context';
import StyledHero from '../StyledHero';

import "./Singleroom.css";

export class SingleRoom extends Component {
  /*initialize class*/
  constructor(props) {
    super(props);
    /* set state as data */
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    /* read room that clicked */
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) { /* if no such room page found return */
      return (
        <div className='error'>
          <h3>No such room could be found...</h3>
          <Link to='/COMP3340/finalproject/rooms' className='btn-primary'>
            Back to room
          </Link>
        </div>
      );
    }

    /* set data for furthur usage */

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    const meta = {
      title: 'BAD Hotel ' + room.name +' Room',
      description: 'BAD Hotel has the best ' + room.name +' room u can find on Mars',
      meta: {
          charset: 'utf-8', 
          name: {
              keywords: 'BAD hotel,hotel,hotel rooms,' +  room.name
          }
      }
    }

    return (
      /* use styled hero frame to decorate the room link */
      <React.Fragment>
      <DocumentMeta {...meta} />
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/COMP3340/finalproject/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          {/* image parts */}
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          {/* detail parts */}
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        {/* if theres extra info */}
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default SingleRoom;