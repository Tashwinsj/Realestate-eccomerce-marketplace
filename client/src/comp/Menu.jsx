import React from "react";
import "./menu.css"
export default function Menu() {
    return (
        <> 
          <div className="menubg">
            <div className="menucard">Buy a home
            <p className="blah">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else</p>
            <button className="mbtn" >Buy homes</button>
            </div> 
         
            <div className="menucard">Sell a home 
            <p className="blah">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
            <button className="mbtn" >See your options</button>
            </div> 
            <div className="menucard">Rent a home
            <p className="blah">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
            <button className="mbtn" >Find rentals</button>
            </div> 
          </div>
        </>
    )
}