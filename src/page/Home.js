import React from "react";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";

import Hero from "../Hero";
import Banner from "../Banner";
import Services from "../Services";
import FeaturedRooms from "../Featuredroom";

export default function Home() {
  const meta = {
      title: 'BAD Hotel Home',
      description: 'BAD Hotel is the most extrodinary hotel on Mars',
      meta: {
          charset: 'utf-8',
          name: {
              keywords: 'BAD hotel,hotel,Mars Hotel'
          }
      }
  }

  return (
    //react.fragments to classes
    <>
    <DocumentMeta {...meta} />
      {/* call hero and banner to create title part that shows the page info */}
      <Hero>
        <Banner
          title="Rujia BAD Hotel"
          subtitle="Enjoy ur best time on Mars"
        >
          <Link to="/COMP3340/finalproject/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      {/* main parts */}
      <Services />
      <FeaturedRooms />
    </>
  );
}
