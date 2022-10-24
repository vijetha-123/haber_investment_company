import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
        <img style={{height:80,width:80,marginLeft:10}} src="data:image/png;base64,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"></img>
            <ul className="navbar-nav"style={{marginLeft:350}}>
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
            <div className='row' style={{marginLeft:200}}>
                        <div>
                            <i style={{ color:"white", padding: 5, float: 'left' }} className="fa-brands fa-square-twitter fa-2x"></i>
                            <i style={{ color: "white", padding: 5, float: 'left' }} className="fa-brands fa-square-youtube fa-2x"></i>
                            <i style={{ color: "white", padding: 5, float: 'left' }} className="fa-solid fa-wifi fa-2x"></i>
                            <i style={{ color: "white", padding: 5, float: 'left' }} className="fa-brands fa-square-facebook fa-2x"></i>
                            <i style={{ color: "white", padding: 5, float: 'left' }} className="fa-brands fa-square-google-plus fa-2x"></i>
                        </div>
                    </div>
        </nav>
        </div>
    )
}