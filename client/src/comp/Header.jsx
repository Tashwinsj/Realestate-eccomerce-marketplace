import React from "react";
import "./header.css"
import { Outlet, Link } from "react-router-dom";
export default function Header() {
    return (
        <> 
        <div className="head">
            <Link to="/buy" className="headcomp">Buy</Link>
            <div className="headcomp">Rent</div>
            <div className="headcomp">Sell</div>
            <div className="headcomp">Agent Finder</div>
            <Link to="/" className="logo">Dwellz</Link>
            <div className="headcomp"> Loans</div>
            <div className="headcomp">ads</div>
            <div className="headcomp">help </div>
            <div className="headcomp">sign in</div>
        </div>
        </>
    )
}