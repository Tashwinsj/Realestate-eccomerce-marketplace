import React from "react";
import "./search.css"
export default function Search() {
    return (
        <> 
         <div className="srch"> 
            <div className="tagline">Homes - Tours - Agents - Loans</div>
             <form className="hori">
                <input type="text" className="sbox"></input> 
                <button className="sb" type="submit">🔍</button>
             </form>
         </div>
        </>
    )
}