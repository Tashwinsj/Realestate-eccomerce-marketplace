import React, { useEffect } from "react";
import "./buy.css" 
import Card from "./Card"; 
import "./dd.css" 
import { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

// later use map funtions to map the card props and stuff  
const QUERY_ALL_USERS = gql`
query GetAllUsers {
  homes {
      photo 
      price  
      bds   
      ba  
      area  
      status  
      address  
      company  
      tag  
      ago 
  }
} 
`; 
var iota = 0 ; 
const QUERY_PRICE = gql`
   query getprice($fs: Int!, $pr: Int!, $bb: Int!, $ht: Int!, $mr: Int!) {
      arghome(fs: $fs, pr: $pr, bb: $bb, ht: $ht, mr: $mr){
         photo 
         price  
         bds   
         ba  
         area  
         status  
         address  
         company  
         tag  
         ago 
      }
   }


`



const i =0 ; 

export default function Buy() { 
     

   const [o1 , s1] = useState(false) ; 
    const [o2 , s2] = useState(false) ; 
    const [o3 , s3] = useState(false) ; 
    const [o4 , s4] = useState(false) ; 
    const [o5 , s5] = useState(false) ;  
    //select option  :  
    const [op1 , sop1 ] = useState("")
     
    const [opt1 , sp1] = useState(3) ; 
    const [opt2 , sp2] = useState(3) ; 
    const [opt3 , sp3] = useState(0) ; 
    const [opt4 , sp4] = useState(3) ; 
    const [opt5 , sp5] = useState(0) ; 

   
  const {data , loading , refetch} = useQuery(QUERY_PRICE ,{ variables:{ fs : opt1 , pr : opt2 , bb : opt3 , ht : opt4 ,mr : 0 }}) ;  
  if(data) {
      console.log(data)
  }  
    

    const handleFileChange= event =>{ 
      const val = Number(event.target.value )
      sp1(val)
  
    }
    const handlpricechange= event =>{ 
      const val = Number(event.target.value)   
      sp2(val)
    } 
    const handlebedbathchange= event =>{
      const vul = Number(event.target.value) 
      sp3(vul)
    } 
    const handlehtchange = event =>{
      const ht = Number(event.target.value) 
      sp4(ht)
    }
    const handlemorechange = event =>{
      sp5(0)
    }
    const handleclearclick =()=>{
      sp1(3)  
      sp1(3)  
      sp1(0)
      sp1(3)
      sp1(0)
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
           <div className="selector"><input type="radio" value="0" name="htype" className="selector"></input>For sale </div> 
           <br></br>
           <div className="selector"><input type="radio" value="1" name="htype" className="selector"></input>For Rent </div> 
           <br></br>
           <div className="selector"><input type="radio" value="2"  name="htype" className="selector"></input>Sold </div> 
           </form>
           </div>
        }</div> 
        <button className="doi" onClick={()=>{s1(!o1)}}><i class="fa-solid fa-caret-down"></i> </button>
        <div className="b2">Price{o2 && <>
        <div className="dropbox">
        <form onChange={  event => handlpricechange(event)}>
           <div className="selector"><input type="radio" value="0" name="price" className="selector"></input>1M - 1.5M</div> 
           <br></br>
           <div className="selector"><input type="radio" value="1" name="price" className="selector"></input>1.5M - 2M</div> 
           <br></br>
           <div className="selector"><input type="radio" value="2" name="price" className="selector"></input>2M &lt; </div> 
           </form>
        </div>
        </>}</div>
        <button className="doi2" onClick={()=>{s2(!o2)}}><i class="fa-solid fa-caret-down"></i> </button>
        <div className="b3">Beds & Baths{o3 &&<>
        <div className="dropbox">
        <form onChange={  event => handlebedbathchange(event)}>
           <div className="selector"><input type="radio" value="33" name="bedsbaths" className="selector"></input>3bd & 3b&gt; </div> 
           <br></br>
           <div className="selector"><input type="radio" value="44" name="bedsbaths" className="selector"></input>4bd & 4b&gt; </div> 
           <br></br>
           <div className="selector"><input type="radio" value="55" name="bedsbaths" className="selector"></input>5bd & 5b&gt;</div> 
           </form>
        </div>
        
        </>}</div> 
        <button className="doi3" onClick={()=>{s3(!o3)}}><i class="fa-solid fa-caret-down"></i> </button>
        <div className="b4">Home Type {o4 && <>
        <div className="dropbox">
        <form onChange={  event => handlehtchange(event)}>
           <div className="selector"><input type="radio" value="0" name="type" className="selector"></input>Houses</div> 
           <br></br>
           <div className="selector"><input type="radio" value="2" name="type" className="selector"></input>Condos</div> 
           <br></br>
           <div className="selector"><input type="radio" value="1" name="type" className="selector"></input>Apartmen</div> 
           </form>
        </div>
        </>}</div>
        <button className="doi4" onClick={()=>{s4(!o4)}}><i class="fa-solid fa-caret-down"></i> </button> 
        <div className="b5">More{o5 && <> 
        <div className="dropbox">
        <form onChange={  event => handlemorechange(event)}>
           <div className="selector"><input type="radio" value="For Sale" name="more" className="selector"></input>Garage</div> 
           <br></br>
           <div className="selector"><input type="radio" value="For Rent" name="more" className="selector"></input>3D tours</div> 
           <br></br>
           <div className="selector"><input type="radio" value="Sold" name="more" className="selector"></input>Basement </div> 
           </form>
        </div>
        
        </>}</div> 
        <button className="doi5" onClick={()=>{s5(!o5)}}><i class="fa-solid fa-caret-down"></i> </button> 
        <button className="sbtn" onClick={handleclearclick}>Clear Filters</button>
     </div> 
     {/* The dropdown stuff ends here and the buying are and maps areas starts here */}
        <div className="whole" >
          <div className="mapsbody">@ Google Maps</div>
          <div className="buybody"> 
             {data && data.arghome.map((w)=>{return<Card {...w}></Card>})}
          </div>
          </div>
        </>
    )
} 
 