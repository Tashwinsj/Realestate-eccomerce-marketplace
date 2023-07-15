import React from "react"; 
import "./card.css"

export default function Card({photo ,price , bds ,ba , area ,status , address , company ,tag , ago}){
    return(
        <> 
         <div className="cards" > 
            {tag && <p className="tager">{ago} ago</p>} 
            <div className="like"><i class="fa-regular fa-heart"></i></div>
            <img src ={ photo} className="mpic" ></img>
            <h2 className="price">${price}</h2> 
            <h5 className="desc"> {`${bds}bds | ${ba}ba | ${area} sqft - ${status}`}</h5>  
            <h5 className="desc">{`${address}`}</h5> 
            <h6 className="comp">{`${company}`}</h6> 
         </div>  
        </>
    )
}