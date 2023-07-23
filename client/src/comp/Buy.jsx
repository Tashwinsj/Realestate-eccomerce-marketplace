import React from "react";
import "./buy.css" 
import Card from "./Card"; 
import home from "../assets/home.jpg" 
import hom from "../assets/hom.jpg"  
import "./dd.css" 
import { useState } from "react";
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

    const [o1 , s1] = useState(false) ; 
    const [o2 , s2] = useState(false) ; 
    const [o3 , s3] = useState(false) ; 
    const [o4 , s4] = useState(false) ; 
    const [o5 , s5] = useState(false) ;  
    //select option  : 
    const [op1 , sop1] = useState("")  ; 

    const handleFileChange= event =>{ 
      const val = event.target.value  
      sop1(val)
  
    }
    

    return (
        <> 
        <div className="ddbody" >
            
            <form>
                <input type="text" className="ser"></input>
            </form>
        
        <div className="b1" >For Sale{o1 && 
           <div className="dropbox">  
           <form onChange={  event => handleFileChange(event)}>
           <input type="radio" value="For Sale" name="gender" ></input>For sale  
           <br></br>
           <input type="radio" value="For Rent" name="gender" ></input>For Rent
           <br></br>
           <input type="radio" value="Sold" name="gender" ></input>Sold
           </form>
           </div>
        }</div> 
        <button className="doi" onClick={()=>{s1(!o1)}}>click </button>
        <div className="b2">Price{o2 && <>
        <div className="dropbox">
        <form onChange={  event => handleFileChange(event)}>
           <input type="radio" value="For Sale" name="gender" ></input>For sale  
           <br></br>
           <input type="radio" value="For Rent" name="gender" ></input>For Rent
           <br></br>
           <input type="radio" value="Sold" name="gender" ></input>Sold
           </form>
        </div>
        </>}</div>
        <button className="doi2" onClick={()=>{s2(!o2)}}>blick </button>
        <div className="b3">Beds & Baths{o3 &&<>
        <div className="dropbox">
          <form onChange={  event => handleFileChange(event)}>
           <input type="radio" value="For Sale" name="gender" ></input>For sale  
           <br></br>
           <input type="radio" value="For Rent" name="gender" ></input>For Rent
           <br></br>
           <input type="radio" value="Sold" name="gender" ></input>Sold
           </form>
        </div>
        
        </>}</div> 
        <button className="doi3" onClick={()=>{s3(!o3)}}>click </button>
        <div className="b4">Home Type {o4 && <>
        <div className="dropbox">
        <form onChange={  event => handleFileChange(event)}>
           <input type="radio" value="For Sale" name="gender" ></input>For sale  
           <br></br>
           <input type="radio" value="For Rent" name="gender" ></input>For Rent
           <br></br>
           <input type="radio" value="Sold" name="gender" ></input>Sold
           </form>
        </div>
        </>}</div>
        <button className="doi4" onClick={()=>{s4(!o4)}}>click </button> 
        <div className="b5">More{o5 && <> 
        <div className="dropbox">
        <form onChange={  event => handleFileChange(event)}>
           <input type="radio" value="For Sale" name="gender" ></input>For sale  
           <br></br>
           <input type="radio" value="For Rent" name="gender" ></input>For Rent
           <br></br>
           <input type="radio" value="Sold" name="gender" ></input>Sold
           </form>
        </div>
        
        </>}</div> 
        <button className="doi5" onClick={()=>{s5(!o5)}}>click </button> 
        <button className="sbtn">{op1}</button>
     </div>
        <div className="whole" >
          <div className="mapsbody">@ Google Maps</div>
          <div className="buybody"> 
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
            <Card {...homedesc}   />
            <Card {...homedesc2}/>
          </div>
          </div>
        </>
    )
} 
 