import React from "react";
import "./dd.css"
export default function Dropdown() {
    return (
        <> 
         <div className="ddbody" >
            
                <form>
                    <input type="text" className="ser"></input>
                </form>
            
            <div className="blocks">For Sale</div>
            <div className="blocks">Price</div>
            <div className="blocks">Beds & Baths</div>
            <div className="blocks">Home Type</div>
            <div className="blocks">More</div> 
            <button className="sbtn">Save Search</button>
         </div>
        </>
    )
}