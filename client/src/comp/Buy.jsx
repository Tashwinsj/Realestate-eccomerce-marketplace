import React from "react";
import "./buy.css" 
import Card from "./Card"; 
import home from "../assets/home.jpg" 
import hom from "../assets/hom.jpg" 
// later use map funtions to map the card props and stuff  
const homedesc ={ 
  photo : home ,
  price : "214,450"  , 
  bds : 4 ,
  ba : 3 ,
  area : 2745 ,
  status : "House for sale" ,
  address : "527 Date St, Minnesota Lake, MN 56068" ,
  company : "TRUE REAL ESTATE" , 
  tag : true , 
  ago : "20 hours"
} 
const homedesc2 ={ 
  photo : hom ,
  price : "310,000"  , 
  bds : 4 ,
  ba : 3 ,
  area : 2745 ,
  status : "House for sale" ,
  address : "527 Date St, Minnesota Lake, MN 56068" ,
  company : "TRUE REAL ESTATE" ,  
  tag : true  , 
  ago  : "9 hours"
} 
export default function Buy() {
    return (
        <> 
          <div className="buybody"> 
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card/> 
          </div>
        </>
    )
}