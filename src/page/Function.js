import React from "react";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";

import Hero from "../Hero";
import Banner from "../Banner";
import FunctionContainer from "../FunctionContainer";

export default function Function() {
    const meta = {
        title: 'BAD Hotel Facilities',
        description: 'BAD Hotel has many facilities to fulfill all customers\' wishes',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'BAD hotel,hotel,hotel facility'
            }
        }
    }

    return(
        //react.fragments to classes
        <>
            <DocumentMeta {...meta} />
            {/* call hero and banner to create title part that shows the page info */}
            <Hero  hero="roomsHero">
                <Banner title = "Our Facilities">
                    <Link to="/COMP3340/finalproject/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            {/* main parts */}
            <FunctionContainer />
        </>
    );
}