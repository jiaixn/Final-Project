import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./Services.css";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "CodeBar",
                info: "The best bar for coders!"
            },
            {
                icon: <FaHiking />,
                title: "Private Park",
                info: "The private walking zone for fat programmers! Be health!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Get u to any place u ask!"
            },
            {
                icon: <FaBeer />,
                title: "Party Area",
                info: "After the completion of the project, why not have a drink!"
            }
        ]
    };


    /* using map to frame data from state */
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    };
}
