import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Hero";
import Banner from "../Banner";

export default function Error() {
  return (
    /*call hero and banner to create title part that shows the page info*/
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/COMP3340/finalproject/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
}
