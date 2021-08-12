import { FaPhoneAlt, FaMailBulk, FaAddressCard } from "react-icons/fa";
import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component{
    state = {
        contacts: [
            {
                icon: <FaAddressCard />,
                info: "Somwhere st, 54 Div, Mars"
            },
            {
                icon: <FaPhoneAlt />,
                info: "753-xxx-xxxx"
            },
            {
                icon: <FaMailBulk />,
                info: "likehome_contacts@guuugle.com"
            }
        ]
    }

    /* using map to frame data from state */
    render() {
        return(
            <div className="footer-container">
                <div className="contacts">
                    {this.state.contacts.map((item, index) => {
                        return (<article key={index} className="contact">
                            <span>{item.icon}</span>
                            <h6>{item.info}</h6>
                            </article>
                        );
                    })}
                </div>
                <div className="footer-text">
                    <p>@2021 Rujia International Company</p>
                </div>
            </div>
        );
    };
}