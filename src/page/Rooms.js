import React from "react";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";

import Hero from "../Hero";
import Banner from "../Banner";
import Roomcontainer from "../Roomcontainer";

export default function Rooms() {
  const meta = {
      title: 'BAD Hotel Rooms',
      description: 'BAD Hotel has many rooms for customer to choose',
      meta: {
          charset: 'utf-8',
          name: {
              keywords: 'BAD hotel,hotel,hotel rooms'
          }
      }
  }

  return (
    //react.fragments to classes
    <>
    <DocumentMeta {...meta} />
      {/* call hero and banner to create title part that shows the page info */}
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/COMP3340/finalproject/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      {/* main parts */}
      <Roomcontainer />
    </>
  );
}
