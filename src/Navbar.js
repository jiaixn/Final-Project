import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaAlignLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import { Component } from "react";

class Navbar extends Component{
    state = {
        isOpen: false,
        sidebar: false
    };
    
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    
    showSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar });
    };

    render() {
        return(
            /* navbar part of website */
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-header">
                        <button 
                            type="button" 
                            className="nav-menubtn" 
                            onClick = {this.showSidebar}>
                            <FaAlignLeft className="nav-icon" />
                        </button>
                        <Link to="/COMP3340/finalproject/">
                            <img src="./icon.png" alt="icon" />
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn" 
                            onClick = {this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    {/* two classnames, the table show or not by checking if button is pressed */}
                    {/* in css, using media to hide the links while the page size is small and user can press the button to see them */}
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/COMP3340/finalproject/">Home</Link>
                        </li>
                        <li>
                            <Link to="/COMP3340/finalproject/rooms">Room</Link>
                        </li>
                        <li>
                            <Link to="/COMP3340/finalproject/function">Facility</Link>
                        </li>
                    </ul>
                </div>
                {/* same methods as the hiding navbar, the side bar will hide all the time until user press the button */}
                <div className={this.state.sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className="side-menu-items">
                        <li className="side-toggle">
                            <Link to="#" className="side-bars"  onClick={this.showSidebar}>
                                <AiOutlineClose />
                            </Link>
                        </li>
                        <li className="gap-container">
                            <div className="gap" />
                        </li>
                        <li className="side-link">
                            <Link to="/COMP3340/finalproject/">Home</Link>
                        </li>
                        <li className="side-link">
                            <Link to="/COMP3340/finalproject/rooms">Room</Link>
                        </li>
                        <li className="side-link">
                            <Link to="/COMP3340/finalproject/function">Facility</Link>
                        </li>
                        <li className="gap-container">
                            <div className="gap" />
                        </li>
                        <li className="contact-text">
                            <h6>Address:</h6><h6>Somwhere st, 54 Div, Mars</h6>
                        </li>
                        <li className="contact-text">
                            <h6>Phone:</h6><h6>753-xxx-xxxx</h6>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}

export default Navbar;