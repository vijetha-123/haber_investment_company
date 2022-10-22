import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link className="nav-link" to="*">HOME </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="BScomp">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="BScomp">SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="BScomp">OUR BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="BScomp">CONTACTS</Link>
                </li>
            </ul>
        </nav>
    )
}