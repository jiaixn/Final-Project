import React, { Component } from "react";
import "./FunctionContainer.css";

export default class FunctionContainer extends Component{
    state = {
        facilities: [
            {
                title: "Hotel Gym",
                cname: "f-gym",
                time: "24 hour",
                price: "Free for customer",
                description: "Time to move!!!!BOIS"
            },
            {
                title: "Chinese Restaurant",
                cname: "f-conres",
                time: "6:00 am - 10:00 am breafast / 11:00 am - 10:00 pm meal",
                price: "Free breakfast, meal to order (ask to read menu)",
                description: "Time to eat!!!!BOIS"
            },
            {
                title: "Conference",
                cname: "f-conf",
                time: "10:00 am - 10:00 pm",
                price: "Ask to know",
                description: "Call plz!!!"
            },
            {
                title: "Meeting Room",
                cname: "f-meeting",
                time: "10:00 am - 10:00 pm",
                price: "Ask to know",
                description: "Call plz!!!"
            },
            {
                title: "Hotel Spa",
                cname: "f-spa",
                time: "11:00 am - 10:00 pm",
                price: "Read Menu",
                description: "Relax time"
            },
            {
                title: "Sushi bar",
                cname: "f-sushi",
                time: "6:00 pm - 11:00 pm",
                price: "Very expensive, read menu",
                description: "Prepare your money"
            },
            {
                title: "Swimming pool",
                cname: "f-swimp",
                time: "8:00 am - 9:00 pm",
                price: "Free for customer",
                description: "Time to swim!!!!BOIS"
            }
        ]
    }

    /* using map to frame data from state */
    render() {
        return (
            <section className="functionContainer">
                <div className="facilities">
                    {this.state.facilities.map((item, index) => {
                        return (
                            <div className="facility">
                            <div className={item.cname} />
                            <div className="description">
                                <h3>{item.title}</h3>
                                <h6>Open Hour : {item.time}</h6>
                                <h6>Price : {item.price}</h6>
                                <h6>{item.description}</h6>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    };
}