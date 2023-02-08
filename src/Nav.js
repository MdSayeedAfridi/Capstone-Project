import React from 'react'
import { Link } from "react-router-dom"


function Nav() {
    return (
        <>
            <div className="nav-container">
                <img src="logo.png" alt="logo" className="nav-logo" />

                <nav className="navbar">
                    <ul>
                        <li className="item1"> <Link to="/"  className="nav-item">
                            Home
                        </Link></li>
                        <li className="item2"><Link to="about" className="nav-item">
                            About
                        </Link></li>
                        <li className="item3"><Link to="menu" className="nav-item">
                            Menu
                        </Link></li>
                        <li className="item4"><Link to="/booking" className="nav-item">
                            Reservation
                        </Link></li>
                        <li className="item5"><Link to="orderOnline" className="nav-item">
                            Order Online
                        </Link></li>
                        <li className="item6"><Link to="login" className="nav-item">
                            Login
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav;
