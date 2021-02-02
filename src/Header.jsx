import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">
                            <i class="fas fa-home"></i>
                            <span className="link-text logo-text">Port-Folio</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">
                            <i class="fas fa-home"></i>
                            <span className="link-text">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/about_me">
                            <i class="fas fa-user"></i>
                            <span className="link-text">About</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/under_contruction">
                            <i class="fas fa-cog"></i>
                            <span className="link-text">Services</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/under_contruction">
                            <i class="fas fa-cog"></i>
                            <span className="link-text">Contact Me</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;