import React from "react";
import "./search.css"
export default function Search() {
    return (
        <> 
         <div className="srch">
             <form>
                <input type="text" className="sbox"></input> 
                <button className="sb" type="submit">🔍</button>
             </form>
         </div>
        </>
    )
}